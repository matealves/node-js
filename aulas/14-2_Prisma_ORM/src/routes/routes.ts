import { Router } from "express";
import { createUser } from "../services/user";

export const mainRouter = Router();

mainRouter.get("/test", (req, res) => {
  res.json({ test: true });
});

mainRouter.post("/user", async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });

  if (user) {
    res.status(201);
    res.json({
      message: "Usuário adicionado com sucesso.",
      user,
    });
  } else {
    res.status(500);
    res.json({
      error: "E-mail já cadastrado!",
    });
  }
});
