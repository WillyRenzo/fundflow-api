import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { UserRepository } from "../database/repositories/UserRepository.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { User } from "./dto/User.dto";

@Injectable()
export class UsersService {
  constructor(private readonly userService: UserRepository) {}

  async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(data.password, 10);

    const newData = { ...data, password: hashedPassword };

    const createdUser = await this.userService.createUser(newData);

    return createdUser;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userService.users({});

    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userService.user({ id });

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userService.updateUser({ where: { id }, data });

    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const removedUser = await this.userService.deleteUser({ id });

    return removedUser;
  }
}
