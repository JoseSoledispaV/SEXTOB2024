import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaccion } from './entities/transaccion.entity';
import { TransaccionService } from './transaccion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  providers: [TransaccionService],
  exports: [TypeOrmModule],
})
export class TransaccionModule {}
