import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
@Injectable()
export class UserRepository {
  private users: UserEntity[] = [
    {
      id: 'b952f3bf-17d0-447d-a553-766d13f74627',
      name: 'Mateus',
      lastName: 'Alves',
      email: 'mateus@email.com',
      password: '123456',
    },
    {
      id: 'b952f3bf-17d0-447d-a553-766d13f74628',
      name: 'Roane',
      lastName: 'Rios',
      email: 'roane@email.com',
      password: '789101',
    },
  ];

  private findById(id: string) {
    const existisUser = this.users.find((user) => user.id === id);

    if (!existisUser) {
      throw new Error('User not found.');
    }

    return existisUser;
  }

  async createUser(user: UserEntity) {
    this.users.push(user);
  }

  async updateUser(id: string, data: Partial<UserEntity>) {
    const user = this.findById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id' || value === undefined) return;

      user[key] = value;
    });

    return user;
  }

  async removeUser(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((user) => user.id !== id);
    
    return user;
  }

  async getUsers() {
    return this.users;
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const userExistis = this.users.find((user) => user.email === email);
    return !!userExistis;
  }
}
