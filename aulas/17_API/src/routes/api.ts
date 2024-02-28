import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get("/random", (req, res) => {
  const nRand: number = Math.floor(Math.random() * 100);
  res.json({ number: nRand });
});

router.get("/nome/:nome", (req, res) => {
  function capitalize(nome: string) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }

  const nome: string = req.params.nome;

  res.json({ nome: capitalize(nome) });
});

export default router;
