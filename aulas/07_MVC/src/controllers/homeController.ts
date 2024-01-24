import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  const allProducts = Product.getAll();
  const expensiveProducts = Product.getFromPriceAfter(50);

  res.render("pages/home", {
    dev: "Mateus Alves",
    visible: true,
    frasesDoDia: ["Bom dia", "Boa tarde", "Boa noite"],
    products: allProducts,
    expensives: expensiveProducts,
  });
};
