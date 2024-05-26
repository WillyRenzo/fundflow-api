import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategies/local.strategy";
import { UserRepository } from "../database/repositories/UserRepository.service";
import { PrismaService } from "../database/prismaService/prisma.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import * as dotenv from "dotenv";
import { JwtStrategy } from "./strategies/jwt.strategy";
dotenv.config();

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY as string,
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [AuthService, LocalStrategy, UserRepository, PrismaService, JwtService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
