import "express-async-errors";
import express from "express";
import router from "./routes";

import { AppDataSource } from "./config/dataSource";
import "reflect-metadata";
import { erroMiddleware } from "./middlewares/erro";

const app = express();
app.use(express.json());

router(app);

app.get("/test", () => {
  throw new Error("Erro de teste");
});

app.use(erroMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((erro) => {
    console.log(erro);
  });

export default app;
