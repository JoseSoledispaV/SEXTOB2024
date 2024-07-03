// src/guia/guia.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guia } from './entities/guia.entity';
import { CreateGuiaInput } from './dto/create-guia.input';
import { UpdateGuiaInput } from './dto/update-guia.input';

@Injectable()
export class GuiaService {
  constructor(
    @InjectRepository(Guia)
    private readonly guiaRepository: Repository<Guia>,
  ) {}

  findAll(estado?: boolean): Promise<Guia[]> {
    if (estado === undefined) {
      return this.guiaRepository.find({ relations: ['canal', 'programa'] });
    }
    return this.guiaRepository.find({ where: { estado }, relations: ['canal', 'programa'] });
  }

  async findOne(id: string): Promise<Guia> {
    const guia = await this.guiaRepository.findOne({ where: { id, estado: true }, relations: ['canal', 'programa'] });
    if (!guia) {
      throw new NotFoundException(`Guia with ID ${id} not found or is inactive`);
    }
    return guia;
  }

  async create(createGuiaInput: CreateGuiaInput): Promise<Guia> {
    const guia = this.guiaRepository.create(createGuiaInput);
    guia.estado = true; // Ensure the state is set to true on creation
    return this.guiaRepository.save(guia);
  }

  async update(id: string, updateGuiaInput: UpdateGuiaInput): Promise<Guia> {
    await this.guiaRepository.update(id, updateGuiaInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const guia = await this.findOne(id);
    if (!guia) {
      throw new NotFoundException(`Guia with ID ${id} not found or is inactive`);
    }
    await this.guiaRepository.update(id, { estado: false });
  }
}
