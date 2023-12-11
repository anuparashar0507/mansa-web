import { GetServerSideProps } from 'next';
import { useEffect, useState } from "react";
import { SEO } from "~/components/SEO";
import Hero from "~/components/home/Hero";
import About from "~/components/home/About";
import Stats from "~/components/home/Stats";
import Event from "~/components/home/Event";
import Contact from "~/components/home/Contact";

interface HomeProps {
  data: {
    count: number;
    users: []
  };
}

export default function Home({ data }: HomeProps) {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(data?.count);
  //   console.log("DATAAA ::: ", data)
  // }, []);

  return (
    <>
      <SEO
        title={"Welcome to MANSA"}
        description="Madhya Bharat Association of Students and Alumni"
      />

      <main className="flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <About />
        <Stats />
        <Event count={data ?? data.count} />
        <Contact />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('/api/fetchData');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
