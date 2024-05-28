import { Request, Response } from "express";

import Picture from "../models/Picture";
import fs from "fs/promises";

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await Picture.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar imagens.",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const picture = new Picture({
      name,
      src: file?.path,
    });

    await picture.save();

    res.json({
      status: true,
      message: "Imagem salva com sucesso!",
      picture,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao salvar imagem.",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      res.status(404).json({ message: "Imagem não encontrada." });
    } else {
      // reomver imagem do repositório local
      fs.unlink(picture?.src);

      await picture.deleteOne();

      res.json({ message: "Imagem removida com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao excluir imagem.",
    });
  }
};
