import React, { useEffect } from "react";
import wordcloud from "../../../public/Images/wordcloud.png";
import Image from "next/image";
const stats = [
  { id: 1, name: "of establishment", value: "38 years" },
  { id: 2, name: "in 638 District in country", value: "660+ Schools" },
  { id: 3, name: "Currently studying in JNV’s", value: "2.5lac+ Students" },
  { id: 4, name: "Present all over the globe", value: "12lac+ Alumni" },
];

const Stats: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const isMobile = window.innerWidth <= 600;
        const isTables = window.innerWidth > 600 && window.innerWidth <= 1020;
        const speed = parseFloat(
          element.getAttribute("data-speed") ??
            (isMobile ? "0.1" : isTables ? "0.3" : "0.5"),
        );
        const yPos = -scrollValue * speed;

        // Type casting to HTMLElement to access the style property
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative isolate overflow-hidden sm:py-18 w-full bg-slate-100 py-12 md:py-32">
      <div className="parallax absolute inset-0 -z-10 h-full w-full  opacity-5 md:object-center">
        <Image
          src={wordcloud}
          alt=""
          className="h-[140%] md:h-max  md:w-full"
          width={1000}
          height={"1600"}
        />
      </div>
      {/* <div className="mx-auto mb-auto mt-auto flex flex-col content-start"> */}
      <div className="mx-auto flex max-w-7xl flex-col justify-center px-6 lg:px-8">
        <h2 className="text-brand text-center text-base font-semibold leading-7">
          About Navodaya & Navodayan’s
        </h2>
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our reach
        </p>
        <dl className=" md:mt-12 mt-8 grid grid-cols-1 justify-between md:gap-y-16 gap-y-6 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    // </div>
  );
};
export default Stats;
