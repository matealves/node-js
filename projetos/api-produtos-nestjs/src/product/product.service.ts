import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismaService.products.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prismaService.products.findMany();
  }

  findOne(id: number) {
    return this.prismaService.products.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prismaService.products.delete({
      where: { id },
    });
  }
}
