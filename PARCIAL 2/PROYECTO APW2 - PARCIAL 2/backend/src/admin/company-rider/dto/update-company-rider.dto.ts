import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyRiderDto } from './create-company-rider.dto';

export class UpdateCompanyRiderDto extends PartialType(CreateCompanyRiderDto) {}
