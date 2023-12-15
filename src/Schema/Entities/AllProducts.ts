import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AllProducts_Entity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    @Column("varchar")
    name!: string
    @Column("varchar")
    desc!: string
    @Column("int")
    price!: number
    @Column("varchar")
    image!: string
}
