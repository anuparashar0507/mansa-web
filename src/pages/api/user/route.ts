import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";
// import prisma from "../../../lib/prisma";
import { PrismaClient, type User } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
  console.log("session at user route:", session);
  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const users: {
      email: string;
      id: string;
      password: string;
      name: string;
      jnv: string;
      passoutYear: number;
      role: string;
      gender: string;
      age: string;
      state: string;
      district: string;
      occupation: string;
      currentLocation: string;
      phone: string;
      createdAt: Date;
      updatedAt: Date;
    }[] = await prisma.user.findMany();
    return res.status(200).json(
      users.map((user) => {
        return {
          id: user?.id,
          email: user?.email,
          jnv: user?.jnv,
          name: user?.name,
          passoutYear: user?.passoutYear,
          role: user?.role,
          gender: user?.gender,
          age: user?.age,
          state: user?.state,
          district: user?.district,
          occupation: user?.occupation,
          currentLocation: user?.currentLocation,
          phone: user?.phone,
          createdAt: user?.createdAt,
          updatedAt: user?.updatedAt,
        };
      }),
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
