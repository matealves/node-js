import { somaHorasExtras, calculaDescontos } from "../index";

describe("Testes de cálculos de folha de pagamento", () => {
  it("Deve somar horas extras ao salário", () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it("Deve descontar o valor do salário", () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 300);

    expect(retornado).toBe(esperado);
  });
});
