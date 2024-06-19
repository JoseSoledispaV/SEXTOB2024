
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateCanalDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  estado: boolean = true;


}
