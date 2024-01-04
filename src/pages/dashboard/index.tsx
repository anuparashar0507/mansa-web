import React, { useRef, useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { jnvSchools } from "~/constants/jnvList";
import { stateAndDistrict } from "~/constants/stateAndDistrict";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ComboBoxWrapper from "~/components/ui/ComboBoxWrapper";
import ListBoxWrapper from "~/components/ui/ListBoxWrapper";
import { type Member } from "~/types/member.type";
import Loader from "~/components/ui/Loader";
import MemberCard from "~/components/cards/MemberCard";
type Option = {
  label: string;
  value: string;
};
type Filter = {
  name: string;
  currentLocation: string;
  occupation: string;
  state: string;
  jnv: string;
  district: string;
  passOutYear: string;
};

type TStateAndDistrict = Record<string, string[]>;
type TJnvSchoolsStateWise = Record<string, string[]>;

const jnvSchoolList: TJnvSchoolsStateWise = {
  ...jnvSchools,
} as TJnvSchoolsStateWise;
const stateAndDistrictList: TStateAndDistrict = {
  ...stateAndDistrict,
} as TStateAndDistrict;

const years = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1980;
  const yearsArray = [];
  for (let year = startYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }
  return yearsArray;
};
const initialFilterState = {
  name: "",
  currentLocation: "",
  occupation: "",
  state: "",
  jnv: "",
  district: "",
  passOutYear: "",
};

