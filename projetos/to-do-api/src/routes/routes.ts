import { Router } from "express";
import * as TodoController from "../controllers/todo.controller";

const router = Router();

router.get("/tarefas", TodoController.getAllTasks);
router.post("/tarefas", TodoController.addTask);
router.put("/tarefa/:id", TodoController.updateTask);
router.delete("/tarefa/:id", TodoController.removeTask);

export default router;
