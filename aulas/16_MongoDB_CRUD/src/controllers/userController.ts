import { Request, Response } from "express";
import User from "../models/User";

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

export const addUserAction = async (req: Request, res: Response) => {
  const { firstName, lastName, email, age, interests } = req.body;

  try {
    const newUser = new User();
    newUser.name = { firstName, lastName };
    newUser.email = email;
    newUser.age = age;
    newUser.interests = interests.trim().split(/\,\s|\,/g);

    const result = await newUser.save();
    console.log("\nNovo usuário adicionado: ", result);
  } catch (error) {
    console.log("Erro ao inserir usuário no banco:\n", error);
  }

  res.redirect("/");
};

export const incrementAgeAction = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, { $inc: { age: 1 } });

  res.redirect("/");

  // const userEncontrado = await User.findById(id);
  // if (userEncontrado) {
  //   userEncontrado.age++;
  //   userEncontrado.save();
  //   res.redirect("/");
  // }
};

export const decrementAgeAction = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.findByIdAndUpdate(id, { $inc: { age: -1 } });

  res.redirect("/");

  // const userEncontrado = await User.findById(id);
  // if (userEncontrado) {
  //   userEncontrado.age--;
  //   userEncontrado.save();
  //   res.redirect("/");
  // }
};
