import { Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  createProduct(product: any) {
    return this.productRepository.createProduct(product);
  }

  @Get()
  getProducts() {
    return this.productRepository.getProducts();
  }
}
