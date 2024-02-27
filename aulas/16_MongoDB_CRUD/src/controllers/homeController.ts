import { Request, Response } from "express";

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

  // - SORT / ORDER
  // (1) ASC: ordem crescente ----- (-1) DESC: ordem decrescente
  // const users = await User.find({ age: { $gt: 18 } }).sort({ age: -1 });
  // const users = await User.find().sort({ "name.firstName": 1 });

  // -LIMIT RESULTS / PAGINATION
  // (skip) pular "n" valores ----- (limit) exibir "n" valores
  // const users = await User.find().skip(2).limit(2);

  // #### POST
  // - create
  // const newUser = await User.create({
  //   name: {
  //     firstName: "Juliana",
  //     lastName: "Pereira",
  //   },
  //   age: 34,
  //   email: "ju.pereira@email.com",
  //   interests: ["livros", "filmes", "vinho"],
  // });
  // console.log("NOVO USUÁRIO: ", newUser);

  // - instância do Model + save()
  // const newUser = new User();
  // newUser.name = { firstName: "André", lastName: "Santos" };
  // newUser.age = 41;
  // newUser.email = "andre@email.com";
  // newUser.interests = ["economia", "basquete"];

  // const result = await newUser.save();
  // console.log("NOVO USUÁRIO: ", result);
  // console.log("NOVO USUÁRIO: ", newUser);

  // #### UPDATE
  // - updateOne / updateMany / findOneAndUpdate
  // await User.updateOne(
  // await User.findOneAndUpdate(
  // await User.updateMany(
  //   { age: { $lt: 18 } }, // condição
  //   { age: 18 } // dado atualizado
  // );

  // - updateOne / updateMany
  // const user = await User.findOne({ email: "ph@email.com.br" });
  // if (user) {
  //   user.age = 46;
  //   // await user?.save();
  //   console.log("userUpdated: ", user);
  // }

  // #### DELETE

  const users = await User.find().sort({ "name.firstName": 1 });

  res.render("pages/home", {
    users,
  });
};
