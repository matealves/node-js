import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const random = (req: Request, res: Response) => {
  const nRand: number = Math.floor(Math.random() * 100);
  res.json({ number: nRand });
};

export const nome = (req: Request, res: Response) => {
  function capitalize(nome: string) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }

  const nome: string = req.params.nome;

  res.json({ nome: capitalize(nome) });
};
