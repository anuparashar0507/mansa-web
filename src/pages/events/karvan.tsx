import React from "react";
import Features from "~/components/events/karvan/Features";
import Event from "~/components/home/Event";
import Hero from "~/components/events/karvan/Hero";
const Karvan = () => {
  return (
    <>
      <Hero count={10} />
      <div className="mx-auto my-auto flex w-max flex-col px-8 py-4">
          <dt className="text-center text-xl leading-7 text-gray-300">
            Number of Navodayans coming
          </dt>
          <dd className="my-8 text-center text-7xl font-bold leading-9 tracking-tight text-white">
            1250
            {/* <span className="text-xl font-normal leading-7 text-gray-300"></span> */}
          </dd>
          <dt className="text-center text-xl leading-7 text-gray-300">
            & counting.. Are you coming!
          </dt>
        </div>
      <Features />
      <div className="w-full flex justify-center bg-slate-100 items-center py-4">
      <iframe
          className="grayscale-1 m-0  w-full max-w-7xl scroll-m-0 border-none opacity-70 contrast-125"
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1833.8897323192164!2d77.4274725!3d23.1782478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439eedfd261d%3A0xbda480b4e82fe8d7!2sLNCT%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1702208165099!5m2!1sen!2sin&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          width="600"
          height="450"
          loading="lazy"
        />
        </div>
    </>
  );
};

export default Karvan;
