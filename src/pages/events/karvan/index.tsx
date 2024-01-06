import React from "react";
import { SEO } from "~/components/SEO";
import { useEffect, useState } from "react";
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
const Karvan: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const diff = targetDate.getTime() - now.getTime();
  //     // Calculate the remaining time in seconds
  //     const secondsRemaining = Math.floor(diff / 1000);
  //     // Calculate days, hours, minutes, and seconds
  //     const days = Math.floor(secondsRemaining / (3600 * 24));
  //     const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
  //     const minutes = Math.floor((secondsRemaining % 3600) / 60);
  //     const seconds = Math.floor(secondsRemaining % 60);

  //     setTimeLeft({ days, hours, minutes, seconds });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <SEO
        title={"Karvan-2024 by MANSA"}
        description="The Grand National Navodayan Meet - Bhopal"
      />
      <Hero
        days={timeLeft.days}
        hours={timeLeft.hours}
        minutes={timeLeft.minutes}
        seconds={timeLeft.seconds}
        // members={members}
        // setSearchText={setSearchText}
        // searchText={searchText}
      />
      <Features />
      <EventContact />
    </>
  );
};

export default Karvan;
