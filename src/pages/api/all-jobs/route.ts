import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";
// import prisma from "../../../lib/prisma";
import { PrismaClient, type Job } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  // Check if the job is authenticated and has admin role
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const jobs: Job[] = await prisma.job.findMany({
      // where the date created is not less then 60 days ago
      where: {
        createdAt: {
          gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
