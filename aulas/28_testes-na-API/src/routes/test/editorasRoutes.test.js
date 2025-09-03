import request from "supertest";
import {
  describe, expect, it, jest,
} from "@jest/globals";
import app from "../../app.js";

let server;

describe("Teste de integração para as rotas de editoras", () => {
  beforeEach(() => {
    const PORT = process.env.PORT || 3000;
    server = app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  });

  afterEach(() => {
    server.close();
  });

  describe("Testando as rotas de editoras", () => {
    it("GET /editoras - Deve listar todas as editoras", async () => {
      const response = await request(app)
        .get("/editoras")
        .set("Accept", "application/json")
        .expect("content-type", /json/);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  let idResponse;
  describe("POST /editoras", () => {
    it("Deve adicionar uma nova editora", async () => {
      const response = await request(app).post("/editoras").send({
        nome: "Editora Teste",
        cidade: "Cidade Teste",
        email: "test@email.com",
      });

      idResponse = response.body.content.id;

      expect(response.status).toBe(201);
      expect(response.body.content).toHaveProperty("id");
      expect(response.body.content.email).toBe("test@email.com");
    });

    it("Deve retornar erro ao adicionar uma editora sem enviar dados no body", async () => {
      await request(app).post("/editoras").send({}).expect(400);
    });
  });

  describe("GET /editoras/:id", () => {
    it("Deve retornar a editora selecionada", async () => {
      await request(app).get(`/editoras/${idResponse}`).expect(200);
    });
  });

  describe("PUT /editoras/:id", () => {
    it.each([
      ["nome", { nome: "Editora Teste Alterada" }],
      ["cidade", { cidade: "Cidade Teste Alterada" }],
      ["email", { email: "b@email.com" }],
    ])("Deve alterar o campo %s da editora selecionada", async (key, value) => {
      const requisicao = { request };
      const spy = jest.spyOn(requisicao, "request");

      await requisicao
        .request(app)
        .put(`/editoras/${idResponse}`)
        .send(value)
        .expect(201);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("DELETE /editoras/:id", () => {
    it("Deve deletar a editora adicionada", async () => {
      await request(app).delete(`/editoras/${idResponse}`).expect(200);
    });
  });
});
