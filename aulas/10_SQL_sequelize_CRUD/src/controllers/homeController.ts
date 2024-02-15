import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  // GT = Greather Than (Maior que)
  // LT = Less Than (Menor que)
  // E = Equal (Igual)

  // ####### EX 1 - MODELOS DE FILTROS

  // const users = await User.findAll({
  //   // attributes: ["name", "age"],
  //   // attributes: ["name", ["age", "idade"]],
  //   attributes: { exclude: ["id"] },
  //   // where: { name: "Mateus" },
  //   // where: { name: "Mateus", age: 24 },
  //   // where: { age: [18, 24] },
  //   // where: { age: { [Op.in]: [18, 25] } },
  //   // where: { age: { [Op.notIn]: [18, 25] } },
  //   // where: { [Op.or]: [{ age: 18 }, { age: 24 }] },
  //   where: {
  //     // age: {
  //     //   // [Op.gt]: 24, // > 24
  //     //   [Op.gte]: 24, // >= 24
  //     //   // [Op.lt]: 25, // < 25
  //     //   // [Op.lte]: 25, // <= 25
  //     // },
  //     // age: {
  //     // [Op.gte]: 25, // >= 25
  //     // [Op.lte]: 50, // <= 50
  //     // [Op.between]: [25, 50], // >= 25 && <= 50
  //     // [Op.notBetween]: [25, 50], // < 25 && > 50
  //     // },
  //   },
  // });

  // ####### EX 2 - FILTROS SE CONTÉM OU NÃO CONTÉM ALGO
  // const searchName = "a";
  // const users = await User.findAll({
  //   attributes: { exclude: ["id"] },
  //   // where: {
  //   //   name: {
  //   //     // [Op.like]: "ma%", // começa com "ma"
  //   //     // [Op.like]: "%e", // termina com "e"
  //   //     // [Op.like]: "%a%", // contém "a"
  //   //   },
  //   // },
  //   where: {
  //     name: { [Op.like]: `%${searchName}%`, [Op.notLike]: "%o%" },
  //   },
  // });

  // ####### EX 3 - ORDENANDO RESULTADOS
  // const users = await User.findAll({
  //   where: { age: { [Op.gte]: 18 } },
  //   // order: ["name"],
  //   order: [["name", "ASC"]],
  //   // order: [
  //   //   ["age", "DESC"],
  //   //   ["name", "DESC"],
  //   // ],
  // });

  // ####### EX 4 - LIMITAR RESULTADOS E PAGINAÇÃO
  // const users = await User.findAll({
  // order: [["name", "ASC"]],
  // limit: 5, // limitar por página
  // offset: 0, // pular "n" valores
  // });

  // ####### EX 1 - ATUALIZAR DADOS (UPDATE)
  // const dataUpdated = { name: "Teste", age: 99 };
  // await User.update(dataUpdated, {
  //   where: {
  //     name: "Teste1",
  //   },
  //   // where: {
  //   //   age: { [Op.lt]: 18 },
  //   // },
  // });

  // ####### EX 2 - ATUALIZAR DADOS (SAVE)
  // const users = await User.findAll({ where: { id: 20 } });
  // // console.log("result", users);

  // if (users.length > 0) {
  //   let user = users[0];

  //   user.age = 18;
  //   await user.save();
  // }

  const users = await User.findAll();

  // ####### EX 1 - INSERIR DADOS (BUILD + SAVE)
  // const newUser = User.build({
  //   name: "Test",
  // });
  // pegar data de nascimento de outro lugar
  // const ageNewUser = 35;
  // newUser.age = ageNewUser;
  // await newUser.save();

  // ####### EX 2 - INSERIR DADOS (CREATE)
  // const newUser2 = await User.create({
  //   name: "Raul",
  //   age: 28,
  // });

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
