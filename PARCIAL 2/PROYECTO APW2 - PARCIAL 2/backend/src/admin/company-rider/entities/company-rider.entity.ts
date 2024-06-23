
import { Company } from "src/admin/company/entities/company.entity";
import { User } from "src/auth/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(["company", "user"])
export class CompanyRider {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @UpdateDateColumn({ type: 'timestamptz', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(
        () => Company,
        (company) => company.companiesRider,
        { onDelete: "CASCADE", nullable: false }
    )
    company: Company;

    @ManyToOne(
        () => User,
        (user) => user.companiesRider,
        { onDelete: "CASCADE", nullable: false, eager: true }
    )
    user: User;
}
