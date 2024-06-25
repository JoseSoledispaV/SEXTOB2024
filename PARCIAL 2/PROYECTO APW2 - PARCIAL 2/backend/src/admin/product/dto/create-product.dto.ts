import { Type } from "class-transformer";
import { IsIn, IsInt, IsObject, IsPositive, IsString, MinLength, ValidateNested } from "class-validator";
import { Company } from "src/admin/company/entities/company.entity";
import { Group } from '../../group/entities/group.entity';

export class CreateProductDto {

    @IsString()
    @MinLength(4)
    name: string;

    @IsString()
    @MinLength(10)
    description: string

    @IsString()
    image: string

    @IsInt()
    @IsIn([1, 2, 3])
    type: number;

    @IsPositive()
    price: number;

    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company: Company;

    @IsObject()
    @ValidateNested()
    @Type(() => Group)
    group: Group;
}
