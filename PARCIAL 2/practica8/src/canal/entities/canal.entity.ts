import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Guia } from '../../guia/entities/guia.entity';

@ObjectType()
@Entity()
export class Canal {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  nombre: string;

  @Field(() => [Guia], { nullable: 'itemsAndList' })
  @OneToMany(() => Guia, guia => guia.canal)
  guias: Guia[];

  @Field()
  @Column({ default: true })
  estado: boolean;
}
