import React from "react";

const Features = () => {
  return (
    <section className="relative mt-40 bg-gray-200 py-10 pb-20">
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
            className="fill-current text-gray-200"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center py-8 text-center">
        <div className="w-full px-12 md:w-6/12 md:px-4">
          <h2 className="text-4xl font-semibold">Why Use FAVR?</h2>
          <p className="mb-4 mt-4 text-lg leading-relaxed text-gray-600">
            Learn all the reasons why you should be using FAVR
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="my-0 mr-auto w-full px-4 md:w-4/12 md:pt-0">
            {/* <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_vrtIsn.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%;"
              loop
              autoplay
            ></lottie-player> */}
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Rocket Speed Service</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Request a job and have your service done in a matter of hours
                and not days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row-reverse">
          <div className="my-0 mr-auto w-full px-4 md:w-4/12 md:pt-0">
            {/* <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_ZXBZ0q.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%;"
              loop
              autoplay
            ></lottie-player> */}
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Increased Productivity</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                With chores out of your way, you can now focus on the important
                things such as work, family or just being able to relax.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="my-0 mr-auto w-full px-4 md:w-4/12 md:pt-0">
            {/* <lottie-player
              src="https://assets5.lottiefiles.com/datafiles/Nggyholrjfk0tbh/data.json"
              background="transparent"
              speed="1"
              style="width: 100%; height: 100%;"
              loop
              autoplay
            ></lottie-player> */}
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-4">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-red-600 shadow-lg">
                <i className="fas fa-dollar-sign text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Ultimate Pricing</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                We flip the script and allow you to set price of your requested
                job. Unlike other platforms like Takl that have preset prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
