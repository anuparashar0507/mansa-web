import React from "react";
import { useEffect, useState, useMemo, useCallback } from "react";
import MemberCard from "~/components/events/karvan/MembersCard";
import Loader from "~/components/ui/Loader";
import { type User } from "~/types/user.type";
import { SEO } from "~/components/SEO";
const Registered: React.FC = () => {
  const [members, setMembers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  // const [filteredMembers, setFilteredMembers] = useState<User[]>(members);
  // useEffect(() => {
  //   if (searchText.trim().length > 0) {
  //     const filterMember = members.filter((member) =>
  //       member.Name.toLowerCase().includes(searchText.toLowerCase()),
  //     );
  //     setFilteredMembers(filterMember);
  //   } else {
  //     setFilteredMembers(members);
  //   }
  //   return () => setFilteredMembers(members);
  // }, [searchText, members]);

  const filteredMembers = useMemo(() => {
    if (searchText.trim().length > 0) {
      return members.filter((member) =>
        member.Name.toLowerCase().includes(searchText.toLowerCase()),
      );
    } else {
      return members;
    }
  }, [searchText, members]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await fetch("/api/fetchSheet");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await res.json();
        if (res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          setMembers(data?.users);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    void fetchData();
  }, []);

  const handleSearchTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = event.target.value;
      setSearchText(searchText);
    },
    [],
  );
  return (
    <>
      <SEO
        title={"Check Your Registration Number - MANSA"}
        description="List of all registered members coming for Karvan-2023, Check your registration number."
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="w-full max-w-7xl mx-auto">
          {loading ? (
            <Loader />
          ) : (
            <div className="w-full flex flex-col items-center justify-start p-0 md:p-6 gap-4 md:gap-8">
              <div className="font-light text-brand bg-orange-50 flex justify-center  rounded-md mx-4 p-3">
                <q className="text-sm text-center">
                  <b className="font-bold text-sm md:text-md">NOTE:</b> If you
                  haven't found your registration number, please feel free to
                  contact us{" "}
                  <b className=" text-green-700 font-semibold text-sm md:text-md">
                    {" "}
                    via whatsapp on: 7805058023
                  </b>{" "}
                  - T-shirt distribution will be based on your registration
                  number.
                </q>
              </div>
              <div className="sticky z-40 top-[72px] md:top-[86px] grid grid-cols-1 md:grid-cols-2 w-full gap-1 px-4 bg-gray-50 items-center justify-between py-2 shadow-sm">
                <div className="flex items-center justify-between w-full">
                  {!(searchText.length > 0) && (
                    <div className="text-lg font-medium text-brand flex justify-center">
                      Total Members Registered :{" "}
                      <span className="md:text-lg md:font-medium font-medium px-4">
                        {" "}
                        {members.length}{" "}
                      </span>
                    </div>
                  )}
                  {searchText.length > 0 && (
                    <div className="text-lg font-medium text-brand flex justify-center">
                      Found Results : {filteredMembers.length}
                    </div>
                  )}
                </div>
                <div className="flex md:justify-end w-full">
                  <form className="form-control w-full md:max-w-lg">
                    <input
                      type="text"
                      placeholder="Search Your Name here"
                      className="input input-bordered border-gray-200 rounded-full input-info w-full  text-slate-700"
                      onChange={handleSearchTextChange}
                      value={searchText}
                    />
                  </form>
                </div>
              </div>

              <div className="grid md:grid-cols-3  gap-4 modal-scroll p-4 justify-center w-full">
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
                  <h1 className="text-lg w-full"> No Member Found</h1>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Registered;
