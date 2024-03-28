import { Math } from "./Math";

describe("Testing Math library", () => {
  it("should sum two numbers correctly", () => {
    const response = Math.sum(1, 2);
    expect(response).toBe(3);
  });

  it("should subtract two numbers correctly", () => {
    const response = Math.sub(4, 2);
    expect(response).toBe(2);
  });

  it("should multiply two numbers correctly", () => {
    const response = Math.mult(2, 5);
    expect(response).toBe(10);
  });

  it("should divide two numbers correctly", () => {
    const response = Math.div(30, 3);
    expect(response).toBe(10);

    const response2 = Math.div(3, 0);
    expect(response2).toBe(false);
  });
});
