import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { compare } from "bcryptjs";
import { db } from "~/server/db";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      email: string;
      name: string;
      jnv: string;
      // ...other properties
      // role: UserRole;
    };
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Login",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user: {
          email: string;
          id: string;
          password: string;
          name: string;
          jnv: string;
          // passoutYear: number;
          // role: string;
          // gender: string;
          // age: string;
          // state: string;
          // district: string;
          // occupation: string;
          // currentLocation: string;
          // phone: string;
          // createdAt: Date;
          // updatedAt: Date;
        } = (await db?.user?.findUnique({
          where: { email: credentials?.email },
        }))!;

        if (
          user &&
          credentials &&
          (await compare(credentials.password, user?.password))
        ) {
          return {
            id: user?.id,
            email: user?.email,
            jnv: user?.jnv,
            name: user?.name,
          };
          // return { ...user };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token, user }) => {
      console.log("Session Callback", { session, token, user });

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          email: token?.email,
          jnv: token?.jnv,
          name: token?.name,
        },
      };
    },
    jwt: async ({ token, user, account }) => {
      console.log("JWT Callback", { token, user, account });

      if (account) {
        return {
          ...token,
          id: user?.id,
        };
      }
      return token;
    },
  },

  adapter: PrismaAdapter(db),

  pages: {
    signIn: "/login",
  },
  theme: {
    colorScheme: "light",
    brandColor: "#000000",
    logo: "/MANSALogo.png",
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
