import { Router } from "express";

import * as apiController from "../controller/api.controller";

export const router = Router();

router.get("/test", apiController.ping);
router.post("/user", apiController.createNewUser);
router.post("/users", apiController.createMultipleUser);
