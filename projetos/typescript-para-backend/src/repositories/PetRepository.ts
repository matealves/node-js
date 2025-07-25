import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
  constructor(private readonly repository: Repository<PetEntity>) {
    this.repository = repository;
  }

  criaPet(pet: PetEntity): void {
    this.repository.save(pet);
  }

  listaPet(): any {
    // this.repository.find();
  }

  atualizaPet(id: number, pet: PetEntity): void {
    this.repository.update(id, pet);
  }

  deletaPet(id: number, pet: PetEntity): void {
    this.repository.delete(id);
  }
}
