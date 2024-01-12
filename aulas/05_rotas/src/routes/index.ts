import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Página inicial");
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
