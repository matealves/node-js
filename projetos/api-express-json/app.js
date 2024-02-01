const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const app = express();
const port = 4002;

app.use(express.json());

let products = [];

// ler arquivo local
fs.readFile("data/products.json", "utf-8", (err, data) => {
  if (err) {
    console.error("ERRO: products.json não encontrado.", err);
    return;
  }

  products = JSON.parse(data);
});

// POST
app.post("/products", (request, response) => {
  // Nome e preço => name, price
  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID().slice(0, 7),
  };

  products.push(product);
  updateJsonFile();
  return response.json(product);
});

// GET
app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find((product) => product.id === id);

  return response.json(product);
});

// PUT
app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;
  const productIndex = products.findIndex((product) => product.id === id);

  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  updateJsonFile();
  return response.json({ message: "Produto alterado com sucesso!" });
});

// DELETE
app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);
  updateJsonFile();
  return response.json({ message: "Produto removido com sucesso!" });
});

// Criar/sobrescrever arquivo local
function updateJsonFile() {
  fs.writeFile("data/products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.error("Erro ao inserir o produto.", err);
      return;
    }

    console.log("Produto inserido!");
  });
}

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}/`)
);
