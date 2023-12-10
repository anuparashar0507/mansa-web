import Image from "next/image";
import React from "react";
import Link from "next/link";
import bgImg from "../../../public/Images/party-group.jpg";

const links = [
  { name: "Know More", href: "#" },
  { name: "Register Here", href: "#" },
];
// const stats = [
//   { name: "Offices worldwide", value: "12" },
//   { name: "Full-time colleagues", value: "300+" },
//   { name: "Hours per week", value: "40" },
//   { name: "Paid time off", value: "Unlimited" },
// ];
// type countProps ={
//   count
// }
const Event: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="relative isolate w-full overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={bgImg}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-5 md:object-center"
        width={500}
        height={500}
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="via-brand aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap gap-12 px-6 lg:px-8">
        <div>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8 flex w-max">
              <div className="w-max rounded-full px-3 py-1 text-lg font-bold tracking-tight text-white ring-2 ring-inset ring-pink-500">
                Event Alert
              </div>
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Karvan-2024, Bhopal
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Madhya-Bharat Association of Navodayan Students & Alumni Cordially
              Invites You to The Grand National Navodayan Meet - Bhopal
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Date: 6th & 7th January 2024
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Venue: LNCT University Campus, Kolar Road, Bhopal(M.P.){" "}
              <Link
                href={"https://maps.app.goo.gl/cmkvHg6N6fE5ULHm7"}
                target="_blank"
              >
                <span className="ml-3 text-yellow-500 underline underline-offset-4">
                  Locate Here
                </span>
              </Link>
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-max rounded-xl px-3 py-2 text-white ring-2 ring-inset ring-pink-50"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>
        <div className="mx-auto my-auto flex w-max flex-col px-8 py-4">
          <dt className="text-center text-xl leading-7 text-gray-300">
            Number of Navodayans coming
          </dt>
          <dd className="my-8 text-center text-7xl font-bold leading-9 tracking-tight text-white">
            1250+ {count}
            {/* <span className="text-xl font-normal leading-7 text-gray-300"></span> */}
          </dd>
          <dt className="text-center text-xl leading-7 text-gray-300">
            & counting.. Are you coming!
          </dt>
        </div>
      </div>
    </div>
  );
};
export default Event;
