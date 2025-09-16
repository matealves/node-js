import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: User) {
    const data = this.userService.create(user as unknown as User);

    return { status: true, message: 'User created successfully', data };
  }

  @Get()
  public findAll() {
    const data = this.userService.findAll();

    return data;
  }

  @Get('/search')
  public findByUsername(@Query('username') username: string) {
    return this.userService.findByUsername(username);
  }

  @Get('/search')
  public findByEmail(@Query('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Delete()
  public remove(@Query('id') id: number) {
    this.userService.remove(id);

    return { status: true, message: 'User deleted successfully' };
  }
}
