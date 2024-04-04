import { Router } from "express";
import { Auth } from "../middlewares/auth";
import * as ApiController from "../controllers/api.controller";

const router = Router();

// Test
router.get("/ping", ApiController.ping);

router.post("/register", ApiController.register);
router.post("/login", ApiController.login);

router.get("/list", Auth.private, ApiController.list);

export default router;
