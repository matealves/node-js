import express from "express";
import PetController from "../controller/controller";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet);

export default router;
