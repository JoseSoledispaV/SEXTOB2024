import { InputType, Int, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateGuiaInput {
  @Field(()=>String)
  @IsString()
  @IsNotEmpty()
  fecha: string;

  @Field(()=>String)
  @IsString()
  @IsNotEmpty()
  horatransmision: string;

  @Field(()=>String)
  @IsString()
  @IsNotEmpty()
  escalarating: string;

  @Field(()=>String, {nullable:true})
  @IsString()
  //@IsNotEmpty()
  canalId?: string;


  @Field(()=>String, {nullable:true})
  @IsString()
   programaId?: string;

  @Field(()=>Boolean)
  @IsBoolean()
  @IsNotEmpty()
  estado: boolean = true;

//   @IsString()
//   // @IsOptional()
//   preguntaId?: string;

//   @IsString()
//   // @IsOptional()
//   ciudadanoId?: string;
}
