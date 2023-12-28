import React, { useRef, useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import Select, {
  components,
  type DropdownIndicatorProps,
  // type InputActionMeta,
} from "react-select";
import { FaChevronDown } from "react-icons/fa";
import { jnvSchools } from "~/constants/jnvList";
import { stateAndDistrict } from "~/constants/stateAndDistrict";
import { FaCaretDown } from "react-icons/fa";
import { type UserData } from "~/types/user.type";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
// type TDistrict = string[];
type TJnvSchoolsStateWise = Record<string, string[]>;
// type TJnvSchools = string[];

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
const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCaretDown />
    </components.DropdownIndicator>
  );
};
const Dashboard: React.FC = () => {
  const [members, setMembers] = useState<UserData[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<UserData[]>(members);

  const [districtSelectOptions, setDistrictSelectOptions] = useState<Option[]>(
    [],
  );
  const [jnvSelectOptions, setJnvSelectOptions] = useState<Option[]>([]);
  const [filter, setFilter] = useState<Filter>(initialFilterState);
  const filterModalRef = useRef<HTMLDialogElement>(null);

  const handleStateChange = (selectedState: string) => {
    // console.log("selectedState :- ", selectedState);

    const districts = stateAndDistrictList[selectedState];
    // console.log("DISTRICTS :- ", districts);
    const jnvs = jnvSchoolList[selectedState];
    setFilter({ ...filter, state: selectedState });
    // setDistrictOptions(districts as string[]);
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

  useEffect(() => {
    const filterMember = members.filter((member) => {
      return (
        (filter.name === "" ||
          member.Name.toLowerCase().includes(filter.name.toLowerCase())) &&
        (filter.currentLocation === "" ||
          member["Current Location"] === filter.currentLocation) &&
        (filter.occupation === "" ||
          member["Current Occupation & Designation"]
            .toLowerCase()
            .includes(filter.occupation.toLowerCase())) &&
        (filter.state === "" ||
          member["State Name"]
            ?.toLowerCase()
            .includes(filter.state.toLowerCase())) &&
        (filter.jnv === "" ||
          member["JNV Name"]
            .toLowerCase()
            .includes(filter.jnv.toLowerCase())) &&
        (filter.district === "" ||
          member["Home District"]
            .toLowerCase()
            .includes(filter.district.toLowerCase())) &&
        (filter.passOutYear === "" ||
          member["Batch Passout"]
            .toLowerCase()
            .includes(filter.passOutYear.toLowerCase()))
      );
    });

    setFilteredMembers(filterMember);
    return () => setFilteredMembers(members);
  }, [
    filter.name,
    filter.currentLocation,
    filter.state,
    filter.district,
    filter.jnv,
    filter.occupation,
    filter.passOutYear,
    members,
    districtSelectOptions,
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/fetchSheetMembers");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await res.json();
        if (res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          setMembers(data?.users);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    void fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start p-0 md:p-6 gap-4 md:gap-8">
      {/* PAGE HEADING */}
      <div className="w-full flex justify-between">
        <h1 className="text-slate-800 font-semibold text-3xl">
          All Navodayans
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
          <div className="w-full px-2 md:px-6 grid gap-1 grid-flow-col justify-start">
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
                      onClick={() => setFilter({ ...filter, [key]: "" })}
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
        <p>Result count: {filteredMembers?.length}</p>
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
          {filteredMembers.map((member, index) => (
            <div
              className="card border z-0 p-4 justify-center bg-white rounded-sm"
              key={index}
            >
              <p>
                <b className="font-semibold">Name:</b> {member.Name}
              </p>
              <p>
                <b className="font-semibold">Home State:</b>{" "}
                {member["State Name"]}
              </p>
              <p>
                <b className="font-semibold">Home Distrct:</b>{" "}
                {member["Home District"]}
              </p>
              <p>
                <b className="font-semibold">JNV:</b> {member["JNV Name"]}
              </p>
              <p>
                <b className="font-semibold">Batch/Passout Year:</b>{" "}
                {member["Batch Passout"]}
              </p>
              <p>
                <b className="font-semibold">Current Location:</b>{" "}
                {member["Current Location"]}
              </p>
              <p>
                <b className="font-semibold">Occupation:</b>{" "}
                {member["Current Occupation & Designation"]}
              </p>
            </div>
          ))}
        </div>
      </div>

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
                onChange={(e) => setFilter({ ...filter, name: e.target.value })}
              />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <label>
                <div className="label">
                  <span className="label-text">State</span>
                </div>
                <select
                  className="select select-bordered min-w-full"
                  onChange={(e) => handleStateChange(e.target.value)}
                  value={filter.state}
                  defaultValue={"Madhya Pradesh"}
                  placeholder="Select State"
                >
                  <option key={0} defaultChecked value={""}>
                    Select State
                  </option>
                  {Object.keys(stateAndDistrict).map((state, index) => {
                    return (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label>
                <div className="label">
                  <span className="label-text">District</span>
                </div>
                <Select
                  components={{ DropdownIndicator }}
                  isMulti={false}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "6px",
                    }),
                    option: (baseStyles) => ({
                      ...baseStyles,
                      divider: false,
                      fontColor: "brand",
                    }),
                  }}
                  options={districtSelectOptions}
                  // value={districtSelectOptions.find(
                  //   (c) => c.value === field.value,
                  // )}
                  // value={}
                  onChange={(e) =>
                    setFilter({ ...filter, district: e?.value ? e.value : "" })
                  }
                  isDisabled={!districtSelectOptions.length}
                />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <label>
                <div className="label">
                  <span className="label-text">JNV</span>
                </div>

                <Select
                  components={{ DropdownIndicator }}
                  isMulti={false}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "6px",
                    }),
                    option: (baseStyles) => ({
                      ...baseStyles,
                      divider: false,
                      fontColor: "brand",
                    }),
                  }}
                  placeholder="Select JNV"
                  options={jnvSelectOptions}
                  // value={jnvSelectOptions.find((c) => c.value === field.value)}
                  // onChange={(val) => field.onChange(val)}
                  onChange={(e) =>
                    setFilter({ ...filter, jnv: e?.value ? e.value : "" })
                  }
                  isDisabled={!jnvSelectOptions?.length}
                />
              </label>
              <label>
                <div className="label">
                  <span className="label-text">Passout Year</span>
                </div>
                <select
                  className="select select-bordered min-w-full"
                  onChange={(e) =>
                    setFilter({ ...filter, passOutYear: e.target.value })
                  }
                  value={filter.passOutYear}
                  placeholder="Select Batch/PassOut Year"
                >
                  <option key={0} defaultChecked value={""}>
                    Select Batch/PassOut Year
                  </option>
                  {years().map((year) => {
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </label>
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
  );
};

export default Dashboard;

// - Current Location
// - Occupation
// - State
// - JNV
// - District
// - PassOut Year
