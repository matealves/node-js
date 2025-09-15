import { Injectable } from '@nestjs/common';

export type User = {
  name: string;
  email: string;
};

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  public create(user: User) {
    this.users.push(user);
    return user;
  }

  public findAll(): User[] {
    return this.users;
  }

  public remove(email: string): void {
    const index = this.users.findIndex((user) => user.email === email);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
