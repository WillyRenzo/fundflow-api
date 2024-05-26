import { PartialType } from "@nestjs/mapped-types";
import { Account } from "./Account.dto";

export class UpdateAccountDto extends PartialType(Account) {}
