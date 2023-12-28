import React from "react";
import { SEO } from "~/components/SEO";
import { useEffect, useState, useRef } from "react";
import Features from "~/components/events/karvan/Features";
import EventContact from "~/components/events/EventContact";
import Hero from "~/components/events/karvan/Hero";
import { type User } from "~/types/user.type";
const targetDate = new Date("2024-01-06T12:00:00"); // Replace with your desired date
type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// type SheetApiResponse = {
//   count: number;
//   users: User[];
// };
const Karvan: React.FC = () => {
  const [members, setMembers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/fetchSheet");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await res.json();
        if (res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          setMembers(data?.users);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      // Calculate the remaining time in seconds
      const secondsRemaining = Math.floor(diff / 1000);

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(secondsRemaining / (3600 * 24));
      const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsRemaining % 3600) / 60);
      const seconds = Math.floor(secondsRemaining % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <SEO
        title={"Karvan-2024 by MANSA"}
        description="The Grand National Navodayan Meet - Bhopal"
      />
      <Hero
        // count={10}
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
        members={members}
        setSearchText={setSearchText}
        searchText={searchText}
      />

      {/* <div className="mx-auto my-auto flex w-max flex-col px-8 py-4">
          <dt className="text-center text-xl leading-7 text-gray-300">
            Number of Navodayans coming
          </dt>
          <dd className="my-8 text-center text-7xl font-bold leading-9 tracking-tight text-white">
            1250
            <span className="text-xl font-normal leading-7 text-gray-300"></span>
          </dd>
          <dt className="text-center text-xl leading-7 text-gray-300">
            & counting.. Are you coming!
          </dt>
        </div> */}
      <Features />
      <EventContact />
    </>
  );
};

export default Karvan;
