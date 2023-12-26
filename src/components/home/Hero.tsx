import Image from "next/image";
import React from "react";
import Link from "next/link";
import family from "../../../public/Images/family.jpg";
import one from "../../../public/Images/ten.jpeg";
import audi from "../../../public/Images/audi.jpg";
import nine from "../../../public/Images/three.jpg";
import five from "../../../public/Images/jnv-meet.jpg";
import seven from "../../../public/Images/seven.jpg";
import six from "../../../public/Images/six.jpg";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50">
      <div className="pb-20 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl flex-row px-4 sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We are{" "}
              <span className="bg-gradient-to-r from-blue-800 via-pink-400 to-purple-600 bg-clip-text font-extrabold tracking-tight text-transparent sm:text-6xl">
                Navodayans.
              </span>
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              We are{" "}
              <span className="bg-gradient-to-r from-blue-800 via-pink-400 to-purple-600 bg-clip-text font-extrabold tracking-tight text-transparent sm:text-6xl">
                Family.
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We represents the spirit of Navodaya across generations,
              contributing to education and community welfare.
            </p>
            <Link
              href="#about"
              className="bg-brand mt-12 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white hover:bg-opacity-90"
            >
              Know More
            </Link>
          </div>
          <div>
            <div className="mt-10 flex justify-center">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none w-max lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="w-full sm:absolute sm:left-1/2 sm:top-0 sm:translate-x-8 sm:transform lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-2 sm:space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48 sm:opacity-0 lg:opacity-100">
                        <Image
                          src={seven}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={nine}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={one}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={family}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={six}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={audi}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="h-32 w-24 overflow-hidden rounded-lg sm:h-64 sm:w-48">
                        <Image
                          src={five}
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
