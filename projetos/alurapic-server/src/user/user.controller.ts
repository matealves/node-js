import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
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
    const userExist = this.userService.findByUsername(username);
    if (!userExist) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    }

    return userExist;
  }

  @Get('/search')
  public findByEmail(@Query('email') email: string) {
    const userExist = this.userService.findByEmail(email);
    if (!userExist) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    }

    return userExist;
  }

  @Delete()
  public remove(@Query('id') id: number) {
    this.userService.remove(id);

    return { status: true, message: 'User deleted successfully' };
  }
}
