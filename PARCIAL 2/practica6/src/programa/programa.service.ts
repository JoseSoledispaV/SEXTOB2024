// src/programa/programa.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Programa } from './entities/programa.entity';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository: Repository<Programa>,
  ) {}

  async findAll(): Promise<Programa[]> {
    return await this.programaRepository.find({ where: { estado: true } });
  }
  
  async findOne(id: string): Promise<Programa> {
    return await this.programaRepository.findOne({ where: { id, estado: true } });
  }
  
  async create(createProgramaDto: CreateProgramaDto): Promise<Programa> {
    const programa = this.programaRepository.create(
      {
        ...createProgramaDto,
        estado: true, // Aquí se asegura de establecer el estado como true
      }
    );
    return await this.programaRepository.save(programa);
  }
  

  async update(id: string, updateProgramaDto: UpdateProgramaDto): Promise<Programa> {
    await this.programaRepository.update(id, updateProgramaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.programaRepository.update(id, { estado: false });
  }
}
