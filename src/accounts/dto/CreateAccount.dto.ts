import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { User } from "src/users/dto/User.dto";

export class CreateAccountDto {
  @ApiProperty({ description: "Balanço da conta" })
  @IsString()
  balance: string;

  @ApiProperty({ description: "Usuário vinculado a conta" })
  @IsUUID()
  userId: string;
  user: any;

  creationUser: any;
  updateUser: any;
}
