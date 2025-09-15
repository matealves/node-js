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
}
