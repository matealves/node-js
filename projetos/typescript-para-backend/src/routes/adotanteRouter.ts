import express, { RequestHandler } from "express";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AppDataSource } from "../config/dataSource";
import { middlewareValidatorBodyAdotante } from "../middlewares/adotandeRequestBody";
import { middlewareValidatorBodyEndereco } from "../middlewares/enderecoRequestBody";

const router = express.Router();
const adotanteRepository = new AdotanteRepository(
  AppDataSource.getRepository("AdotanteEntity")
);
const adotanteController = new AdotanteController(adotanteRepository);

const validateBodyAdotante: RequestHandler = (req, res, next) =>
  middlewareValidatorBodyAdotante(req, res, next);

const validateBodyEndereco: RequestHandler = (req, res, next) =>
  middlewareValidatorBodyEndereco(req, res, next);

router.post("/", validateBodyAdotante, (req, res) =>
  adotanteController.criaAdotante(req, res)
);
router.get("/", (req, res) => adotanteController.listaAdotantes(req, res));
router.put("/:id", (req, res) => adotanteController.atualizaAdotante(req, res));
router.delete("/:id", (req, res) =>
  adotanteController.deletaAdotante(req, res)
);
router.patch("/:id", validateBodyEndereco, (req, res) =>
  adotanteController.atualizaEnderecoAdotante(req, res)
);

export default router;
