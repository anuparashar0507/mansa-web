import Head from "next/head";
import Link from "next/link";

export default function Events() {
  return (
    <>
      <Head>
        <title>All Events - MANSA</title>
        <meta name="description" content="All Events - MANSA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
