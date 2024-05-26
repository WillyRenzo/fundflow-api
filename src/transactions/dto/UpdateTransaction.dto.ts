import { PartialType } from "@nestjs/mapped-types";
import { CreateTransactionDto } from "./CreateTransaction.dto";

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
