import { Request, Response } from "express";
import AdotanteEntity from "../entities/AdotanteEntity";
import AdotanteRepository from "../repositories/AdotanteRepository";

export default class AdotanteController {
  constructor(private readonly repository: AdotanteRepository) {}

  async criaAdotante(req: Request, res: Response) {
    try {
      const { nome, celular, endereco, foto, senha } =
        req.body as AdotanteEntity;

      const novoAdotante = new AdotanteEntity(
        nome,
        senha,
        celular,
        foto,
        endereco
      );

      await this.repository.criaAdotante(novoAdotante);
      return res.status(201).json({
        status: true,
        message: "Adotante criado com sucesso.",
        novoAdotante,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar o adotante" });
    }
  }
}
