import { Request, Response } from "express";

import { Phrase } from "../models/Phrase";

export const createPhrase = async (req: Request, res: Response) => {
  const { author, txt } = await req.body;

  const newPhrase = await Phrase.create({ author, txt });

  res.json({
    success: true,
    message: "Frase adicionada com sucesso.",
    id: newPhrase.id,
    author,
    txt,
  });
};
