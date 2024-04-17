import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    return false;
  }
};
