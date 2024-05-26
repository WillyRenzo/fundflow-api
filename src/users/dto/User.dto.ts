import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsUUID } from "class-validator";

export class User {
  @ApiProperty({ description: "Id do usuário" })
  @IsUUID()
  id: string;

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
  @IsString()
  email: string;

  @ApiProperty({ description: "Data de criação do usuário" })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: "Data da última alteração do usuário" })
  @IsDate()
  updatedAt: Date;
}
