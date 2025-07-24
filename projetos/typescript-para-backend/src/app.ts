import express from "express";
import router from "./routes";

import { AppDataSource } from "./config/dataSource";
import "reflect-metadata";

const app = express();
app.use(express.json());

router(app);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((erro) => {
    console.log(erro);
  });

export default app;
