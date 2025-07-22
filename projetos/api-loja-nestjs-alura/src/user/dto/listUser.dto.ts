export class ListUserDTO {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly fullName: string,
  ) {}
}
