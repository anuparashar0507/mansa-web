import Head from "next/head";
import { SEO } from "~/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title={"About Us - MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
