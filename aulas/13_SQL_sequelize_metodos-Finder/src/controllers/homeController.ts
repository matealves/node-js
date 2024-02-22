import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  // MÉTODOS FINDER
  // ##### EX. 1 - findAll (Retorna um array de objetos, com todos encontrados)
  // const users = await User.findAll();

  // ##### EX. 2 - findOne (Retorna um objeto do 1º valor encontrado)
  // const user = await User.findOne({ where: { id: 1 } });
  // console.log("user:", user?.name);

  // ##### EX. 3 - findByPk (Retorna um objeto do Primary Key encontrado)
  // const user = await User.findByPk(2);
  // console.log("user:", user?.name);

  // ##### EX. 4 - findOrCreate || findOrBuild (Criar usuário caso não encontre)
  // const [user, created] = await User.findOrCreate({
  //   where: { name: "Raul" },
  //   defaults: {
  //     name: "Raul",
  //     age: 28,
  //   },
  // });

  // if (created) {
  //   console.log("Usuário criado com sucesso.");
  // } else {
  //   console.log("Usuário já existe.");
  // }

  // ##### EX. 5 - findAndCountAll (Retorna um objeto com duas propriedades, total e valores)
  const getUsers = await User.findAndCountAll({ limit: 5, offset: 10 });

  const count = getUsers.count;
  const users = getUsers.rows;
  console.log("count", count);

  // const { count, rows } = await User.findAndCountAll({ limit: 5, offset: 10 });
  // console.log("count", count);
  // console.log("users", rows);

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Mateus",
    lastName: "Alves",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users,
  });
};

export const novoUsuario = async (req: Request, res: Response) => {
  const { name, age } = req.body;

  if (name) {
    const newUser = User.build({ name });

    if (age) {
      newUser.age = Number(age);
    }

    await newUser.save();
  }
  res.redirect("/");
};
