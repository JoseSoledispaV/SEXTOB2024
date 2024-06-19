// src/guia/guia.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guia } from './entities/guia.entity';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';

@Injectable()
export class GuiaService {
  constructor(
    @InjectRepository(Guia)
    private readonly guiaRepository: Repository<Guia>,
  ) {}

  async findAll(): Promise<Guia[]> {
    return await this.guiaRepository.find({ where: { estado: true } });
  }

  async findOne(id: string): Promise<Guia> {
    return await this.guiaRepository.findOne({ where: { id, estado: true } });
  }


  async create(createGuiaDto: CreateGuiaDto) {
    const respuesta = this.guiaRepository.create(
      {...createGuiaDto,
        canal: {id: createGuiaDto.canalId},
        programa: {id: createGuiaDto.programaId},
        estado: true, // Aquí se asegura de establecer el estado como true
      });
    await  this.guiaRepository.save(respuesta);
    return respuesta;
  }

  async update(id: string, updateGuiaDto: UpdateGuiaDto): Promise<Guia> {
    await this.guiaRepository.update(id, updateGuiaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.guiaRepository.update(id, { estado: false });
  }
}
