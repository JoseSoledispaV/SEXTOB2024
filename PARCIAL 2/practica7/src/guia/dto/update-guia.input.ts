//import { PartialType } from '@nestjs/mapped-types';
import { CreateGuiaInput } from './create-guia.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class UpdateGuiaInput extends PartialType(CreateGuiaInput) {
    @Field(() => ID)
    id: string;
    @Field(()=>Boolean)   
    @IsBoolean()
    estado?: boolean;
}
