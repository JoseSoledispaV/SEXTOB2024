//import { PartialType } from '@nestjs/mapped-types';
import { CreateTransaccionInput } from './create-transaccion.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class UpdateTransaccionDto extends PartialType(CreateTransaccionInput) {
    @Field(() => ID)
    id: string;
    @Field(()=>Boolean)   
    @IsBoolean()
    estado?: boolean;
}
