import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { productModule } from './product/product.module';

@Module({
  imports: [UserModule, productModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
