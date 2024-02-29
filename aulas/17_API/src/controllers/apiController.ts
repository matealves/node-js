import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const createPhrase = async (req: Request, res: Response) => {
  const { author, txt } = await req.body;
  const newPhrase = await Phrase.create({ author, txt });

  res.status(201);
  res.json({
    success: true,
    message: "Frase adicionada com sucesso.",
    data: { id: newPhrase.id, author, txt },
  });
};

export const getAllPhrases = async (req: Request, res: Response) => {
  res.json(await Phrase.findAll());
};

export const getPhrase = async (req: Request, res: Response) => {
  const phrase = await Phrase.findByPk(req.params.id);
  if (phrase) {
    res.json(phrase);
  } else {
    res.status(404);
    res.json({ error: "404 - Não encontrado" });
  }
};
