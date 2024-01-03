import { useEffect } from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
// import { authOptions } from "~/server/auth";
// import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";

import { type FormEvent, useState } from "react";
import Link from "next/link";
export default function LogIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = useState({ email: "", password: "" });
  // const { data: session } = useSession();
  // console.log("session", session);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await signIn("credentials", {
      email: creds.email,
      password: creds.password,
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  };

  // if (loading) {
  //   // Render a loading state if the session is still being fetched
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    setLoading(true);

    const redirectToDashboard = async () => {
      const session = await getSession();
      // If the user is already signed in, redirect to the dashboard
      if (session) {
        await router.push("/dashboard");
      }
    };
    void redirectToDashboard();
    setLoading(false);
  }, [router]);
  return (
    <div className="flex h-full p-24 w-full items-center justify-center">
      <form
        className="flex flex-col max-w-xl gap-4 w-full"
        onSubmit={(e) => handleSignIn(e)}
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="user@email.com"
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="*********"
            className="input input-bordered w-full"
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
        </label>
        <button
          className="btn btn-primary bg-brand hover:bg-sky-700"
          type="submit"
          disabled={loading}
        >
          Sign in
        </button>
        <div className="flex gap-2">
          Not registered yet?
          <Link href="/register" className=" underline text-sky-800">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
