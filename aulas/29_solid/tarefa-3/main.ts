interface Funcionario {
  nome: string;
  cargaHoraria: number;
}

interface FuncionarioEfetivo extends Funcionario {
  salario: number;
  calculaSalario(): number;
  calculaParticipacaoDeLucros(lucro: number): number;
}

interface FuncionarioVoluntario extends Funcionario {
  escreveRelatorio(): void;
}

class FuncionarioEfetivo implements FuncionarioEfetivo {
  constructor(nome: string, cargaHoraria: number, salario: number) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.salario = salario;
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`
    );
  }

  calculaSalarioLiquido(): number {
    const TAXA_DESCONTO = 0.2;
    const desconto = this.salario * TAXA_DESCONTO;
    return this.salario - desconto;
  }
  
  calculaParticipacaoDeLucros(lucro: number): number {
    return lucro * this.salario;
  }
}

class Pesquisador {
  constructor(
    public nome: string,
    public cargaHorariaExtensao: number,
    public orientador: Funcionario
  ) {
    this.nome = nome;
    this.cargaHorariaExtensao = cargaHorariaExtensao;
    this.orientador = orientador;
  }

  escreveRelatorio(): void {
    console.log(
      `Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`
    );
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu pesquiso ${this.cargaHorariaExtensao} horas por semana para cumprir na minha graduação`
    );
  }
}

const funcionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const pesquisador = new Pesquisador("Enzo", 20, funcionarioEfetivo);

//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log(
  "salário com PL:",
  funcionarioEfetivo.calculaParticipacaoDeLucros(2.5),
  "\n"
);

//Pesquisador
console.log("nome:", pesquisador.nome);
pesquisador.escreveRelatorio();