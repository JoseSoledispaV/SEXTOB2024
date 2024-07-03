
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanalModule } from './canal/canal.module';
import { GuiaModule } from './guia/guia.module';
//import { SocketGateway } from './socket.gateway';
import { ProgramaModule } from './programa/programa.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { UserConnectionModule } from './user-connection/user-connection.module';
import { TransaccionModule } from './transaccion/transaccion.module';
import { AppGateway } from './app.gateway';
import { TransaccionService } from './transaccion/transaccion.service';
import { ConexionModule } from './conexion/conexion.module';
import { Conexion } from './conexion/conexion.entity';
import { ConexionService } from './conexion/conexion.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],
      
    }),
    TypeOrmModule.forRoot({ 
      type: 'mongodb',
      url: 'mongodb://mongo:psmNakRNgIXKHFZMxklXoHuaRsavBGID@monorail.proxy.rlwy.net:52393',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    CanalModule,
    GuiaModule,
    ProgramaModule,
    TransaccionModule,
    ConexionModule
    //UserConnectionModule,
  ],
  controllers: [],
  providers: [TransaccionService,AppGateway,ConexionService],
})
export class AppModule {}
