import { Module } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { TransactionRepository } from "src/database/repositories/TransactionRepository.service";
import { PrismaService } from "src/database/prismaService/prisma.service";

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository, PrismaService],
})
export class TransactionsModule {}
