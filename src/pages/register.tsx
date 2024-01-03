import { useEffect } from "react";
import { SEO } from "~/components/SEO";
import RegisterationForm from "~/components/forms/RegisterationForm";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    const redirectToDashboard = async () => {
      const session = await getSession();
      // If the user is already signed in, redirect to the dashboard
      if (session) {
        await router.push("/dashboard");
      }
    };
    void redirectToDashboard();
  }, [router]);
  return (
    <>
      <SEO
        title={"Register - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <main className="flex min-h-full md:py-6 py-2 items-center justify-center">
        <RegisterationForm />
      </main>
    </>
  );
}
