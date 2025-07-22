import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  async createUser(user: UserEntity) {
    this.users.push(user);
  }

  async updateUser(id: string, data: Partial<UserEntity>) {
    const existisUser = this.users.find((user) => user.id === id);

    if (!existisUser) {
      throw new Error('User not found.');
    }

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id' || value === undefined) return;

      existisUser[key] = value;
    });

    return existisUser;
  }

  async getUsers() {
    return this.users;
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const userExistis = this.users.find((user) => user.email === email);
    return !!userExistis;
  }
}
