import express, { RequestHandler } from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";
import { middlewareValidatorBodyPet } from "../middlewares/petRequestBody";
import { verificaIdMiddleware } from "../middlewares/verificaId";

const router = express.Router();

const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity"),
  AppDataSource.getRepository("AdotanteEntity")
);
const petController = new PetController(petRepository);

const validateBodyAdotante: RequestHandler = (req, res, next) =>
  middlewareValidatorBodyPet(req, res, next);

router.get("/", (req, res) => petController.listaPets(req, res));
router.post("/", validateBodyAdotante, (req, res) =>
  petController.criaPet(req, res)
);
router.put("/:id", verificaIdMiddleware, (req, res) =>
  petController.atualizaPet(req, res)
);
router.delete("/:id", verificaIdMiddleware, (req, res) =>
  petController.deletaPet(req, res)
);
router.put("/:pet_id/:adotante_id", verificaIdMiddleware, (req, res) =>
  petController.adotaPet(req, res)
);
router.get("/filtroPorte", (req, res) =>
  petController.buscaPetPeloPorte(req, res)
);
router.get("/filtro", (req, res) =>
  petController.buscaPetPorCampoGenerico(req, res)
);

export default router;
