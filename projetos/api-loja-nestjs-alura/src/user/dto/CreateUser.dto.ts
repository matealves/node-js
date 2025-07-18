import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsNotEmpty({ message: 'LastName is required' })
  lastName: string;
  @EmailIsUnique({ message: 'Email is already in use' })
  @IsEmail(undefined, { message: 'Invalid email' })
  email: string;
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
