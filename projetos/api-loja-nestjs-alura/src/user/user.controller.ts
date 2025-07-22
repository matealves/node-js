import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { ListUserDTO } from './dto/listUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  // Injeção de dependência do repositório de usuários
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async getUsers() {
    const users = await this.userRepository.getUsers();
    // limitar campos no retorno
    // const usersList = users.map((user) => new ListUserDTO(user.id, user.email));

    return users;
  }

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    const userEntity = new UserEntity();

    userEntity.name = data.name;
    userEntity.lastName = data.lastName;
    userEntity.email = data.email;
    userEntity.password = data.password;
    userEntity.id = uuid();

    this.userRepository.createUser(userEntity);
    return {
      message: 'User created successfully',
      data: userEntity,
    };
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const newUser = await this.userRepository.updateUser(id, data);

    return {
      message: 'User updated successfully',
      data: newUser,
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const deleted = await this.userRepository.removeUser(id);

    if (deleted) {
      return {
        id,
        message: 'User deleted successfully',
      };
    } else {
      return {
        error: 'Error to remove user',
      };
    }
  }
}
