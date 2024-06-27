import { IsNumber } from "class-validator";
import { Product } from "src/admin/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Group {

    @PrimaryGeneratedColumn('increment')
    @IsNumber()
    id: number;

    @Column('text')
    name: string;

    @OneToMany(
        () => Product,
        (product) => product.group,
        { cascade: true, eager: false }
    )
    product?: Product[];
}
