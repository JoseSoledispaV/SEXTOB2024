import { Module } from '@nestjs/common';
import { GuiaService } from './guia.service';
import { GuiaController } from './guia.controller';
import { Guia } from './entities/guia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuiaResolver } from './guia.resolver';

@Module({
  //controllers: [GuiaController],
  providers: [GuiaResolver, GuiaService],
  imports: [TypeOrmModule.forFeature([Guia]) ],
  exports: [TypeOrmModule]
})
export class GuiaModule {}
