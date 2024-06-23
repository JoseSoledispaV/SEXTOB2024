import { Injectable } from '@nestjs/common';
import { CreateCompanyRiderDto } from './dto/create-company-rider.dto';
import { UpdateCompanyRiderDto } from './dto/update-company-rider.dto';

@Injectable()
export class CompanyRiderService {
  create(createCompanyRiderDto: CreateCompanyRiderDto) {
    return 'This action adds a new companyRider';
  }

  findAll() {
    return `This action returns all companyRider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyRider`;
  }

  update(id: number, updateCompanyRiderDto: UpdateCompanyRiderDto) {
    return `This action updates a #${id} companyRider`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyRider`;
  }
}
