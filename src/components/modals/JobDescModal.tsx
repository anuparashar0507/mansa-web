import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type Dispatch, type SetStateAction } from "react";
import { type Filter } from "~/types/jobFilter.type";
import {
  FaExternalLinkAlt,
  FaHeart,
  FaHome,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { LuHeartHandshake, LuPieChart } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { PiOfficeChair, PiSuitcaseLight } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";

export default function JobDescModal({
  jobData,
  setIsOpen,
  isOpen,
}: {
  jobData: Filter;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0  w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {jobData.jobTitle}
                </Dialog.Title>
                <div className="mt-4">
                  {/* <div className="flex items-center justify-between mb-2  md:mb-1">
                    <Link
                      href={jobData.jobLink}
                      target="_blank"
                      className="bg-gray-100 hover:text-blue-500  rounded-md text-gray-500 font-semibold"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  </div> */}
                  {/* company */}
                  <div className="flex md:items-center flex-col md:flex-row mb-2 gap-4">
                    <div className="flex items-center ">
                      <HiOutlineOfficeBuilding className="mr-2 text-gray-500" />
                      <span className="text-gray-700 text-sm capitalize">
                        {jobData.companyName ? jobData.companyName : "NA"}
                      </span>
                    </div>
                    <div className="md:flex items-center justify-end gap-4 hidden">
                      <div className={`flex items-center`}>
                        <LuPieChart className="mr-2 " />
                        <span className=" text-sm">{jobData.jobSector}</span>
                      </div>
                      <div className={`flex items-center`}>
                        <LiaIndustrySolid className="mr-2 text-gray-500" />
                        <span className="text-gray-700 text-sm">
                          {jobData.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:items-center flex-col md:flex-row mb-2 md:gap-4 md:mb-1">
                    {/* location */}
                    <div className="flex items-center gap-4 mb-1">
                      <div className="flex items-center">
                        <IoLocationOutline className="mr-2 text-gray-500" />
                        <span className="text-gray-700 text-sm capitalize">
                          {jobData.location ? jobData.location : "NA"}
                        </span>
                      </div>
                      {/* <div className="divider divider-horizontal divider-start m-0" /> */}
                      {/* work mode */}
                      <div className="flex items-center">
                        <PiOfficeChair className="mr-2 text-gray-500" />
                        <span className="text-gray-700 text-sm capitalize">
                          {jobData.workMode}
                        </span>
                      </div>
                    </div>
                    <div className="flex md:items-center flex-col md:flex-row md:gap-4 gap-1 mb-1">
                      {/* <div className="divider divider-horizontal divider-start m-0" /> */}
                      {/* experience */}
                      <div className="flex items-center">
                        <PiSuitcaseLight className="mr-2 text-gray-500" />
                        <span className="text-gray-700 text-sm">
                          {jobData.minExperience} - {jobData.maxExperience}{" "}
                          {jobData.minExperience || jobData.maxExperience
                            ? "Years"
                            : "Not Disclosed"}
                        </span>
                      </div>
                      {/* <div className="divider divider-horizontal divider-start m-0" /> */}
                      {/* salary */}
                      <div className="flex items-center">
                        <FaRegMoneyBillAlt className="mr-2 text-gray-500" />
                        <span className="text-gray-700 text-sm">
                          {jobData.minSalary} - {jobData.maxSalary}{" "}
                          {jobData.minSalary || jobData.maxSalary
                            ? "INR"
                            : "Not Disclosed"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* description */}
                  <div className="md:flex mt-8">
                    <div className="flex flex-col ">
                      {/* <CgNotes className="mr-2 text-gray-500" /> */}
                      <h2 className="text-lg font-medium leading-6 text-gray-900">
                        Job Description
                      </h2>
                      <span className="mr-3 border p-2 rounded-md mt-2 text-gray-700 text-sm text-clip max-w-full">
                        {jobData.jobDescription}
                      </span>
                    </div>
                  </div>
                  <div className="divider m-1 " />

                  <div className="flex md:items-center flex-col md:flex-row justify-between md:gap-4 gap-2 mb-2 md:mb-0">
                    {/* posted by */}
                    <div className="flex items-center">
                      <span className="mr-2 text-gray-500 text-sm">
                        Posted By:
                      </span>
                      <span className="text-gray-700 text-sm font-medium capitalize">
                        {jobData.postedBy}
                      </span>
                    </div>

                    {/* assist type */}
                    <div className="flex md:items-center ">
                      <LuHeartHandshake className="mr-2 text-gray-500" />
                      <span className="text-gray-700 text-sm">
                        {jobData.assistType}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    {/* contact */}
                    <div className="flex items-center">
                      <button className="bg-gray-50 hover:text-blue-500  rounded-full text-gray-500 font-semibold mr-2">
                        <FaEnvelope />
                      </button>
                      {jobData.linkedin && (
                        <a
                          href={jobData.linkedin}
                          className="bg-gray-50 hover:text-blue-500  rounded-full text-gray-500 font-semibold mr-2"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {jobData.facebook && (
                        <a
                          href={jobData.facebook}
                          className="bg-gray-50 hover:text-blue-500 rounded-full text-gray-500 font-semibold mr-2"
                        >
                          <FaFacebook />
                        </a>
                      )}
                      {jobData.instagram && (
                        <a
                          href={jobData.instagram}
                          className="bg-gray-50 hover:text-blue-500  rounded-full text-gray-500 font-semibold mr-2"
                        >
                          <FaInstagram />
                        </a>
                      )}
                      {jobData.twitter && (
                        <a
                          href={jobData.twitter}
                          className="bg-gray-50 hover:text-blue-500  rounded-full text-gray-500 font-semibold"
                        >
                          <FaTwitter />
                        </a>
                      )}
                    </div>

                    <button
                      className=" hover:bg-gray-100 text-gray-500 hover:text-blue-500  flex items-center   rounded-full font-medium text-sm px-2 py-1"
                      // onClick={handleInterested}
                    >
                      <FaHeart className="bg-gray-50 hover:text-blue-500  rounded-full font-semibold mr-2" />{" "}
                      Interested
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
