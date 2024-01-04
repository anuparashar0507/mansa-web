import React, { useRef, useState, useEffect } from "react";
import { MdFilterList } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import Loader from "~/components/ui/Loader";
import { jobSectors, workModes } from "~/constants/jobs";
import Industries from "~/constants/industries";
import { type Job } from "@prisma/client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ComboBoxWrapper from "~/components/ui/ComboBoxWrapper";
import ListBoxWrapper from "~/components/ui/ListBoxWrapper";
import JobCard from "~/components/cards/JobCard";
import { type Filter } from "~/types/jobFilter.type";
import JobDescModal from "~/components/modals/JobDescModal";

const initialFilterState = {
  id: 0,
  companyName: "",
  jobTitle: "",
  jobSector: "",
  industry: "",
  location: "",
  workMode: "",
  assistType: "",
  minExperience: "",
  maxExperience: "",
  minSalary: "",
  maxSalary: "",
  jobDescription: "",
  jobLink: "",
  email: "",
  linkedin: "",
  facebook: "",
  instagram: "",
  twitter: "",
  postedBy: "",
  createdAt: new Date(),
  // Date type
  // createdAt:  ,
  // updatedAt: ,
  // userId: "",
};

const JobBoard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Job[]>(jobs);
  const [filter, setFilter] = useState<Filter>(initialFilterState);
  const [loading, setLoading] = useState<boolean>(true);
  const filterModalRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Filter | null>(null);
  const handleJobClick = (job: Filter) => {
    setIsOpen(true);
    setSelectedJob(job);
  };

  useEffect(() => {
    const filterMember = jobs?.filter((job) => {
      return (
        (filter.jobTitle === "" ||
          job.jobTitle.toLowerCase().includes(filter.jobTitle.toLowerCase())) &&
        (filter.companyName === "" || job.companyName === filter.companyName) &&
        (filter.jobSector === "" ||
          job.jobSector
            .toLowerCase()
            .includes(filter.jobSector.toLowerCase())) &&
        (filter.industry === "" ||
          job.industry
            ?.toLowerCase()
            .includes(filter.industry.toLowerCase())) &&
        (filter.location === "" ||
          (job?.location &&
            job?.location
              .toLowerCase()
              .includes(filter.location.toLowerCase()))) &&
        (filter.workMode === "" ||
          job.workMode.toLowerCase().includes(filter.workMode.toLowerCase())) &&
        (filter.assistType === "" ||
          job.assistType
            .toLowerCase()
            .includes(filter.assistType.toLowerCase())) &&
        (filter.minExperience === "" ||
          job.minExperience
            .toLowerCase()
            .includes(filter.minExperience.toLowerCase())) &&
        (filter.maxExperience === "" ||
          (job.maxExperience &&
            job.maxExperience
              .toLowerCase()
              .includes(filter.maxExperience.toLowerCase())))
      );
    });

    setFilteredMembers(filterMember);
    return () => setFilteredMembers(jobs);
  }, [
    filter.jobTitle,
    filter.companyName,
    filter.jobSector,
    filter.industry,
    filter.location,
    filter.workMode,
    filter.assistType,
    filter.minExperience,
    filter.maxExperience,
    jobs,
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/all-jobs/route");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await res.json();
        if (res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          setJobs(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
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
            <h1 className="text-slate-700 font-semibold text-3xl">
              Current Job Postings
            </h1>
          </div>

          {/* FILTERS AND ALL FILTER BUTTON */}
          <div className="w-full bg-white z-10 rounded-xl border flex flex-col gap-2 items-center justify-start sticky top-20">
            <div className="w-full p-2 md:p-6">
              <input
                type="text"
                placeholder="Search by Job title"
                className="input input-bordered w-full"
                value={filter.jobTitle}
                onChange={(e) =>
                  setFilter({ ...filter, jobTitle: e.target.value })
                }
              />
            </div>
            {Object.values(filter).filter(
              (value) =>
                value && typeof value === "string" && value?.length > 0,
            ).length > 0 &&
              (console.log("filter :", filter),
              (
                <div className="w-full px-2 py-2 md:px-6 grid gap-1 grid-flow-col justify-start max-w-full overflow-x-auto">
                  {Object.entries(filter)
                    .filter(([key, value]) => value && key !== "createdAt")
                    .map(
                      ([key, value], index) =>
                        value && (
                          <button
                            key={index}
                            className="btn btn-outline px-3 py-0 w-max min-h-max h-8 rounded-md"
                          >
                            {value as string}
                            <XMarkIcon
                              className="w-5 h-5 p-0 m-0"
                              onClick={() =>
                                setFilter({ ...filter, [key]: "" })
                              }
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
              ))}
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

          {/* JOBS LIST */}
          <div className="w-full flex flex-col items-center justify-start p-2 md:p-6 rounded-xl bg-white border ">
            <div className="w-full flex justify-start mb-3">
              <p>Available Jobs: {filteredMembers?.length}</p>
            </div>{" "}
            <div className="grid w-full  lg:grid-cols-2 grid-cols-1 gap-4">
              {filteredMembers?.map((job, index) => (
                <JobCard
                  key={index}
                  jobData={job as Filter}
                  handleClick={handleJobClick}
                />
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
                    value={filter.jobTitle}
                    onChange={(e) =>
                      setFilter({ ...filter, jobTitle: e.target.value })
                    }
                  />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <label>
                    <ComboBoxWrapper
                      label="Company"
                      value={filter.companyName}
                      onChange={(e) =>
                        setFilter({ ...filter, companyName: e.toString() })
                      }
                      options={[
                        ...new Set(
                          jobs
                            .map((job) => job.companyName)
                            .filter((company) => company),
                        ),
                      ].map((company, index) => ({
                        label: company ? company : "NA",
                        value: company ? company : "NA",
                        id: index,
                      }))}
                      placeholder="Select Company"
                    />
                  </label>
                  <label>
                    <ListBoxWrapper
                      label="Job Sector"
                      placeholder="Select Job Sector"
                      value={filter.jobSector}
                      onChange={(e) =>
                        setFilter({ ...filter, jobSector: e.toString() })
                      }
                      options={jobSectors.map((sector, index) => ({
                        id: index,
                        label: sector,
                        value: sector,
                      }))}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                  <label>
                    <ComboBoxWrapper
                      label="Industry"
                      placeholder="Select Industry"
                      value={filter.industry}
                      onChange={(e) =>
                        setFilter({ ...filter, industry: e.toString() })
                      }
                      options={Industries.map((industry, index) => ({
                        id: index,
                        label: industry,
                        value: industry,
                      }))}
                      required={true}
                    />
                  </label>
                  <label>
                    <div className="label">
                      <span className="label-text star-label">Work Mode</span>
                    </div>
                    <div className="join gap-4">
                      {workModes.map((mode) => (
                        <div
                          key={mode}
                          className="join-item label cursor-pointer gap-2"
                        >
                          <input
                            type="radio"
                            value={mode.toLowerCase()}
                            defaultChecked={
                              mode.toLowerCase() === "in office" ? true : false
                            }
                            className="radio checked:bg-brand"
                            onChange={(e) =>
                              setFilter({ ...filter, workMode: e.target.value })
                            }
                          />
                          <span className="label-text">{mode}</span>
                        </div>
                      ))}
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                  <label>
                    <div className="label">
                      <span className="label-text">
                        Experience Required (Select 0 for no experience
                        required)
                      </span>
                    </div>
                    <div className="flex gap-2 max-w-full">
                      <input
                        type="number"
                        placeholder="Min (in Years)"
                        min={0}
                        max={filter.maxExperience}
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            minExperience: e.target.value,
                          })
                        }
                        className={`input input-bordered w-full `}
                      />
                      <input
                        type="number"
                        placeholder="Max (in Years)"
                        min={filter.minExperience}
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            maxExperience: e.target.value,
                          })
                        }
                        max={50}
                        className={`input input-bordered w-full `}
                      />
                    </div>
                  </label>
                  <label>
                    <div className="label">
                      <span className="label-text">
                        Salary Range (Per Year)
                      </span>
                    </div>
                    <div className="flex gap-2 max-w-full">
                      <input
                        type="number"
                        placeholder="Min (in rupees)"
                        min={"0"}
                        max={filter.maxSalary}
                        onChange={(e) =>
                          setFilter({ ...filter, minSalary: e.target.value })
                        }
                        className={`input input-bordered w-full `}
                      />
                      <input
                        type="number"
                        placeholder="Max (in rupees)"
                        min={filter.minSalary}
                        onChange={(e) =>
                          setFilter({ ...filter, maxSalary: e.target.value })
                        }
                        className={`input input-bordered w-full`}
                      />
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 md:gap-4 mt-2 md:mt-0">
                  <label>
                    <div className="label">
                      <span className="label-text star-label">
                        Choose the assistance type
                      </span>
                    </div>
                    <div className="flex gap-4 flex-col justify-start items-start md:flex-row">
                      {[
                        "Hiring for my company",
                        "Open to providing a referral",
                        "Providing information only",
                      ].map((option) => (
                        <label
                          key={option}
                          className="label cursor-pointer gap-2"
                        >
                          <input
                            type="radio"
                            value={option}
                            defaultChecked={
                              option === "Providing information only"
                                ? true
                                : false
                            }
                            className="radio checked:bg-brand"
                            onChange={(e) =>
                              setFilter({
                                ...filter,
                                assistType: e.target.value,
                              })
                            }
                          />
                          <span className="label-text">{option}</span>
                        </label>
                      ))}
                    </div>
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

      {selectedJob && (
        <JobDescModal
          jobData={selectedJob}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default JobBoard;
