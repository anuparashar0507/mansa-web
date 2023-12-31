import { useEffect } from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn, getSession } from "next-auth/react";
import { SEO } from "~/components/SEO";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { type FormEvent, useState } from "react";
import Link from "next/link";
export default function LogIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <>
      <SEO
        title={"Register - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <main className="flex min-h-full md:py-6 py-2 w-full items-center justify-center">
        <div className="card bg-base-100 py-10 px-4 w-full max-w-xl justify-center">
          <form
            className="flex flex-col max-w-6xl gap-4 w-full"
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
              {/* <input
                name="password"
                type="password"
                placeholder="*********"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setCreds({ ...creds, password: e.target.value })
                }
              /> */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*********"
                  autoComplete="password"
                  className=" input input-bordered block w-full py-1.5 pr-20"
                  onChange={(e) =>
                    setCreds({ ...creds, password: e.target.value })
                  }
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div
                    className="h-full flex items-center bg-transparent py-0 pl-2 pr-4 text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </div>
                </div>
              </div>
            </label>
            <button
              className="btn btn-primary bg-brand hover:bg-sky-700"
              type="submit"
              disabled={loading}
            >
              {loading && <span className="loading loading-spinner"></span>}
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
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
