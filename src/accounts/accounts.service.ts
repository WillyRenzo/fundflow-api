import { forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AccountRepository } from "../database/repositories/AccountRepository.service";
import { UserRepository } from "../database/repositories/UserRepository.service";
import { Account } from "./dto/Account.dto";
import { CreateAccountDto } from "./dto/CreateAccount.dto";
import { UpdateAccountDto } from "./dto/UpdateAccount.dto";

@Injectable()
export class AccountsService {
  constructor(
    @Inject(forwardRef(() => AccountRepository))
    private accountRepository: AccountRepository,

    @Inject(forwardRef(() => UserRepository))
    private userRepository: UserRepository,
  ) {}

  async create(data: CreateAccountDto): Promise<Account> {
    const user = await this.userRepository.user({ id: data.userId });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const validatedData = {
      ...data,
      user: { connect: { id: user.id } },
      accountsToCreateUserId: { connect: { id: user.id } },
    };

    const createdAccount = await this.accountRepository.createAccount(validatedData);

    return createdAccount;
  }

  async findAll(session: any): Promise<Account[]> {
    const { userId, username } = session;

    const userRelated = await this.userRepository.findOne({ id: userId, email: username });

    console.log(userRelated);

    const accounts = await this.accountRepository.accounts({});

    return accounts;
  }

  async findOne(id: string): Promise<Account> {
    const account = await this.accountRepository.account({ id });

    return account;
  }

  async update(id: string, data: UpdateAccountDto): Promise<Account> {
    const updatedAccount = await this.accountRepository.updateAccount({ where: { id }, data });

    return updatedAccount;
  }

  async remove(id: string): Promise<Account> {
    const removedAccount = await this.accountRepository.deleteAccount({ id });

    return removedAccount;
  }
}
