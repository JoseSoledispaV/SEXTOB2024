import { Module } from '@nestjs/common';
import { CanalService } from './canal.service';
import { CanalController } from './canal.controller';
import { Canal } from './entities/canal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanalResolver } from './canal.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Canal])],
  providers: [CanalResolver, CanalService],
 // controllers: [CanalController],
  exports: [TypeOrmModule]
})
export class CanalModule {}
