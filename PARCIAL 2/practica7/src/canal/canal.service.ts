// src/canal/canal.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canal } from './entities/canal.entity';
import { CreateCanalInput } from './dto/create-canal.input';
import { UpdateCanalInput } from './dto/update-canal.input';

@Injectable()
export class CanalService {
  constructor(
    @InjectRepository(Canal)
    private readonly canalRepository: Repository<Canal>,
  ) {}

  findAll(estado?: boolean): Promise<Canal[]> {
    if (estado === undefined) {
      return this.canalRepository.find();
    }
    return this.canalRepository.find({ where: { estado } });
  }

  async findOne(id: string): Promise<Canal> {
    const canal = await this.canalRepository.findOne({ where: { id, estado: true } });
    if (!canal) {
      throw new NotFoundException(`Canal with ID ${id} not found or is inactive`);
    }
    return canal;
  }

  async create(createCanalInput: CreateCanalInput): Promise<Canal> {
    const canal = this.canalRepository.create(createCanalInput);
    canal.estado = true; // Ensure the state is set to true on creation
    return this.canalRepository.save(canal);
  }

  async update(id: string, updateCanalInput: UpdateCanalInput): Promise<Canal> {
    await this.canalRepository.update(id, updateCanalInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const canal = await this.findOne(id);
    if (!canal) {
      throw new NotFoundException(`Canal with ID ${id} not found or is inactive`);
    }
    await this.canalRepository.update(id, { estado: false });
  }
}
