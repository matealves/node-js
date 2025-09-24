import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { NestResponse } from '../core/http/nest-response';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: User): NestResponse {
    const data = this.userService.create(user as unknown as User);

    // return { status: true, message: 'User created successfully', data };

    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({ Location: `/users/${data.username}` })
      .comBody(data)
      .build();
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
