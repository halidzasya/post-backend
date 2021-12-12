import { ApiProperty, OmitType, PickType } from "@nestjs/swagger"
import { IsEmail, IsObject, isObject, IsString } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { CreateUserDto } from "src/user/dto/create-user.dto"
import { Konsuman } from "../entities/konsuman.entity"

export class KonsumenDto{

    @ApiProperty()
    @IsExist([Konsuman, 'id'])
    id : number

    @ApiProperty()
    @IsString()
    nama_konsumen : string

    @ApiProperty()
    @IsString()
    alamat_konsumen : string

    @ApiProperty()
    @IsString()
    @IsEmail()
    email_konsumen : string

    @ApiProperty()
    @IsString()
    no_hp_konsumen : string

    @IsObject()
    user : CreateUserDto
}
export class CreateKonsumanDto extends OmitType(KonsumenDto, ['id']){}
export class KonsumenId extends PickType(KonsumenDto, ['id']){}