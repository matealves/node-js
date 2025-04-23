import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({ message: 'Name is required.' })
  @Length(3, 60)
  name: string;
  @IsNotEmpty({ message: 'Function is required.' })
  function: string;
}
