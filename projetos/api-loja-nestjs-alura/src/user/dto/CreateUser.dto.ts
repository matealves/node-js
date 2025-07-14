import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsNotEmpty({ message: 'LastName is required' })
  lastName: string;
  @IsEmail(undefined, { message: 'Invalid email' })
  email: string;
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
