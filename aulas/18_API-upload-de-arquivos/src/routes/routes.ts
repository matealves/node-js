import { Router } from "express";
import multer from "multer";

import * as ApiController from "../controllers/apiController";

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./temp");
//   },
//   filename: (req, file, callback) => {
//     callback(null, Date.now() + ".jpg");
//   },
// });

const upload = multer({
  dest: "./temp",
  fileFilter: (req, file, callback) => {
    const allowed: string[] = ["image/jpg", "image/jpeg", "image/png"];
    if (!allowed.includes(file.mimetype)) {
      // callback(null, false);
      callback(new multer.MulterError("LIMIT_UNEXPECTED_FILE"));
    } else {
      callback(null, true);
    }
  },
  limits: { fileSize: 2000000 },
  // storage: multer.memoryStorage(), // Exige muita memória (derruba o server)
  // storage,
});

const router = Router();

router.post("/upload", upload.single("avatar"), ApiController.uploadFile);
// router.post("/upload", upload.array("avatars", 2), ApiController.uploadFile);
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
