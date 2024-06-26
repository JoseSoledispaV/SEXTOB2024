// src/programa/programa.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Programa } from './entities/programa.entity';
import { CreateProgramaInput } from './dto/create-programa.input';
import { UpdateProgramaInput } from './dto/update-programa.input';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  findAll(estado?: boolean): Promise<Programa[]> {
    if (estado === undefined) {
      return this.programaRepository.find();
    }
    return this.programaRepository.find({ where: { estado } });
  }

  async findOne(id: string): Promise<Programa> {
    const programa = await this.programaRepository.findOne({ where: { id, estado: true } });
    if (!programa) {
      throw new NotFoundException(`Programa with ID ${id} not found or is inactive`);
    }
    return programa;
  }

  async create(createProgramaInput: CreateProgramaInput): Promise<Programa> {
    const programa = this.programaRepository.create(createProgramaInput);
    programa.estado = true; // Ensure the state is set to true on creation
    return this.programaRepository.save(programa);
  }

  async update(id: string, updateProgramaInput: UpdateProgramaInput): Promise<Programa> {
    await this.programaRepository.update(id, updateProgramaInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const programa = await this.findOne(id);
    if (!programa) {
      throw new NotFoundException(`Programa with ID ${id} not found or is inactive`);
    }
    await this.programaRepository.update(id, { estado: false });
  }
}
