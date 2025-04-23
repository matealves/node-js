export abstract class UserRepository {
  abstract create(name: string, userFunction: string): Promise<void>;
}
