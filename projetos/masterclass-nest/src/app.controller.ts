import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Post('user')
  async createUser(@Body() body: CreateUserBody) {
    const { name, function: userFunction } = body;

    const user = await this.prisma.user.create({
      data: {
        name,
        function: userFunction,
      },
    });
    return user;
  }

  @Get('users')
  async getUsers(): Promise<CreateUserBody[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
