import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;
  createdAt: Date;
}
