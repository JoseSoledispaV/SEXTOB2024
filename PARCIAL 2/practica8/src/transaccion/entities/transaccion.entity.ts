import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Transaccion {
  @Field(() => Int)
  @ObjectIdColumn()
  id: number;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  monto: number;

  @Field()
  @Column({ default: true })
  estado: boolean;
}
