import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRepository } from './repositories/user-repository';

@Controller()
export class AppController {
  // constructor(private prisma: PrismaService) {}
  constructor(
    private userRepository: UserRepository, // Injeção de dependência
    private prisma: PrismaService,
  ) {}

  @Post('user')
  async createUser(@Body() body: CreateUserBody) {
    const { name, function: userFunction } = body;
    // Utilizando injeção de dependência para o repositório de usuários
    const user = await this.userRepository.create(name, userFunction);

    // const user = await this.prisma.user.create({
    //   data: {
    //     name,
    //     function: userFunction,
    //   },
    // });
    return user;
  }

  @Get('users')
  async getUsers(): Promise<CreateUserBody[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
