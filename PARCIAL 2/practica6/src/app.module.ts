import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanalModule } from './canal/canal.module';
import { GuiaModule } from './guia/guia.module';
import { ProgramaModule } from './programa/programa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://mongo:OnYqdQXGwPWBaxKKAnpcYHwDgDLSmlzM@roundhouse.proxy.rlwy.net:33096',  // Cambia esto según tu configuración de MongoDB
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    CanalModule,
    GuiaModule,
    ProgramaModule,
  ],
})
export class AppModule {}
