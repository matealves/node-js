import { Repository } from "typeorm";
import InterfaceAdotanteRepository from "./interfaces/InterfaceAdotanteRepository";
import AdotanteEntity from "../entities/AdotanteEntity";

export default class AdotanteRepository implements InterfaceAdotanteRepository {
  constructor(private readonly repository: Repository<AdotanteEntity>) {}

  async criaAdotante(adotante: AdotanteEntity): Promise<void> {
    await this.repository.save(adotante);
  }

  async listaAdotantes(): Promise<AdotanteEntity[]> {
    return await this.repository.find();
  }
  async atualizaAdotante(
    id: number,
    newData: AdotanteEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adotanteToUpdate = await this.repository.findOne({ where: { id } });

      if (!adotanteToUpdate) {
        return { success: false, message: "Adotante não encontrado" };
      }

      Object.assign(adotanteToUpdate, newData);

      await this.repository.save(adotanteToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o adotante.",
      };
    }
  }

  async deletaAdotante(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adotanteToRemove = await this.repository.findOne({ where: { id } });

      if (!adotanteToRemove) {
        return { success: false, message: "Adotante não encontrado" };
      }

      await this.repository.remove(adotanteToRemove);

      return { success: true };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o adotante.",
      };
    }
  }
}
