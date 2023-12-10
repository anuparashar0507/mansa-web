// pages/index.tsx
import { useEffect } from "react";
import { SEO } from "~/components/SEO";
import Hero from "~/components/home/Hero";
import About from "~/components/home/About";
import Stats from "~/components/home/Stats";
import Event from "~/components/home/Event";
import Contact from "~/components/home/Contact";

// interface HomeProps {
//   sheetdata: number;
// }
// interface ApiResponse {
//   count: number;
//   // Add other properties if your API response has more fields
// }

export default function Home() {
  // const { count } = sheetdata; // Extract the count property
  let res2;
  useEffect(() => {
    res2 = fetch("/api/sheet").then((res) => res.json());
    console.log(res2);
  }, []);
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
        <Event />
        <Contact />
      </main>
    </>
  );
}

// export async function getServerSideProps(): Promise<{ props: HomeProps }> {
//   try {
//     const req = await fetch("http://localhost:3000/api/sheet");
//     const res = (await req.json()) as ApiResponse; // Type assertion here
//     // console.log("Responseee : ", res);
//     if (res) {
//       return {
//         props: {
//           sheetdata: res.count,
//         },
//       };
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

//   return {
//     props: {
//       sheetdata: 4,
//     },
//   };
// }
