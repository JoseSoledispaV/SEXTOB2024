import { Entity, ObjectIdColumn, Column, ManyToOne,PrimaryGeneratedColumn } from 'typeorm';
import { Canal } from '../../canal/entities/canal.entity';
import { Programa } from '../../programa/entities/programa.entity';

@Entity()
export class Guia {
  @ObjectIdColumn()
  id: string;

  @Column()
  fecha: string;

  @Column()
  horatransmision: string;

  @Column()
  escalarating: string;

  @ManyToOne(() => Canal, canal => canal.guias,{ eager: true })
  canal: Canal;

  @ManyToOne(() => Programa, programa => programa.guias,{ eager: true })
  programa: Programa;

  @Column({ default: true })
  estado: boolean;
}
