import { Router } from "express";

import * as ApiController from "../controllers/api.controller";
import * as EmailController from "../controllers/email.controller";

const router = Router();

router.get("/ping", ApiController.ping);

router.post("/contato", EmailController.contato);

export default router;
