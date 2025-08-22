import express, { RequestHandler } from "express";
import { AppDataSource } from "../config/dataSource";
import AbrigoController from "../controller/AbrigoController";
import AbrigoRepository from "../repositories/AbrigoRepository";
import { middlewareValidadorBodyAbrigo } from "../middlewares/abrigoRequestBody";
import { verificaIdMiddleware } from "../middlewares/verificaId";
import { middlewareValidatorBodyEndereco } from "../middlewares/enderecoRequestBody";

const router = express.Router();
const abrigoRepository = new AbrigoRepository(
  AppDataSource.getRepository("AbrigoEntity")
);
const abrigoController = new AbrigoController(abrigoRepository);

const validateAbrigoBody: RequestHandler = (req, res, next) =>
  middlewareValidadorBodyAbrigo(req, res, next);

const validateEnderecoBody: RequestHandler = (req, res, next) =>
  middlewareValidatorBodyEndereco(req, res, next);

router.post("/", validateAbrigoBody, (req, res) =>
  abrigoController.criaAbrigo(req, res)
);

router.get("/", (req, res) => abrigoController.listaAbrigos(req, res));

router.put("/:id", verificaIdMiddleware, (req, res) =>
  abrigoController.atualizaAbrigo(req, res)
);

router.delete("/:id", verificaIdMiddleware, (req, res) =>
  abrigoController.deletaAbrigo(req, res)
);

router.patch("/:id", verificaIdMiddleware, validateEnderecoBody, (req, res) =>
  abrigoController.atualizaEnderecoAbrigo(req, res)
);

export default router;
