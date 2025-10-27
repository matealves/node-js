{
  const MES_COMERCIAL = 20; //dias trabalhados no mês

  interface ContratoRemunerado {
    titulo: string;
    remuneracao(): number;
  }

  class ContratoClt implements ContratoRemunerado {
    private readonly GANHO_POR_HORA_CLT = 24;
    private readonly CARGA_HORARIA_DIARIA_CLT = 8;
    titulo: string = "CLT";
    remuneracao(): number {
      return (
        this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT
      );
    }
  }

  class Estagio implements ContratoRemunerado {
    private readonly GANHO_POR_HORA_ESTAGIARIO = 14;
    private readonly CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
    titulo: string = "Estágio";
    remuneracao(): number {
      return (
        this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO
      );
    }
  }

  class ContratoPJ implements ContratoRemunerado {
    private readonly GANHO_POR_HORA_PJ = 36;
    private readonly CARGA_HORARIA_DIARIA_PJ = 8;
    titulo: string = "PJ";
    remuneracao(): number {
      return (
        this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ
      );
    }
  }

  class FolhaDePagamento {
    static calcularSalarioMensal(funcionario: ContratoRemunerado): number {
      return funcionario.remuneracao() * MES_COMERCIAL;
    }
  }

  const funcionarioClt = new ContratoClt();
  const funcionarioEstagiario = new Estagio();
  const funcionarioPJ = new ContratoPJ();

  console.log(
    `Sou ${
      funcionarioClt.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioClt
    )}`
  );
  console.log(
    `Sou ${
      funcionarioEstagiario.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioEstagiario
    )}`
  );
  console.log(
    `Sou ${
      funcionarioPJ.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioPJ
    )}`
  );
}
