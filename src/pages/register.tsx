import { SEO } from "~/components/SEO";
import RegisterationForm from "~/components/forms/RegisterationForm";
export default function Register() {
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
