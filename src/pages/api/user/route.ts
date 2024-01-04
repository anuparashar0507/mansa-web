import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

interface UserWithoutPassword {
  id: string;
  email: string;
  jnv: string;
  name: string;
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
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log("req:", req);
    const session = await getSession({ req });

    if (!session?.user?.email) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const users: UserWithoutPassword[] = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        jnv: true,
        name: true,
        passoutYear: true,
        role: true,
        gender: true,
        age: true,
        state: true,
        district: true,
        occupation: true,
        currentLocation: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!users) {
      return res.status(404).json({ error: "No Users Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Dashboard Error", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client
  }
}

// import { type NextApiRequest, type NextApiResponse } from "next";
// import { getSession } from "next-auth/react";
// // import prisma from "../../../lib/prisma";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const session = await getSession({ req });
//   console.log("session at user route:", session);
//   // Check if the user is authenticated
//   if (!session?.user?.email) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   try {
//     const users: {
//       email: string;
//       id: string;
//       password: string;
//       name: string;
//       jnv: string;
//       passoutYear: number;
//       role: string;
//       gender: string;
//       age: string;
//       state: string;
//       district: string;
//       occupation: string;
//       currentLocation: string;
//       phone: string;
//       createdAt: Date;
//       updatedAt: Date;
//     }[] = await prisma.user?.findMany();
//     console.log("users in route", users);
//     if (!users) {
//       return res.status(500).json({ error: "No Users Found" });
//     }
//     const finalUsers = users.map((user) => {
//       return {
//         id: user?.id,
//         email: user?.email,
//         jnv: user?.jnv,
//         name: user?.name,
//         passoutYear: user?.passoutYear,
//         role: user?.role,
//         gender: user?.gender,
//         age: user?.age,
//         state: user?.state,
//         district: user?.district,
//         occupation: user?.occupation,
//         currentLocation: user?.currentLocation,
//         phone: user?.phone,
//         createdAt: user?.createdAt,
//         updatedAt: user?.updatedAt,
//       };
//     });
//     return res.status(200).json(finalUsers);
//   } catch (error) {
//     console.error("Dashboard ERror", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
