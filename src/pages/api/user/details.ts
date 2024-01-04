// // pages/api/auth/[...nextauth].ts
// import { type NextApiRequest, type NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
// // import prisma from "../../../lib/prisma";
// import { PrismaClient, type User } from "@prisma/client";
// // imp;
// const prisma = new PrismaClient();
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method !== "POST") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }
//   const session = await getSession({ req });
//   // Check if the user is authenticated and has admin role
//   if (!session) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   const userDetails: User = (await getUserDetails(user.id)) as User;
//   session.user = { ...session.user, ...userDetails };
//   //   const userId = params;
//   try {
//     const user: unknown = await prisma.user.findMany({
//       where: {
//         id: userId as string,
//       },
//     });
//     return res.status(200).json(user);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
