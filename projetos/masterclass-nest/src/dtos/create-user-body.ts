import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  @Length(3, 60)
  name: string;
  @IsNotEmpty()
  function: string;
}
