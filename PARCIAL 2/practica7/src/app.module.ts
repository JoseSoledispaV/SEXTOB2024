
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
import { ProgramaModule } from './programa/programa.module';

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
      url: 'mongodb://mongo:bHMqbKXsgmOliDyOYRMCupYmiFRGAmrw@roundhouse.proxy.rlwy.net:38367',  
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    CanalModule,
    GuiaModule,
    ProgramaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
