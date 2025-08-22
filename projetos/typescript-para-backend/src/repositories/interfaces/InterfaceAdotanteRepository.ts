import AdotanteEntity from "../../entities/AdotanteEntity";
import EnderecoEntity from "../../entities/EnderecoEntity";

export default interface InterfaceAdotanteRepository {
  criaAdotante(adotante: AdotanteEntity): Promise<void>;

  listaAdotantes(): AdotanteEntity[] | Promise<AdotanteEntity[]>;

  atualizaAdotante(id: number, adotante: AdotanteEntity): Promise<void>;

  deletaAdotante(id: number): Promise<void>;

  atualizaEnderecoAdotante(
    IdAdotante: number,
    endereco: EnderecoEntity
  ): Promise<void>;
}
