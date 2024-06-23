import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyRiderService } from './company-rider.service';
import { CreateCompanyRiderDto } from './dto/create-company-rider.dto';
import { UpdateCompanyRiderDto } from './dto/update-company-rider.dto';

@Controller('company-rider')
export class CompanyRiderController {
  constructor(private readonly companyRiderService: CompanyRiderService) {}

  @Post()
  create(@Body() createCompanyRiderDto: CreateCompanyRiderDto) {
    return this.companyRiderService.create(createCompanyRiderDto);
  }

  @Get()
  findAll() {
    return this.companyRiderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyRiderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyRiderDto: UpdateCompanyRiderDto) {
    return this.companyRiderService.update(+id, updateCompanyRiderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyRiderService.remove(+id);
  }
}
