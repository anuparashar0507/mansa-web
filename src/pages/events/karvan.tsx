import React from "react";
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Features from "~/components/events/karvan/Features";
import EventContact from "~/components/events/EventContact";
import Hero from "~/components/events/karvan/Hero";
const targetDate = new Date("2024-01-06T12:00:00"); // Replace with your desired date
interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Karvan = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      <Hero count={10} days={timeLeft.days} hours={timeLeft.hours}  minutes={timeLeft.minutes} seconds={timeLeft.seconds} />
     
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
