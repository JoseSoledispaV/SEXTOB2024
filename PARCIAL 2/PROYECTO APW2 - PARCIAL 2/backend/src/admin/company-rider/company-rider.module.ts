import { Module } from '@nestjs/common';
import { CompanyRiderService } from './company-rider.service';
import { CompanyRiderController } from './company-rider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRider } from './entities/company-rider.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CompanyRiderController],
  providers: [CompanyRiderService],
  imports: [TypeOrmModule.forFeature([CompanyRider]), AuthModule],

})
export class CompanyRiderModule { }
