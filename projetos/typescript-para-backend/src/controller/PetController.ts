import { Request, Response } from "express";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";
import EnumPorte from "../enum/EnumPorte";
import {
  TipoRequestBodyPet,
  TipoRequestParamsPet,
  TipoResponseBodyPet,
} from "../types/tiposPet";

export default class PetController {
  constructor(private readonly repository: PetRepository) {}

  criaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { nome, dataDeNascimento, especie, porte, adotado } =
      req.body as PetEntity;

    const novoPet: PetEntity = new PetEntity(
      nome,
      especie,
      dataDeNascimento,
      adotado,
      porte
    );

    this.repository.criaPet(novoPet);

    return res.status(201).json({
      data: { id: novoPet.id, nome, especie, porte },
    });
  }

  async listaPets(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const listaDePets = await this.repository.listaPet();

    const data = listaDePets.map((pet) => {
      return {
        id: pet.id,
        nome: pet.nome,
        especie: pet.especie,
        porte: pet.porte !== null ? pet.porte : undefined,
      };
    });

    return res.json({ data });
  }

  async atualizaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { id } = req.params;
    await this.repository.atualizaPet(Number(id), req.body as PetEntity);

    return res.sendStatus(204);
  }

  async deletaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { id } = req.params;

    await this.repository.deletaPet(Number(id));

    return res.sendStatus(204);
  }

  async adotaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { pet_id, adotante_id } = req.params;

    await this.repository.adotaPet(Number(pet_id), Number(adotante_id));

    return res.sendStatus(204);
  }

  // substituido por buscaPetPorCampoGenerico
  async buscaPetPeloPorte(req: Request, res: Response) {
    const { porte } = req.query;
    const listaDePetsPeloPorte = await this.repository.buscaPetPeloPorte(
      porte as EnumPorte
    );

    return res.status(200).json(listaDePetsPeloPorte);
  }

  async buscaPetPorCampoGenerico(req: Request, res: Response) {
    const { campo, valor } = req.query;
    const listaDePets = await this.repository.buscaPetPorCampoGenerico(
      campo as keyof PetEntity,
      valor as string
    );

    return res.status(200).json(listaDePets);
  }
}
