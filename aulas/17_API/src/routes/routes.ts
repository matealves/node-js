import { Router } from "express";

import * as ApiController from "../controllers/apiController";
import * as Test from "../controllers/testController";

const router = Router();

router.post("/frases", ApiController.createPhrase);

router.get("/frases", ApiController.getAllPhrases);
router.get("/frase/aleatoria", ApiController.getRandomPhrase);
router.get("/frase/:id", ApiController.getPhrase);

router.put("/frase/:id", ApiController.updatePhrase);

router.delete("/frase/:id", ApiController.deletePhrase);

// Test
router.get("/ping", Test.ping);
router.get("/random", Test.random);
router.get("/nome/:nome", Test.nome);

export default router;
