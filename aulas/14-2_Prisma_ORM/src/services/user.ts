import { prisma } from "../libs/prisma";

type createUserProps = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: createUserProps) => {
  return await prisma.user.create({
    data: { name, email },
  });
};
