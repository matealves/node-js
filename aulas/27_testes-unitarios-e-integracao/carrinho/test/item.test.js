import Item from "../item";

describe("Teste dos itens", () => {
  it("Deve ter 3 campos: nome, valor e quantidade", () => {
    const item = new Item("Feijão", 7.99, 2);

    expect(item.nome).toBe("Feijão");
    expect(item.valor).toBe(7.99);
    expect(item.quantidade).toBe(2);
  });

  it("Deve calcular o valor total do item", () => {
    const item = new Item("Feijão", 7.99, 2);

    expect(item.pegaValorTotalItem()).toBe(15.98);
  });
});
