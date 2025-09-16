import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from './user.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class IsUserNameUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  validate(
    username: string,
    validationArguments?: ValidationArguments,
  ): boolean {
    return !this.userService.findByUsername(username);
  }
}

export function IsUserNameUnique(validationOptions?: ValidationOptions) {
  return function name(object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserNameUniqueConstraint,
    });
  };
}
