import request from "supertest";
import app from "../../app";

describe("Testing API routes", () => {
  it("should ping pong", (done) => {
    request(app)
      .get("/ping")
      .then((response) => {
        console.log("responde.body", response.body);

        expect(response.body.pong).toBeTruthy();
        return done();
      });
  });
});
