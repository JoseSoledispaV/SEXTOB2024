// src/entities/programa.entity.ts
import { Entity, ObjectIdColumn, Column, OneToMany,PrimaryGeneratedColumn } from 'typeorm';
import { Guia } from '../../guia/entities/guia.entity';

@Entity()
export class Programa {
  @ObjectIdColumn()
  id: string;

  @Column()
  programatv: string;

  @Column()
  categoria: string;

  @Column()
  tipo: string;

  @OneToMany(() => Guia, guia => guia.programa )
  guias: Guia[];

  @Column({ default: true })
  estado: boolean;
}
