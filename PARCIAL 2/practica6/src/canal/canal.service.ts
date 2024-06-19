import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canal } from './entities/canal.entity';
import { CreateCanalDto } from './dto/create-canal.dto';
import { UpdateCanalDto } from './dto/update-canal.dto';

@Injectable()
export class CanalService {
  constructor(
    @InjectRepository(Canal)
    private readonly canalRepository: Repository<Canal>,
  ) {}

  findAll(): Promise<Canal[]> {
    return this.canalRepository.find({ where: { estado: true } });
  }

  findOne(id: string): Promise<Canal> {
    return this.canalRepository.findOne({ where: { id, estado: true } });
  }

  async create(createCanalDto: CreateCanalDto): Promise<Canal> {
    const canal = this.canalRepository.create({
      ...createCanalDto,
      estado: true, // Aquí se asegura de establecer el estado como true
    });
    return await this.canalRepository.save(canal);
  }

  async update(id: string, updateCanalDto: UpdateCanalDto): Promise<Canal> {
    await this.canalRepository.update(id, updateCanalDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.canalRepository.update(id, { estado: false });
  }
}
