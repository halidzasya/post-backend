import { OmitType, PickType } from "@nestjs/mapped-types"
import { IsOptional, IsEmail, IsString, MaxLength, MinLength } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { User } from "../entities/user.entity"

export class UserDto {
    @IsOptional()
    @IsExist([User, 'id'])
    id? : number

    @IsString()
    @MaxLength(200)
    nama_user : string

    @IsEmail()
    @IsUnique([User, 'email'])
    email : string

    @IsString()
    @IsUnique([User, 'username'])
    @MinLength(6)
    @MaxLength(50)
    username : string

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password : string
}
export class CreateUserDto extends OmitType(UserDto, ['id']) {}
export class UserIdDto extends PickType(UserDto, ['id']) {}