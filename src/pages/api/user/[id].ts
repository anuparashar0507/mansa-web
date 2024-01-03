import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";
// import prisma from "../../../lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });
  // Check if the user is authenticated and has admin role
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { params } = req.query;
  console.log("params:", params);
  const userId = params;
  try {
    const user: unknown = await prisma.user.findMany({
      where: {
        id: userId as string,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
