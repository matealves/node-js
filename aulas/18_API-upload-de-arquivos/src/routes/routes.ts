import { Router } from "express";
import multer from "multer";

import * as ApiController from "../controllers/apiController";

const upload = multer({
  dest: "./temp",
});

const router = Router();

router.post("/upload", upload.single("avatar"), ApiController.uploadFile);
// router.post("/upload", upload.array('avatars', 2), ApiController.uploadFile);
// router.post(
//   "/upload",
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "gallery", maxCount: 3 },
//   ]),
//   ApiController.uploadFile
// );

router.post("/frases", ApiController.createPhrase);

router.get("/frases", ApiController.getAllPhrases);
router.get("/frase/aleatoria", ApiController.getRandomPhrase);
router.get("/frase/:id", ApiController.getPhrase);

router.put("/frase/:id", ApiController.updatePhrase);

router.delete("/frase/:id", ApiController.deletePhrase);

export default router;
