// pages/index.tsx
import { useEffect,useState } from "react";
import { SEO } from "~/components/SEO";
import Hero from "~/components/home/Hero";
import About from "~/components/home/About";
import Stats from "~/components/home/Stats";
import Event from "~/components/home/Event";
import Contact from "~/components/home/Contact";


export default function Home() {
  // const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
   async function fetchData() {
  try {
    const res = await fetch('/api/fetchSheet');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await res.json();
    if (data) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setCount(data.count);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
    void fetchData();
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
        <Event count={count} />
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
