import { Produk } from "src/produks/entities/produk.entity";
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nama_user : string;

    @Column()
    email : string;

    @Column()
    username : string

    @Column()
    password : string

    @CreateDateColumn()
    create_at : Date

    @UpdateDateColumn()
    update_at : Date

    @OneToMany(()=>Produk, prod => prod.id)
    produk : Produk

}

