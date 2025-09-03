import {
  describe, expect, it, jest,
} from "@jest/globals";
import Editora from "../editora";

describe("Testando o model Editora", () => {
  const objetoEditora = {
    nome: "Editora Exemplo",
    cidade: "São Paulo",
    email: "a@email.com",
  };

  it("Deve criar uma instância de Editora", () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  it.skip("Deve salvar editora no Banco de Dados", () => {
    const editora = new Editora(objetoEditora);
    editora.salvar().then((data) => {
      expect(data.nome).toBe("Editora Exemplo");
      expect(data.cidade).toBe("São Paulo");
      expect(data.email).toBe("a@email.com");
    });
  });

  it.skip("Deve salvar editora no Banco de Dados usando sintaxe moderna", async () => {
    const editora = new Editora(objetoEditora);
    const data = await editora.salvar();
    const valorRetornado = await Editora.pegarPeloId(data.id);

    expect(valorRetornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it("Deve simular chamada ao Banco de Dados", () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: "Editora Exemplo",
      cidade: "São Paulo",
      email: "a@email.com",
      created_at: "2025-09-02T00:00:00.000Z",
      updated_at: "2025-09-02T00:00:00.000Z",
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
