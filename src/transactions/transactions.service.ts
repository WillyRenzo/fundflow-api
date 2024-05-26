import { Injectable } from "@nestjs/common";
import { Transaction } from "@prisma/client";
import { TransactionRepository } from "src/database/repositories/TransactionRepository.service";
import { CreateTransactionDto } from "./dto/CreateTransaction.dto";
import { UpdateTransactionDto } from "./dto/UpdateTransaction.dto";

@Injectable()
export class TransactionsService {
  constructor(private transactionRepository: TransactionRepository) {}

  async create(data: CreateTransactionDto): Promise<Transaction> {
    const createdTransaction = await this.transactionRepository.createTransaction(data);

    return createdTransaction;
  }

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.transactions({});

    return transactions;
  }

  async findOne(id: string): Promise<Transaction> {
    const transaction = await this.transactionRepository.transaction({ id });

    return transaction;
  }

  async update(id: string, data: UpdateTransactionDto): Promise<Transaction> {
    const updatedTransaction = await this.transactionRepository.updateTransaction({
      where: { id },
      data,
    });

    return updatedTransaction;
  }

  async remove(id: string): Promise<Transaction> {
    const removedExpense = await this.transactionRepository.deleteTransaction({ id });

    return removedExpense;
  }
}
