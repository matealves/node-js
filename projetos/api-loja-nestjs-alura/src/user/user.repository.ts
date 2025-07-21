import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  async createUser(user: UserEntity) {
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
