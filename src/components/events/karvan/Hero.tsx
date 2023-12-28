import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import bgImg from "../../../../public/Images/party-group.jpg";
import { TimerContainer } from "../TimeContainer";
import MemberCard from "~/components/events/karvan/MembersCard";
import { type User } from "~/types/user.type";
// import { randomUUID } from "crypto";
// const links = [
//   // { name: "Know More", href: "#" },
//   { name: "Register Here", href: "https://forms.gle/YQd8Txf9pHmoJdjv8" },
// ];
// const stats = [
//   { name: "", value: "COME" },
//   { name: "", value: "CONNECT" },
//   { name: "", value: "CELEBRATE" },
// { name: "Paid time off", value: "Unlimited" },
// ];

type countProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  members: User[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};
const Hero: React.FC<countProps> = ({
  days,
  hours,
  minutes,
  seconds,
  members,
  setSearchText,
  searchText,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [filteredMembers, setFilteredMembers] = useState<User[]>(members);
  useEffect(() => {
    if (searchText.length > 0) {
      const filterMember = members.filter((member) =>
        member.Name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredMembers(filterMember);
    } else {
      setFilteredMembers(members);
    }
    return () => setFilteredMembers(members);
  }, [searchText, members]);

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
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        <div>
          <div className="mx-auto max-w-7xl lg:mx-0">
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
              The Madhya-Bharat Association of Navodayan Students & Alumni
              (MANSA) is proud to present the National Navodayan Meet 2024, a
              two-day event that will bring together Navodayans from all over
              India to celebrate our shared heritage and culture.
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
          <div className="mx-auto mt-10 max-w-7xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex mb-12 lg:gap-x-10">
              {/* {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-max rounded-xl px-3 py-2 text-white ring-2 ring-inset ring-pink-50"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))} */}
              {/* <div className="h-36 w-full py-8 bg-slate-100 flex flex-col  items-center"> */}
              {/* <h1 className="text-lg">Check Who is Comming</h1> */}
              <button
                className="btn btn-outline btn-accent font-semibold text-lg"
                onClick={() => modalRef.current?.showModal()}
              >
                Check Who is Comming
              </button>
              <dialog id="my_modal_4" className="modal" ref={modalRef}>
                <div className="modal-box w-11/12 min-w-[98%] h-full p-0 ">
                  <div className="sticky z-50 bg-gray-100 top-0 h-min-content flex flex-col gap-1 px-4 py-2">
                    <div className="grid md:grid-cols-3 grid-cols-2 items-center">
                      <h1 className="md:text-lg hidden md:block sm: text-brand">
                        All Members Registered
                      </h1>
                      <form className="form-control">
                        <input
                          type="text"
                          placeholder="Search Name here"
                          className="input input-bordered input-info w-full min-w-max text-slate-700"
                          onChange={(e) => setSearchText(e.target.value)}
                          value={searchText}
                        />
                      </form>
                      <form method="dialog" className="flex justify-end">
                        <button className="btn btn-sm btn-circle text-brand text-lg btn-ghost">
                          ✕
                        </button>
                      </form>
                    </div>
                    <div className="md:text-lg font-semibold text-brand flex justify-center">
                      Total Members Registered : {members.length}
                    </div>
                    {searchText.length > 0 ? (
                      <div className="text-lg font-semibold text-brand flex justify-center">
                        Found Results : {filteredMembers.length}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="font-light text-brand flex justify-center border rounded-full mx-4 p-3 border-warning-content">
                      <q className="md:text-lg text-brand text-center text-xs">
                        <b className="font-bold">NOTE:</b> If you haven't found
                        your registration number, please feel free to contact us{" "}
                        <b className=" text-green-700 font-semibold">
                          {" "}
                          via whatsapp on: 7805058023
                        </b>{" "}
                        - T-shirt distribution will be based on your
                        registration number.
                      </q>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 modal-scroll p-4">
                    {filteredMembers.length > 0 ? (
                      filteredMembers.map((member, index) => {
                        return (
                          <MemberCard
                            key={index}
                            name={member.Name}
                            registrationNumber={member["Registration No."]}
                            school={member["JNV Name"]}
                            batchYear={member["Batch Passout"]}
                          />
                        );
                      })
                    ) : (
                      <h1 className="text-lg"> No Member Found</h1>
                    )}
                  </div>
                </div>
              </dialog>
              {/* </div> */}
            </div>
          </div>
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
