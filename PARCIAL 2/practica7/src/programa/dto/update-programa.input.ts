// src/programa/dto/update-programa.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramaInput } from './create-programa.input';
import { InputType, Int, Field,ID } from '@nestjs/graphql';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateProgramaInput extends PartialType(CreateProgramaInput) {
    @Field(() => ID)
    id: string;
    @Field(()=>Boolean)   
    @IsBoolean()
    estado?: boolean;
}