const Dashboard: React.FC = () => {
  // const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  const [members, setMembers] = useState<Member[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(members);

  const [districtSelectOptions, setDistrictSelectOptions] = useState<Option[]>(
    [],
  );
  const [jnvSelectOptions, setJnvSelectOptions] = useState<Option[]>([]);
  const [filter, setFilter] = useState<Filter>(initialFilterState);
  const filterModalRef = useRef<HTMLDialogElement>(null);

  const handleStateChange = (selectedState: string) => {
    const districts = stateAndDistrictList[selectedState];
    const jnvs = jnvSchoolList[selectedState];
    setFilter({ ...filter, state: selectedState });
    const districtOptions = districts?.map((district) => ({
      label: district,
      value: district,
    }));

    setDistrictSelectOptions(districtOptions as Option[]);
    const jnvOptions = jnvs?.map((jnv) => ({
      label: jnv,
      value: jnv,
    }));

    setJnvSelectOptions(jnvOptions as Option[]);
    // setJnvOptions(jnvs as string[]);
  };
  const applyFilters = () => {
    console.log("FILTERS :- ", filter);
    const filterMember = members?.filter((member) => {
      const isNameMatch =
        filter.name === "" ||
        member?.name.toLowerCase().includes(filter.name.toLowerCase());
      const isCurrentLocationMatch =
        filter.currentLocation === "" ||
        member?.currentLocation === filter.currentLocation;
      const isOccupationMatch =
        filter.occupation === "" ||
        member?.occupation
          .toLowerCase()
          .includes(filter.occupation.toLowerCase());
      const isStateMatch =
        filter.state === "" ||
        member?.state?.toLowerCase().includes(filter.state.toLowerCase());
      const isJnvMatch =
        filter.jnv === "" ||
        member?.jnv.toLowerCase().includes(filter.jnv.toLowerCase());
      const isDistrictMatch =
        filter.district === "" ||
        member?.district.toLowerCase().includes(filter.district.toLowerCase());
      const isPassOutYearMatch =
        filter.passOutYear === "" ||
        member?.passoutYear
          .toString()
          .toLowerCase()
          .includes(filter.passOutYear.toLowerCase());

      return (
        isNameMatch &&
        isCurrentLocationMatch &&
        isOccupationMatch &&
        isStateMatch &&
        isJnvMatch &&
        isDistrictMatch &&
        isPassOutYearMatch
      );
    });

    setFilteredMembers(filterMember);
  };
  useEffect(() => {
    applyFilters();
  }, [filter, members]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/user/route");

        // Ensure successful response before parsing JSON
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as Member[];
        setMembers(data);
      } catch (error) {
        console.error(error);
        // Handle errors in UI if needed
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col items-center justify-start p-0 md:p-6 gap-4 md:gap-8">
          {/* PAGE HEADING */}
          <div className="w-full flex justify-between">
            <h1 className="text-slate-800 font-semibold text-3xl">
              The Family
            </h1>
          </div>

          {/* FILTERS AND ALL FILTER BUTTON */}
          <div className="w-full bg-white z-10 rounded-md border flex flex-col gap-2 items-center justify-start sticky top-20">
            <div className="w-full p-2 md:p-6">
              <input
                type="text"
                placeholder="Search Name Here"
                className="input input-bordered w-full rounded-md"
                value={filter.name}
                onChange={(e) => setFilter({ ...filter, name: e.target.value })}
              />
            </div>
            {Object.values(filter).filter((value) => value.length > 0).length >
              0 && (
              <div className="w-full px-2 py-2 md:px-6 grid gap-1 grid-flow-col justify-start max-w-full overflow-x-auto">
                {Object.entries(filter).map(
                  ([key, value], index) =>
                    value?.length > 0 && (
                      <button
                        key={index}
                        className="btn btn-outline px-3 py-0 w-max min-h-max h-8 rounded-md"
                      >
                        {value}
                        <XMarkIcon
                          className="w-5 h-5 p-0 m-0"
                          onClick={() => {
                            console.log("key:", key);
                            if (key === "state") {
                              setFilter({
                                ...filter,
                                state: "",
                                district: "",
                                jnv: "",
                              });
                              setDistrictSelectOptions([]);
                              setJnvSelectOptions([]);
                            } else {
                              setFilter({ ...filter, [key]: "" });
                            }
                          }}
                        />
                      </button>
                    ),
                )}
                <button
                  className="btn btn-ghost hover:bg-transparent px-3 py-0 w-max min-h-max h-8 rounded-md"
                  onClick={() => setFilter(initialFilterState)}
                >
                  Clear All
                </button>
              </div>
            )}
            <div className="w-full flex justify-center">
              <button
                className="btn btn-ghost w-full text-md hover:bg-gray-100 rounded-none"
                onClick={() => filterModalRef.current?.showModal()}
              >
                <MdFilterList className="text-2xl" /> Filters{" "}
                <FaChevronDown className="text-md" />
              </button>
            </div>
          </div>

          {/* MEMBERS LIST */}
          <div className="w-full flex flex-col items-center justify-start p-2 md:p-6 rounded-md bg-white border ">
            <div className="w-full flex justify-start mb-3">
              <p>All Navodayans: {filteredMembers?.length}</p>
            </div>
            <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
              {filteredMembers?.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </div>
          {/* <div
                  className="card border z-0 p-4 justify-center bg-white rounded-sm"
                  key={index}
                >
                  <p>
                    <b className="font-semibold">Name:</b> {member?.name}
                  </p>
                  <p>
                    <b className="font-semibold">Home State:</b> {member?.state}
                  </p>
                  <p>
                    <b className="font-semibold">Home Distrct:</b>{" "}
                    {member?.district}
                  </p>
                  <p>
                    <b className="font-semibold">JNV:</b> {member.jnv}
                  </p>
                  <p>
                    <b className="font-semibold">Batch/Passout Year:</b>{" "}
                    {member?.passoutYear}
                  </p>
                  <p>
                    <b className="font-semibold">Current Location:</b>{" "}
                    {member?.currentLocation}
                  </p>
                  <p>
                    <b className="font-semibold">Occupation:</b>{" "}
                    {member?.occupation}
                  </p>
                </div> */}

          {/* FILTER MODAL  */}
          <dialog id="my_modal_4" ref={filterModalRef} className="modal">
            <div className="modal-box md:w-11/12 md:max-w-4xl w-full rounded-md p-3 md:p-4">
              <div className="w-full md:p-6">
                <label>
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search Name Here"
                    className="input input-bordered w-full"
                    value={filter.name}
                    onChange={(e) =>
                      setFilter({ ...filter, name: e.target.value })
                    }
                  />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <ComboBoxWrapper
                    label="State"
                    placeholder="Select State"
                    value={filter.state}
                    onChange={(e) => handleStateChange(e.toString())}
                    options={Object.keys(stateAndDistrict).map(
                      (state, index) => ({
                        id: index,
                        label: state,
                        value: state,
                      }),
                    )}
                  />
                  <ComboBoxWrapper
                    label="District"
                    value={filter.district}
                    onChange={(e) =>
                      setFilter({ ...filter, district: e.toString() })
                    }
                    options={districtSelectOptions}
                    placeholder="Select District"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <ComboBoxWrapper
                    label="JNV"
                    value={filter.jnv}
                    onChange={(e) =>
                      setFilter({ ...filter, jnv: e.toString() })
                    }
                    options={jnvSelectOptions}
                    placeholder="Select JNV"
                  />
                  <ListBoxWrapper
                    label="Batch/Passout Year"
                    onChange={(e) =>
                      setFilter({ ...filter, passOutYear: e.toString() })
                    }
                    value={filter.passOutYear}
                    options={years().map((year) => ({
                      id: year,
                      label: year.toString(),
                      value: year,
                    }))}
                    placeholder="Select Batch/PassOut Year"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <label>
                    <div className="label">
                      <span className="label-text">Occupation</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Software Engineer"
                      className="input input-bordered w-full"
                      value={filter.occupation}
                      onChange={(e) =>
                        setFilter({ ...filter, occupation: e.target.value })
                      }
                    />
                  </label>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex gap-4">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-accent border-none bg-brand text-white">
                    View Results
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default Dashboard;
