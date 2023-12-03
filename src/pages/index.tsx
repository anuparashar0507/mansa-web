import Head from "next/head";
// import Link from "next/link";
import Hero from "~/components/home//Hero";
import About from "~/components/home//About";
import Stats from "~/components/home//Stats";
import Event from "~/components/home//Event";
// import CTA from "~/components/home//CTA";
import Contact from "~/components/home//Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to MANSA</title>
        <meta
          name="description"
          content="Madhya Bharat Association of Students and Alumni"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <About />
        <Stats />
        <Event />
        {/* <CTA /> */}
        <Contact />
      </main>
    </>
  );
}

// bg-gradient-to-b from-[#2e026d] to-[#15162c]
