// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient, type User } from "@prisma/client";
// import { compare } from "bcryptjs";
// import { signIn } from "next-auth/react";
// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ message: string }>,
// ): Promise<void> {
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { email, password }: { email: string; password: string } = req.body;

//   try {
//     const user: User | null = await prisma.user.findUnique({
//       where: { email },
//     });
//     console.log("USER :", user);
//     if (!user) {
//       res.status(401).json({ message: "Invalid email or password" });
//       return;
//     }

//     const passwordMatch = await compare(password, user.password);
//     console.log("passwordMatch :", passwordMatch);
//     console.log("password :", password);
//     console.log("user.password :", user.password);
//     if (!passwordMatch) {
//       res.status(401).json({ message: "Invalid email or password" });
//       return;
//     }

//     const session = await signIn("credentials", {
//       redirect: true,
//       email,
//       password,
//     });

//     if (!session) {
//       res.status(500).json({ message: "Failed to create session" });
//       return;
//     }

//     res.status(200).json({ message: "User logged in successfully" });
//   } catch (error) {
//     console.error("Error logging in user:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }
