// import prisma from "../lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export default prisma;
export async function getUserDetails(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      name: true,
      email: true,
      phone: true,
      gender: true,
      role: true,
      age: true,
      state: true,
      district: true,
      jnv: true,
      passoutYear: true,
      occupation: true,
      currentLocation: true,
      // Add other fields from the schema
    },
  });

  return user;
}
