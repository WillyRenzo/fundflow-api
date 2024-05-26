import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";

import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/CreateTransaction.dto";
import { UpdateTransactionDto } from "./dto/UpdateTransaction.dto";

@ApiTags("transactions")
@Controller("transactions")
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Req() req, @Body() createTransactionDto: CreateTransactionDto) {
    const session = req.user;

    createTransactionDto.creationUser = session.userId;

    return this.transactionsService.create(createTransactionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("listAll")
  findAll() {
    return this.transactionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get("listOneDetailed/:id")
  findOne(@Param("id") id: string) {
    return this.transactionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("update/:id")
  update(@Req() req, @Param("id") id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    const session = req.user;

    updateTransactionDto.updateUser = session.userId;

    return this.transactionsService.update(id, updateTransactionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove/:id")
  remove(@Param("id") id: string) {
    return this.transactionsService.remove(id);
  }
}
