// Configuração inicial
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const port = 3000;
const DB_URL = process.env.DB_URL;

// Forma de ler o JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rota inicial / endpoint
app.get("/", (req, res) => {
  return res.json({ message: "Success", data: [] });
});

// Rotas da API
const personRoutes = require("./routes/PersonRoutes");

app.use("/person", personRoutes);

// Entregar uma porta
mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("\x1b[32mMongoDB connected!");
      console.log(`Server on-line: \x1b[34mhttp://localhost:${port}/\x1b[0m`);
    });
  })
  .catch((err) => console.log(err));
