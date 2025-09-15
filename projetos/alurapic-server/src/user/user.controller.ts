import { Body, Controller, Post } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user) {
    const data = this.userService.create(user as User);

    return data;
  }
}
