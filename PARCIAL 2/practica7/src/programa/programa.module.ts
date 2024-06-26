// src/programa/programa.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { ProgramaService } from './programa.service';
import { ProgramaController } from './programa.controller';
import { ProgramaResolver } from './programa.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Programa])],
  providers: [ProgramaResolver, ProgramaService],
  //controllers: [ProgramaController],
  exports: [TypeOrmModule]
})
export class ProgramaModule {}
