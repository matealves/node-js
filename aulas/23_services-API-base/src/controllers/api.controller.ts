import { Request, Response } from "express";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

import * as UserService from "../services/UserService";

dotenv.config();

// Test
export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const register = async (req: Request, res: Response) => {
  const { name, lastName, email, password } = req.body;

  if (name && lastName && email && password) {
    const newUser = await UserService.createUser(
      name,
      lastName,
      email,
      password
    );

    if (newUser instanceof Error) {
      res.json({ error: newUser.message });
    } else {
      const token = JWT.sign(
        {
          id: newUser.id,
          name: newUser.name,
          lastName: newUser.lastName,
          email: newUser.email,
        },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "2h" }
      );

      res.status(201);
      res.json({
        id: newUser.id,
        message: "Usuário cadastrado com sucesso!",
        token,
      });
    }
  } else {
    res.json({ error: "Dados obrigatórios não enviados." });
  }
};

export const login = async (req: Request, res: Response) => {
  if (req.body.email && req.body.password) {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const user = await UserService.findByEmail(email);

    if (user && (await UserService.matchPassword(password, user.password))) {
      const token = JWT.sign(
        {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
        },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "2h" }
      );

      res.json({ status: true, token });
      return;
    }
  }

  res.json({ status: false });
};

export const list = async (req: Request, res: Response) => {
  const users = await UserService.all();
  const list: string[] = [];

  for (const i in users) {
    list.push(`${users[i].name} ${users[i].lastName}`);
  }

  res.json({ list });
};
