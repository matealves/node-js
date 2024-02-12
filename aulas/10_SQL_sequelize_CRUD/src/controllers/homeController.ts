import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  const users = await User.findAll({
    // attributes: ["name", "age"],
    // attributes: ["name", ["age", "idade"]],
    attributes: { exclude: ["id"] },
    // where: { name: "Mateus" },
    // where: { name: "Mateus", age: 24 },
    where: { age: [18, 24] },
    // where: { [Op.or]: [{ age: 18 }, { age: 24 }] },
  });

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
