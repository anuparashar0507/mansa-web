import { SEO } from "~/components/SEO";
import AboutUs from "~/components/home/About";
import Stats from "~/components/home/Stats";
export default function About() {
  return (
    <>
      <SEO
        title={"About Us - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <AboutUs />
        <Stats />
      </main>
    </>
  );
}
