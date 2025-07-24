import { Request, Response } from "express";
import TipoPet from "../types/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";

const listaDePets: TipoPet[] = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const { id, nome, idade, especie, adotado } = req.body as TipoPet;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(404).json({ erro: "Espécie inválida" });
    }

    const novoPet: TipoPet = { id, nome, idade, especie, adotado };
    listaDePets.push(novoPet);

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
    const { adotado, especie, idade, nome } = req.body as TipoPet;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }

    pet.nome = nome;
    pet.idade = idade;
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
