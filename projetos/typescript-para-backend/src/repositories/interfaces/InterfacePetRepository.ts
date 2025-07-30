import PetEntity from "../../entities/PetEntity";
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void;

  listaPet(): Promise<PetEntity[]> | PetEntity[];

  atualizaPet(
    id: number,
    newData: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;

  adotaPet(
    idPet: number,
    idAdotante: number
  ): Promise<{ success: boolean; message?: string }>;

  buscaPetPeloPorte(porte: EnumPorte): Promise<PetEntity[]> | PetEntity[];
}
