import { Math } from "./Math";

describe("Testing Math library", () => {
  beforeEach(() => {
    // executa ANTES de cada um dos testes
  });

  beforeAll(() => {
    // executa 1x ANTES do primero teste
  });

  afterEach(() => {
    // executa DEPOIS de CADA um dos testes
  });

  beforeAll(() => {
    // executa ANTES de CADA um dos testes
  });

  afterAll(() => {
    // executa 1x DEPOIS do último teste
  });

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
    expect(response).toEqual(10);

    const response2 = Math.div(3, 0);
    // expect(response2).toBe(false);
    expect(response2).toBeFalsy();
  });

  // test others Matches
  it("contar quantos caracteres tem na string", () => {
    const response = "Mateus";
    expect(response).toHaveLength(6);
  });

  it("se possui propriedade email", () => {
    const response = {
      name: "Mateus",
      email: "test@example.com",
    };

    // expect(response).toHaveProperty("email");
    // expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });

  it("se é maior que 15", () => {
    const response = 20;
    // expect(response).toBeGreaterThan(15);
    expect(response).toBeGreaterThanOrEqual(15);
    expect(response).toBeLessThan(21);
  });

  it("se é um e-mail (REGEX)", () => {
    const response = "test@example.com";

    expect(response).toMatch(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  });

  it("retornar erro", () => {
    const response = Math.div(30, 3);
    expect(response).toEqual(10);

    const response2 = Math.div(3, 0);
    expect(response2).toThrow(new Error("Não divide por zero"));
  });
});
