import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';
import { Guia } from './entities/guia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GuiaController],
  providers: [GuiaService],
  imports: [TypeOrmModule.forFeature([Guia]) ],
  exports: [TypeOrmModule]
})
export class GuiaModule {}
