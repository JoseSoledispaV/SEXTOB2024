import { Transform, Type } from "class-transformer";
import { IsBoolean, IsLatitude, IsLongitude } from "class-validator";
import { PaginationDto } from "src/common/dto/pagination.dto";

export class CostDeliveryMarketDto extends PaginationDto {

    @IsLongitude()
    @Type(() => Number)
    longitude: number;

    @IsLatitude()
    @Type(() => Number)
    latitude: number;

    @IsLongitude()
    @Type(() => Number)
    fromlt: number;

    @IsLatitude()
    @Type(() => Number)
    fromlg: number;

    @IsBoolean()
    @Transform(({ obj, key }) => {
        const value = obj[key];
        if (typeof value === 'string') {
            return obj[key] === 'true';
        }
        return value;
    })
    isSumaryTaxi: boolean;
}

