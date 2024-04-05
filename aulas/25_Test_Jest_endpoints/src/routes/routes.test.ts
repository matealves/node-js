import { User } from "../models/User";
import request from "supertest";
import app from "../../app";

describe("Testing API routes", () => {
  const name = "Test";
  const lastName = "Jest";
  const email = "test@jest.com";
  const password = "Test@1234";

  let token = "";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it("should ping pong", (done) => {
    request(app)
      .get("/ping")
      .then((response) => {
        expect(response.body.pong).toBeTruthy();
        return done();
      });
  });

  // Register
  it("should register a new user", (done) => {
    request(app)
      .post("/register")
      .send({ name, lastName, email, password })
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("token");
        return done();
      });
  });

  it("should not allow to register with existing email", (done) => {
    request(app)
      .post("/register")
      .send({ name, lastName, email, password })
      .then((response) => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });

  it("should not allow to register without password", (done) => {
    request(app)
      .post("/register")
      .send({ name, lastName, email })
      .then((response) => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });

  it("should not allow to register without email", (done) => {
    request(app)
      .post("/register")
      .send({ name, lastName, password })
      .then((response) => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });

  it("should not allow to register without any data", (done) => {
    request(app)
      .post("/register")
      .send({})
      .then((response) => {
        expect(response.body.error).not.toBeUndefined();
        return done();
      });
  });

  // Login
  it("should login correctly", (done) => {
    request(app)
      .post("/login")
      .send({ email, password })
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body.status).toBeTruthy();
        expect(response.body).toHaveProperty("token");

        token = response.body.token;
        console.log('token:', token);
        
        return done();
      });
  });

  it("should not login with incorret data", (done) => {
    request(app)
      .post("/login")
      .send({ email, password: "invalid" })
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body.status).toBeFalsy();
        return done();
      });
  });

  // List users
  it("should list users", (done) => {
    request(app)
      .get("/list")
      .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(response.body.error).toBeUndefined();
        expect(response.body.list.length).toBeGreaterThanOrEqual(1);
        expect(response.body.list).toContain(`${name} ${lastName}`);
        return done();
      });
  });
});
