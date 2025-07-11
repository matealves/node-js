import { Injectable } from '@nestjs/common';

type Product = {
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: [
    {
      nome: string;
      descricao: string;
    },
    {
      nome: string;
      descricao: string;
    },
  ];
  imagens: [
    {
      url: string;
    },
  ];
  categoria: string;
  dataCriacao: string;
  dataAtualizacao: string;
};

@Injectable()
export class ProductRepository {
  private readonly products: Product[] = [];

  createProduct(product: Product) {
    this.products.push(product);
    return product;
  }

  getProducts() {
    return this.products;
  }
}
