import { Router } from "express";

import upload from "../config/multer";
import * as PictureController from "../controllers/picture.controller";

const router = Router();

router.get("/", PictureController.findAll);
router.post("/", upload.single("file"), PictureController.create);
router.delete("/:id", PictureController.remove);

export default router;
