import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserNameUnique } from './is-user-name-unique.validator';
import { Exclude, Expose } from 'class-transformer';

export class User {
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsUserNameUnique({ message: 'Username must be unique' })
  username: string;

  @IsEmail()
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  password: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty()
  nomeCompleto: string;
  createdAt: Date;
}
