import { Request, Response } from "express";
import { Sequelize } from "sequelize";

import { Phrase } from "../models/Phrase";

export const createPhrase = async (req: Request, res: Response) => {
  const data = await Phrase.create(req.body);

  res.status(201);
  res.json({
    success: true,
    message: "Dados inseridos com sucesso.",
    data,
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
    res.json({ error: "404 - Não encontrado." });
  }
};

export const getRandomPhrase = async (req: Request, res: Response) => {
  const phrase = await Phrase.findOne({
    order: [
      Sequelize.fn("RANDOM"), // no MySQL usar 'RAND'
    ],
  });

  if (phrase) res.json(phrase);
  else {
    res.status(404);
    res.json({ error: "404 - Não encontrado" });
  }
};

export const updatePhrase = async (req: Request, res: Response) => {
  const { author, txt } = req.body;
  const phrase = await Phrase.findByPk(req.params.id);

  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;
    await phrase.save();

    res.json(phrase);
  } else {
    res.status(404);
    res.json({ error: "404 - Não encontrado." });
  }
};

export const deletePhrase = async (req: Request, res: Response) => {
  await Phrase.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deletado com sucesso." });
};

export const uploadFile = async (req: Request, res: Response) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  console.log("req.files: ", files);

  res.json({ message: "Upload realizado com sucesso." });
};
