import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ description: "Nome do usuário" })
  @IsString()
  name: string;

  @ApiProperty({ description: "Sobrenome do usuário" })
  @IsString()
  lastName: string;

  @ApiProperty({ description: "Senha do usuário" })
  @IsString()
  password: string;

  @ApiProperty({ description: "Avatar do usuário" })
  @IsString()
  avatar: string;

  @ApiProperty({ description: "Email do usuário" })
  @IsEmail()
  email: string;
}
