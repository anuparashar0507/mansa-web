import { type NextApiRequest, type NextApiResponse } from "next";
import { PrismaClient, type User } from "@prisma/client";
// import { db } from "~/server/db";
import { hash } from "bcryptjs";
// import { getSession } from "next-auth/client";
import { getSession } from "next-auth/react";
const prisma = new PrismaClient();

/**
 * Registers a new user.
 *
 * @param req The Next.js API request object
 * @param res The Next.js API response object
 * @returns A JSON response with a success message or an error message
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const session = await getSession({ req });
  if (session) {
    res.status(403).json({ message: "User already authenticated" });
    return;
  }

  const {
    name,
    email,
    password,
    phone,
    gender,
    age,
    state,
    district,
    jnv,
    passoutYear,
    occupation,
    currentLocation,
  } = req.body as User;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(409).json({ message: "Email is already registered" });
      return;
    }

    const hashedPassword: string = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        phone,
        gender,
        age,
        state,
        district,
        jnv,
        passoutYear: passoutYear,
        occupation,
        currentLocation,
      },
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
