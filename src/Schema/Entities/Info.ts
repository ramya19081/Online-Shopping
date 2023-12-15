import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Info_Entity extends BaseEntity{
    @PrimaryGeneratedColumn("increment")
    id_info!:number
    @Column("varchar")
    firstName!: string
    @Column("varchar")
    lastName!: string
    @Column("varchar")
    email!: string
    @Column("varchar")
    address!: string
    @Column("varchar")
    country!: string
    @Column("varchar")
    city!: string
    @Column("varchar")
    phoneNumber!: string
    @Column("varchar")
    postalCode!: string
    
}