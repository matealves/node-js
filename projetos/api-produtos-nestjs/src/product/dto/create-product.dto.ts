import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'category is required' })
  category: string;

  @IsString()
  @IsNotEmpty({ message: 'description is required' })
  description: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty({ message: 'price is required' })
  price: number;
}
