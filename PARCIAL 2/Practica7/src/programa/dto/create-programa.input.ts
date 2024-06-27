// src/programa/dto/create-programa.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class CreateProgramaInput {
  @Field(()=>String)
  @IsString()
  @IsNotEmpty()
  programatv: string;


  @Field(()=>String)
  @IsNotEmpty()
  @IsString()
  categoria:string;

  @Field(()=>Boolean)
  @IsString()
  estado: boolean = true;

}
