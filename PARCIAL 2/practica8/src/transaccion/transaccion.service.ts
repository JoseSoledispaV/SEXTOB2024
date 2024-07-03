import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { CreateTransaccionInput } from './dto/create-transaccion.input';

@Injectable()
export class TransaccionService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionRepository: Repository<Transaccion>,
  ) {}

  async create(transaccionData: CreateTransaccionInput): Promise<Transaccion> {
    const transaccion = this.transaccionRepository.create(transaccionData);
    return await this.transaccionRepository.save(transaccion);
  }

  async findAll(): Promise<Transaccion[]> {
    return await this.transaccionRepository.find({ where: { estado: true } });
  }

  async softDelete(id: number): Promise<void> {
    await this.transaccionRepository.update(id, { estado: false });
  }
}
