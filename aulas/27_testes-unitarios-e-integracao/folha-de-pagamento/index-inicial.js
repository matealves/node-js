import assert from "node:assert/strict";

const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDescontos = (salario, descontos) => salario - descontos;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      // if (valor !== esperado) {
      //   throw new Error(`O valor ${valor} é diferente de ${esperado}`);
      // }
      assert.strictEqual(valor, esperado);
    },
  };

  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`O teste ${titulo} passou!`);
  } catch {
    console.error(`O teste ${titulo} falhou!`);
  }
};

teste("somaHorasExtras", () => {
  const esperado = 2501;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste("calculaDescontos", () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
