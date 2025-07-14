import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller('/users')
export class UserController {
  // Injeção de dependência do repositório de usuários
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    this.userRepository.createUser(data);
    return { message: 'User created successfully', data };
  }

  @Get()
  async getUsers() {
    return this.userRepository.getUsers();
  }
}
