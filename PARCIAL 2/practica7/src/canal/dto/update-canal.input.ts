//import { PartialType } from '@nestjs/mapped-types';
import { CreateCanalInput } from './create-canal.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class UpdateCanalInput extends PartialType(CreateCanalInput) {
  
    @Field(() => ID)
    id: string;
    
    @Field(()=>Boolean)   
    @IsBoolean()
    estado?: boolean;
}
