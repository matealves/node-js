export class UserRepository {
  private users: {}[] = [];

  async createUser(user: any) {
    this.users.push(user);
    console.log(this.users);
  }
}
