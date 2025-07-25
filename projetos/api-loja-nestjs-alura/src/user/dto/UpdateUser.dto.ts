import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-unique.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'Name is required' })
  @IsOptional()
  name: string;

  @IsNotEmpty({ message: 'LastName is required' })
  @IsOptional()
  lastName: string;

  @EmailIsUnique({ message: 'Email is already in use' })
  @IsEmail(undefined, { message: 'Invalid email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsOptional()
  password: string;
}
