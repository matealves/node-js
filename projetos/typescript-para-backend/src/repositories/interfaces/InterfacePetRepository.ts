import PetEntity from "../../entities/PetEntity";
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void;

  listaPet(): Promise<PetEntity[]> | PetEntity[];

  atualizaPet(id: number, newData: PetEntity): Promise<void>;

  deletaPet(id: number): Promise<void>;

  adotaPet(idPet: number, idAdotante: number): Promise<void>;

  buscaPetPeloPorte(porte: EnumPorte): Promise<PetEntity[]> | PetEntity[];

  buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
    valor: PetEntity[Tipo]
  ): Promise<PetEntity[]> | PetEntity[];
}
