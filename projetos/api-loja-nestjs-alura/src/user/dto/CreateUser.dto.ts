import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'LastName is required' })
  lastName: string;

  @IsEmail(undefined, { message: 'Invalid email' })
  @EmailIsUnique({ message: 'Email is already in use' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
