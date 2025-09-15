import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user) {
    const data = this.userService.create(user as User);

    return { status: true, message: 'User created successfully', data };
  }

  @Get()
  public findAll() {
    const data = this.userService.findAll();

    return data;
  }

  @Delete()
  public remove(@Param('email') email: string) {
    this.userService.remove(email);

    return { status: true, message: 'User deleted successfully' };
  }
}
