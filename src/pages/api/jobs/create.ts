import { type NextApiRequest, type NextApiResponse } from "next";
import { PrismaClient, type Job } from "@prisma/client";
// import { getSession, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
const prisma = new PrismaClient();
const secret = process.env.NEXTAUTH_SECRET;
/**
 * Registers a new user.
 *
 * @param req The Next.js API request object
 * @param res The Next.js API response object
 * @returns A JSON response with a success message or an error message
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const token = await getToken({ req, secret });
  // Check if the user is authenticated and has admin role
  // const { data: session } = useSession({ required: true });
  // console.log("session at create job:", token);
  if (!token) {
    return res.status(401).json({ error: "User not authenticated" });
  }
  // if (!session?.user) {
  //   return res.status(401).json({ error: "User not authenticated" });
  // }

  const {
    companyName,
    jobTitle,
    jobDescription,
    jobLink,
    jobSector,
    industry,
    location,
    minSalary,
    maxSalary,
    workMode,
    assistType,
    email,
    linkedin,
    facebook,
    instagram,
    twitter,
    minExperience,
    maxExperience,
  } = req.body as Job;

  try {
    if (token.sub && token.name) {
      const newJob = await prisma.job.create({
        data: {
          companyName,
          jobTitle,
          jobDescription,
          jobLink,
          jobSector,
          industry,
          location,
          workMode,
          assistType,
          email,
          linkedin,
          facebook,
          instagram,
          twitter,
          minExperience,
          maxExperience,
          minSalary,
          maxSalary,
          userId: token.sub,
          postedBy: token.name,
          // add user name from user relation here
        },
      });
      console.log("newJob:", newJob);
      res.status(201).json({ message: "Job published successfully" });
    }
    console.log("token:", token.sub, token.name);
  } catch (error) {
    console.error("Error creating job:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
