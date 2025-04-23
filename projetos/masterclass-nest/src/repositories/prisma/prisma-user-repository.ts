import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from '../user-repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, userFunction: string): Promise<any> {
    return await this.prisma.user.create({
      data: {
        name,
        function: userFunction,
      },
    });
  }
}
