import { Request, Response } from "express";
import TipoPet from "../types/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

const listaDePets: TipoPet[] = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}
export default class PetController {
  constructor(private readonly repository: PetRepository) {}

  criaPet(req: Request, res: Response) {
    const { nome, dataDeNascimento, especie, adotado } = req.body as PetEntity;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(404).json({ erro: "Espécie inválida" });
    }

    const novoPet: PetEntity = new PetEntity();

    (novoPet.id = geraId()),
      (novoPet.nome = nome),
      (novoPet.dataDeNascimento = dataDeNascimento),
      (novoPet.especie = especie),
      (novoPet.adotado = adotado),
      this.repository.criaPet(novoPet);

    return res.status(201).json({
      mensagem: "Pet criado com sucesso.",
      data: novoPet,
    });
  }

  listaPets(req: Request, res: Response) {
    return res.status(200).json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { adotado, especie, dataDeNascimento, nome } = req.body as TipoPet;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }

    pet.nome = nome;
    pet.dataDeNascimento = dataDeNascimento;
    pet.especie = especie;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }
    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  }
}
