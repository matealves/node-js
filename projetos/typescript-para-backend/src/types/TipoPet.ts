import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
  id: number;
  nome: string;
  especie: EnumEspecie;
  idade: number;
  adotado: boolean;
};

export default TipoPet;
