// src/entities/canal.entity.ts
import { Entity, ObjectIdColumn, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Guia } from '../../guia/entities/guia.entity';

@Entity()
export class Canal {
  @ObjectIdColumn()
  id: string;

  @Column()
  nombre: string;

  @OneToMany(
    () => Guia, guia => guia.canal, { cascade:true })
  guias: Guia[];

//   @OneToMany(

  @Column({ default: true })
  estado: boolean;
}
