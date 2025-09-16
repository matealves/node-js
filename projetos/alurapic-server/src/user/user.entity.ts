import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserNameUnique } from './is-user-name-unique.validator';

export class User {
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsUserNameUnique({ message: 'Username must be unique' })
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;
  createdAt: Date;
}
