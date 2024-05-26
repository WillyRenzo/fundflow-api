import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class AuthLogin {
  @ApiProperty({ description: "Email do usuário" })
  @IsEmail()
  username: string;

  @ApiProperty({ description: "Senha do usuário" })
  @IsString()
  password: string;
}
