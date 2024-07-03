import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conexion } from './conexion.entity';

@Injectable()
export class ConexionService {
  constructor(
    @InjectRepository(Conexion)
    private readonly conexionRepository: Repository<Conexion>,
  ) {}

  async create(userId: string, socketId: string): Promise<Conexion> {
    const conexion = this.conexionRepository.create({ userId, socketId });
    return await this.conexionRepository.save(conexion);
  }

  async findByUserId(userId: string): Promise<Conexion[]> {
    return await this.conexionRepository.find({ where: { userId, estado: true } });
  }

  async deleteBySocketId(socketId: string): Promise<void> {
    await this.conexionRepository.update({ socketId }, { estado: false });
  }
}
