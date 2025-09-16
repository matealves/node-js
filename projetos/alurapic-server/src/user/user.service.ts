import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'jow',
      email: 'jow@gmail.com',
      senha: '123456',
      fullName: 'Jow Doe',
      createdAt: new Date(),
    },
    {
      id: 2,
      username: 'mateus',
      email: 'email@gmail.com',
      senha: '123456',
      fullName: 'Mateus Alves',
      createdAt: new Date(),
    },
  ];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public findAll(): User[] {
    return this.users;
  }

  public findByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  public findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  public remove(id: number): void {
    const index = this.users.findIndex((user) => user.id === Number(id));
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
