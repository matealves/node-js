import { Request, Response } from "express";
import { User } from "../models/User";

import { generateToken } from "../config/passport";

// Test
export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const register = async (req: Request, res: Response) => {
  const { name, lastName, email, password } = req.body;

  if (name && lastName && email && password) {
    const hasUser = await User.findOne({ where: { email } });

    if (!hasUser) {
      const newUser = await User.create({
        name,
        lastName,
        email,
        password,
      });

      const token = generateToken({
        id: newUser.id,
        name: newUser.name,
        lastName: newUser.lastName,
      });

      res.status(201);
      res.json({
        id: newUser.id,
        message: "Usuário cadastrado com sucesso!",
        token,
      });
    } else {
      res.json({ error: "E-mail já existe." });
    }
  } else {
    res.json({ error: "Dados obrigatórios não enviados." });
  }
};

export const login = async (req: Request, res: Response) => {
  if (req.body.email && req.body.password) {
    const { email, password } = req.body;
    const authorization = req.header;

    const user = await User.findOne({
      where: { email, password },
    });

    if (user) {
      const token = generateToken({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
      });
      res.json({ status: true, token });
      return;
    }
  }

  res.json({ status: false });
};

export const list = async (req: Request, res: Response) => {
  const users = await User.findAll();
  const list: string[] = [];

  for (const i in users) {
    list.push(`${users[i].name} ${users[i].lastName}`);
  }

  res.json({ list });
};
