import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

@Injectable()
export class UserRepository {
  private readonly users: User[] = [];

  async createUser(user: CreateUserDTO) {
    this.users.push(user);
  }

  async getUsers() {
    return this.users;
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const userExistis = this.users.find((user) => user.email === email);
    return !!userExistis;
  }
}
