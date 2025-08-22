import AbrigoEntity from "../../entities/AbrigoEntity";
import EnderecoEntity from "../../entities/EnderecoEntity";

export default interface InterfaceAbrigoRepository {
  criaAbrigo(abrigo: AbrigoEntity): void | Promise<void>;

  listaAbrigos(): AbrigoEntity[] | Promise<AbrigoEntity[]>;

  atualizaAbrigo(id: number, abrigo: AbrigoEntity): Promise<void>;

  deletaAbrigo(id: number): Promise<void>;

  atualizaEnderecoAbrigo(
    idAbrigo: number,
    endereco: EnderecoEntity
  ): Promise<void>;
}
