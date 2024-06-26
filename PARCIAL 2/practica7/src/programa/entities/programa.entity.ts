import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Guia } from '../../guia/entities/guia.entity';

@ObjectType()
@Entity()
export class Programa {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  programatv: string;

  @Field()
  @Column()
  categoria: string;

  @Field()
  @Column()
  tipo: string;

  @Field(() => [Guia], { nullable: 'itemsAndList' })
  @OneToMany(() => Guia, guia => guia.programa)
  guias: Guia[];

  @Field()
  @Column({ default: true })
  estado: boolean;
}
