import React from "react";
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
import { type Filter } from "~/types/jobFilter.type";
import Link from "next/link";

const JobCard: React.FC<{ jobData: Filter }> = ({ jobData }) => {
  const getBadgeColor = (jobData: Filter) => {
    if (jobData.jobSector === "Government") {
      return "badge-success";
    } else if (jobData.jobSector === "Private") {
      return "badge-primary";
    } else if (jobData.jobSector === "Non-profit Organisation") {
      return "badge-secondary";
    } else {
      return "badge-accent";
    }
  };
  return (
    <div
      className="card p-6 cursor-pointer bg-base-100 shadow-2xl border"
      //   onClick={handleClick}
    >
      {/* <div className="flex items-center justify-end gap-4 mb-2">
        <div
          className={`flex items-center  badge badge-outline ${getBadgeColor(
            jobData,
          )}`}
        >
          <LuPieChart className="mr-2 " />
          <span className=" text-sm">{jobData.jobSector}</span>
        </div>
        <div className="flex items-center badge badge-outline badge-ghost">
          <LiaIndustrySolid className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-sm">{jobData.industry}</span>
        </div>
      </div> */}
      {/* job title */}
      <div className="flex items-center justify-between mb-2  md:mb-1">
        <h3 className="text-lg font-medium  capitalize">{jobData.jobTitle}</h3>
        <Link
          href={jobData.jobLink}
          target="_blank"
          className="bg-gray-100 hover:text-blue-500  rounded-md text-gray-500 font-semibold"
        >
          <FaExternalLinkAlt />
        </Link>
      </div>
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
            <span className="text-gray-700 text-sm">{jobData.industry}</span>
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
              {jobData.minSalary || jobData.maxSalary ? "INR" : "Not Disclosed"}
            </span>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="md:flex items-center  hidden">
        <div className="flex items-center">
          <CgNotes className="mr-2 text-gray-500" />
          <span className="mr-3 text-gray-700 text-sm text-clip max-w-full">
            {jobData.jobDescription}
          </span>
        </div>
      </div>
      <div className="divider m-1 " />

      <div className="flex md:items-center flex-col md:flex-row justify-between md:gap-4 gap-2 mb-2 md:mb-0">
        {/* posted by */}
        <div className="flex items-center">
          <span className="mr-2 text-gray-500 text-sm">Posted By:</span>
          <span className="text-gray-700 text-sm font-medium capitalize">
            {jobData.postedBy}
          </span>
        </div>

        {/* assist type */}
        <div className="flex md:items-center ">
          <LuHeartHandshake className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-sm">{jobData.assistType}</span>
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
  );
};

export default JobCard;
