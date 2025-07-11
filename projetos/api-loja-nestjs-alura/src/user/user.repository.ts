import { Injectable } from '@nestjs/common';

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

@Injectable()
export class UserRepository {
  private readonly users: User[] = [
    {
      name: 'John',
      lastName: 'Doe',
      email: 'teste@email.com',
      password: '123456',
    },
  ];

  async createUser(user: any) {
    this.users.push(user);
  }

  async getUsers() {
    return this.users;
  }
}
