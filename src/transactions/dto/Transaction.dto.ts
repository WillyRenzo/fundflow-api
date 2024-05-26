export class Transaction {
  id: string;
  description: string;
  typeId: string;
  accountId: string;
  isRevenue: boolean;
  isExpense: boolean;
  createdAt: Date;
}
