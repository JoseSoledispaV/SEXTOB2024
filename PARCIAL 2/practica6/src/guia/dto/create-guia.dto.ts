import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGuiaDto {
  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  horatransmision: string;

  @IsString()
  @IsNotEmpty()
  escalarating: string;

  @IsString()
  //@IsNotEmpty()
  canalId?: string;

  @IsString()
  //@IsNotEmpty()
  programaId?: string;
  estado: boolean = true;

//   @IsString()
//   // @IsOptional()
//   preguntaId?: string;

//   @IsString()
//   // @IsOptional()
//   ciudadanoId?: string;
}
