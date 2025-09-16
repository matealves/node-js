import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUserNameUniqueConstraint } from './is-user-name-unique.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, IsUserNameUniqueConstraint],
})
export class UserModule {}
