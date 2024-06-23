import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';

import { CompanyModule } from './admin/company/company.module';
import { StoreModule } from './admin/store/store.module';
import { ProductModule } from './admin/product/product.module';
import { CategoryModule } from './admin/category/category.module';

import { MarketModule } from './client/market/market.module';
import { CompanyCategoryModule } from './admin/company-category/company-category.module';
import { PetitionModule } from './deliveryman/petition/petition.module';
import { StoreManagerModule } from './manager/store-manager/store.manager.module';
import { CompanyRiderModule } from './admin/company-rider/company-rider.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    CommonModule,
    ProductModule,
    AuthModule,
    StoreModule,
    MarketModule,
    CategoryModule,
    CompanyCategoryModule,
    PetitionModule,
    StoreManagerModule,
    CompanyRiderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
