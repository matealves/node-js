import { Request, Response } from "express";

import { Product } from "../models/Product";
import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  // #### GET
  // const users = await User.find(); //return Array
  // const users = await User.findById("65d7e7b12af5b20e2986994a"); //return Object
  // const users = await User.findOne({ email: "ph@email.com.br" }); //return Object

  // const users = await User.find({ email: "ph@email.com.br", age: 45 });
  // const users = await User.find({ "name.firstName": "Roane" }); // prop Obj
  // const users = await User.find({ interests: "futebol" }); //value Array

  // const users = await User.find({ age: { $gt: 24 } }); // > 24
  // const users = await User.find({ age: { $lte: 25 } }); // <= 25
  // const users = await User.find({ age: { $gt: 24, $lt: 30 } }); // > 24 & < 30

  // #### SORT / ORDER
  // (1) ASC: ordem crescente ----- (-1) DESC: ordem decrescente
  // const users = await User.find({ age: { $gt: 18 } }).sort({ age: -1 });
  const users = await User.find().sort({ "name.firstName": 1 });

  // #### POST
  // #### PUT/UPDATE
  // #### DELETE

  console.log("users:", users);

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
  });
};
