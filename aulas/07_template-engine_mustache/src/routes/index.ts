import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // res.send("Página inicial");
  res.render("pages/home", {
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
  // res.send("contatomateusalves@hotmail.com");
  res.render("pages/contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  // res.send("lorem ipsum dolor sit amet, consect");
  res.render("pages/sobre");
});

router.get("/nome", (req: Request, res: Response) => {
  const nome = req.query.nome as string;
  res.render("pages/nome", {
    nome,
  });
});

// Rota dinâmica
router.get("/noticia/:slug", (req: Request, res: Response) => {
  const slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

router.get("/idade", (req: Request, res: Response) => {
  res.render("pages/idade");
});

router.post("/idade", (req: Request, res: Response) => {
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
});

export default router;
