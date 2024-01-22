import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // res.send("Página inicial");
  res.render("home", {
    dev: "Mateus Alves",
    visible: true,
    frasesDoDia: ["Bom dia", "Boa tarde", "Boa noite"],
    products: [
      { title: "produto-1", price: 10 },
      { title: "produto-2", price: 68 },
      { title: "produto-3", price: 41 },
    ],
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("contatomateusalves@hotmail.com");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("lorem ipsum dolor sit amet, consect");
});

// Rota dinâmica
router.get("/noticia/:slug", (req: Request, res: Response) => {
  const slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

export default router;
