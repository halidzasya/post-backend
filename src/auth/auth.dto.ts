import { ApiProperty, PickType } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";
import { IsUnique } from "src/etc/validator/unique-validator";
import { UserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";

export class AuthDto {
    @ApiProperty({required:true})
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    username : string

    @ApiProperty({required:true})
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password : string
}