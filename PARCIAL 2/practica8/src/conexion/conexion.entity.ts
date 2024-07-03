import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Conexion {
    @ObjectIdColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  socketId: string;

  @Column({ default: true })
  estado: boolean;
}
