
import { PaginationDto } from "src/common/dto/pagination.dto";
import { IsOptional } from 'class-validator';
import { Type } from "class-transformer";

export class ProductMarketDto extends PaginationDto {

    @IsOptional()
    @Type(() => Number)
    groupId: number;
}