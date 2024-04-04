import { User, UserInstance } from "../models/User";
import * as UserService from "./UserService";

describe("Testing user service", () => {
  const name = "Test";
  const lastName = "Jest";
  const email = "test@jest.com";
  const password = "Test@1234";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it.skip("should create a new user", async () => {
    const newUser = (await UserService.createUser(
      name,
      lastName,
      email,
      password
    )) as UserInstance;

    expect(newUser).not.toBeInstanceOf(Error);
    expect(newUser).toHaveProperty("id");
    expect(newUser.email).toEqual(email);
  });

  it.skip("should not allow to create a user with existing email", async () => {
    const newUser = await UserService.createUser(
      name,
      lastName,
      email,
      password
    );

    expect(newUser).toBeInstanceOf(Error);
  });

  it.skip("should find a user by the email", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    expect(user.email).toBe(email);
  });

  it.skip("should match the password from database", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    const match = UserService.matchPassword(password, user.password);

    expect(match).toBeTruthy();
  });

  it.skip("should not match the password from database", async () => {
    const user = (await UserService.findByEmail(email)) as UserInstance;
    const match = await UserService.matchPassword("invalid", user.password);
    expect(match).toBe(false);
  });

  it.skip("should get a list of users", async () => {
    const users = await UserService.all();
    expect(users.length).toBeGreaterThanOrEqual(1);

    for (let i in users) {
      expect(users[i]).toBeInstanceOf(User);
    }
  });
});
