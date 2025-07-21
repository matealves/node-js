import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/listUser.dto';

@Controller('/users')
export class UserController {
  // Injeção de dependência do repositório de usuários
  constructor(private readonly userRepository: UserRepository) {}

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
      data: {
        id: userEntity.id,
        email: userEntity.email,
      },
    };
  }

  @Get()
  async getUsers() {
    const users = await this.userRepository.getUsers();
    const usersList = users.map((user) => new ListUserDTO(user.id, user.email));

    return usersList;
  }
}
