import Carrinho from "../carrinho";
import Item from "../item";

describe("Testando carrinho de compras", () => {
  it("Deve inicializar vazio", () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toEqual([]);
    expect(carrinho.subtotal).toBeNull();
    expect(carrinho.frete).toBeNull();
    expect(carrinho.total).toBeNull();
  });

  it("Deve ter a propriedade 'total' na inicialização", () => {
    const carrinho = new Carrinho();
    expect(carrinho).toHaveProperty("total");
  });

  it("Deve adicionar itens no carrinho", () => {
    const item = new Item("Banana", 5.99, 4);
    const item2 = new Item("Abacaxi", 8.99, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe("object");
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);
    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
    expect(carrinho.itens).toEqual([item, item2]);
  });

  it("Deve adicionar o frete", () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(15);

    expect(carrinho.frete).toBe(15);
  });

  it("Deve calcular o total da compra", () => {
    const item = new Item("Banana", 5.99, 4);
    const item2 = new Item("Abacaxi", 8.99, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(15);
    carrinho.calculaTotal();
    carrinho.finalizaCompra();

    expect(carrinho.total).toBe(47.95);
  });

  it("Deve finalizar a compra", () => {
    const item = new Item("Banana", 5.99, 4);
    const item2 = new Item("Abacaxi", 8.99, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(15);

    expect(carrinho.finalizaCompra()).toEqual({
      subtotal: 32.95,
      frete: 15,
      total: 47.95,
    });
  });

  it("Deve lançar erro ao finalizar a compra com carrinho vazio", () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrow("Carrinho de compras vazio");
  });
});
