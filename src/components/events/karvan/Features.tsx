import React from "react";
import friendship from "../../../../public/Images/friendship.gif"
import campfire from "../../../../public/Images/campfire.gif"
import music from "../../../../public/Images/music.gif"
import yogaIcon from "../../../../public/Images/yoga.gif"
import society from "../../../../public/Images/society.gif"
import path from "../../../../public/Images/path.gif"
import meetup from "../../../../public/Images/path.png"
import campfireimg from "../../../../public/Images/campfireimg.png"
import musicnight from "../../../../public/Images/musicnight.png"
import yoga from "../../../../public/Images/yoga.png"
import discussion from "../../../../public/Images/discussion.png"
import panel from "../../../../public/Images/panel.png"

import Image from "next/image";

const Features = () => {
  return (
    <section className="py-10 pb-16 relative isolate w-full overflow-hidden">
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
      <div className="translate-z-0 absolute bottom-auto left-0 right-0 top-0 -mt-20 h-24 w-full transform">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-[#FDF8FD]"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center py-8 text-center">
        <div className="w-full px-12 md:w-6/12 md:px-4">
          <h2 className="text-4xl font-semibold">Karvan - Event Highlights</h2>
          <p className="mb-4 mt-4 text-lg leading-relaxed text-gray-600">
          The Grand National Navodayan Meet - 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full bg-transparent"
              height={800}
              width={800}
              src={meetup}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={friendship}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Milap (An Evening of Emotions)</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Reminisce about your time at Navodaya and reconnect with old friends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row-reverse">
       <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full"
              height={800}
              width={800}
              src={campfireimg}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={campfire}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Campfire</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
             Enjoy a campfire under the stars with your fellow Navodayans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full"
              height={800}
              width={800}
              src={musicnight}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={music}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Musical night</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Sing and dance along to your favorite music at a musical night.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row-reverse">
        <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full"
              height={800}
              width={800}
              src={yoga}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={yogaIcon}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Yogathan (Yoga, marathon)</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Start your day with a healthy dose of yoga and a refreshing marathon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row">
        <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full"
              height={800}
              width={800}
              src={discussion}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={society}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Manthan (Panel discussion)</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Learn from experts on a variety of topics, including education, career development, and social issues.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col-reverse items-center md:flex-row-reverse">
        <div className="my-0 mx-auto w-full px-4 md:w-4/12 md:pt-0">
          <Image
              className="w-full"
              height={800}
              width={800}
              src={panel}
              alt=""
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
                {/* <i className="fas fa-chart-line text-xl"></i> */}
              <Image
              className="rounded-full"
              height={300}
              width={300}
              src={path}
              alt=""
            />
              </div>
              <h3 className="text-3xl font-semibold">Sahyog (Career guidance)</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Get valuable career advice from experienced Navodayans.
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Features;
