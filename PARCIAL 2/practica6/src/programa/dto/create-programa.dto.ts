// src/programa/dto/create-programa.dto.ts
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateProgramaDto {
  @IsString()
  @IsNotEmpty()
  programatv: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;
  estado: boolean = true;

}
