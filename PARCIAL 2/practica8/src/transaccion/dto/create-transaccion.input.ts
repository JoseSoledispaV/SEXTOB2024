import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateTransaccionInput {
  @Field()
  descripcion: string;

  @Field(() => Float)
  monto: number;

  @Field()
  estado: boolean;
}
