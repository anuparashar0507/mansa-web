import React from "react";

const stats = [
  { id: 1, name: "of establishment", value: "38 years" },
  { id: 2, name: "in 638 District in country", value: "660+ Schools" },
  { id: 3, name: "Currently studying in JNV’s", value: "2.5lac+ Students" },
  { id: 3, name: "Present all over the globe", value: "12lac+ Alumni" },
];

const Stats: React.FC = () => {
  return (
    <div className="sm:py-18 w-full bg-slate-50 py-20">
      {/* <div className="mx-auto mb-auto mt-auto flex flex-col content-start"> */}
      <div className="mx-auto flex max-w-7xl flex-col justify-center px-6 lg:px-8">
        <h2 className="text-brand text-center text-base font-semibold leading-7">
          About Navodaya & Navodayan’s
        </h2>
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our reach
        </p>
        <dl className="mt-12 grid grid-cols-1 justify-between gap-y-16 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
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
