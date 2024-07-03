import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conexion } from './conexion.entity';
import { ConexionService } from './conexion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Conexion])],
  providers: [ConexionService],
  exports: [TypeOrmModule],
})
export class ConexionModule {}
