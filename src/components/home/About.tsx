// import {
//   CloudArrowUpIcon,
//   LockClosedIcon,
//   ServerIcon,
// } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import mansaLogo from "../../../public/MANSALogo.png";
// const features = [
//   {
//     name: "Push to deploy.",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: "SSL certificates.",
//     description:
//       "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Database backups.",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: ServerIcon,
//   },
// ];

const About: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white sm:pb-12 sm:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-brand text-base font-semibold leading-7">
                MANSA : United for Navodayans
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Us
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to MANSA, the vibrant heart of Jawahar Navodaya
                Vidyalaya alumni & students in Madhya Bharat. As a dynamic and
                united community, MANSA represents the spirit of Navodaya across
                generations, contributing to education and community welfare.
                Beyond an alumni organization, MANSA is a network where shared
                experiences, achievements, and a commitment to positive impact
                converge. We are celebrating the Navodaya spirit and shaping a
                collective legacy of excellence and camaraderie. This is MANSA -
                where memories thrive, connections endure, and the Navodaya
                spirit lives on.
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <Image
            src={mansaLogo}
            alt="Product screenshot"
            className="w-[20rem] max-w-none rounded-xl ring-1 ring-blue-400/10 sm:w-[42rem] "
            width={1442}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};
export default About;
