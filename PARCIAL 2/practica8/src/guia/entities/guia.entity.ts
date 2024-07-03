import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, ObjectIdColumn, ManyToOne } from 'typeorm';
import { Canal } from '../../canal/entities/canal.entity';
import { Programa } from '../../programa/entities/programa.entity';

@ObjectType()
@Entity()
export class Guia {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  fecha: string;

  @Field()
  @Column()
  horatransmision: string;

  @Field()
  @Column()
  escalarating: string;

  @Field(() => Canal)
  @ManyToOne(() => Canal, canal => canal.guias)
  canal: Canal;

  @Field(() => Programa)
  @ManyToOne(() => Programa, programa => programa.guias)
  programa: Programa;

  @Field()
  @Column({ default: true })
  estado: boolean;
}
