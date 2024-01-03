import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
// import { authOptions } from "~/server/auth";
// import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { type FormEvent, useState } from "react";
export default function LogIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = useState({ email: "", password: "" });
  // const session = getSession();
  // console.log("session", session);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    // const res = fetch("/api/auth/callback/credentials", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: creds.email,
    //     password: creds.password,
    //   }),
    // });
    await signIn("credentials", {
      email: creds.email,
      password: creds.password,
      callbackUrl: "/dashboard",
    });
    // .res.then(async () => {
    //   await router.push("/dashboard");
    //   setLoading(false);
    // })
    // .catch((error) => {
    //   console.error("Failed to sign in:", error);
    // });
  };

  // if (loading) {
  //   // Render a loading state if the session is still being fetched
  //   return <div>Loading...</div>;
  // }

  // const redirectToDashboard = async () => {
  //   // If the user is already signed in, redirect to the dashboard
  //   await router.push("/dashboard");
  //   return null;
  // };

  //   useEffect(() => {
  //     // if csrfToken is available, redirect to dashboard
  //   if (csrfToken) {
  //     redirectToDashboard();
  //   }
  //   });
  return (
    <div className="flex h-full p-24 w-full items-center justify-center">
      <form
        // method="post"
        // action="/api/auth/callback/credentials"
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
