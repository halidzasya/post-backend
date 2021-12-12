import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Konsuman {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nama_konsumen : string

    @Column()
    alamat_konsumen : string

    @Column()
    email_konsumen : string

    @Column()
    no_hp_konsumen : string

    @CreateDateColumn()
    create_at : Date

    @CreateDateColumn({onUpdate: 'CURRENT_TIMESTAMP(6)'})
    update_at : Date

    @ManyToOne(()=>User, usr =>usr.id )
    user : User

}

