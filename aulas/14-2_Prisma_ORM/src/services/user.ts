import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

type createUserProps = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: createUserProps) => {
  try {
    return await prisma.user.create({
      data: { name, email },
    });
  } catch (error) {
    // if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //     if(error.code === 'P2002') {}
    // }
    return false;
  }
};
