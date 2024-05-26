import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, forwardRef, Inject } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto } from "./dto/CreateAccount.dto";
import { UpdateAccountDto } from "./dto/UpdateAccount.dto";

@ApiTags("accounts")
@Controller("accounts")
export class AccountsController {
  constructor(
    @Inject(forwardRef(() => AccountsService))
    private readonly accountsService: AccountsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Req() req, @Body() createAccountDto: CreateAccountDto) {
    const session = req.user;

    createAccountDto.creationUser = session.userId;

    return this.accountsService.create(createAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("listAll")
  findAll(@Req() req) {
    const session = req.user;

    return this.accountsService.findAll(session);
  }

  @UseGuards(JwtAuthGuard)
  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.accountsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Req() req, @Body() updateAccountDto: UpdateAccountDto) {
    const session = req.user;

    updateAccountDto.updateUser = session.userId;

    return this.accountsService.update(id, updateAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.accountsService.remove(id);
  }
}
