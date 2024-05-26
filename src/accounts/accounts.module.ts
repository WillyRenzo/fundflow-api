import { Module } from "@nestjs/common";
import { AccountsService } from "./accounts.service";
import { AccountsController } from "./accounts.controller";
import { AccountRepository } from "../database/repositories/AccountRepository.service";
import { PrismaService } from "../database/prismaService/prisma.service";
import { UserRepository } from "../database/repositories/UserRepository.service";

@Module({
  controllers: [AccountsController],
  providers: [AccountsService, AccountRepository, UserRepository, PrismaService],
})
export class AccountsModule {}
