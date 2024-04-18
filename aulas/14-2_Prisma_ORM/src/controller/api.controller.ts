import { Request, Response } from "express";
import { createUser, createUsers } from "../services/user";

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const createNewUser = async (req: Request, res: Response) => {
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
};

export const createMultipleUser = async (req: Request, res: Response) => {
  const users = await createUsers([req.body]);

  if (users) {
    res.status(201);
    res.json({
      message: "Usuários adicionados com sucesso.",
      count: users,
    });
  } else {
    res.status(500);
    res.json({
      error: "E-mail já cadastrado!",
    });
  }
};
