import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
  const nome = req.query.nome as string;
  res.render("pages/nome", {
    nome,
  });
};

export const getIdade = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const postIdade = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    const anoNascimento: number = Number(req.body.ano as string);
    const anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};
