
import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean,IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCanalInput {
 

  @Field(()=>String)
  @IsNotEmpty()
  @IsString()
  nombre:string;

  @Field(()=>Boolean)  
  @IsBoolean()
  estado: boolean = true;


}
