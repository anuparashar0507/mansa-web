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
import { MdOutlineSchool, MdOutlineMapsHomeWork } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuHeartHandshake, LuPieChart } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { PiOfficeChair, PiSuitcaseLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
// import { type Filter } from "~/types/jobFilter.type";
import { type User } from "@prisma/client";
import Link from "next/link";

const MemberCard: React.FC<{ member: User }> = ({ member }) => {
  //   const getBadgeColor = (member: Filter) => {
  //     if (member.jobSector === "Government") {
  //       return "badge-success";
  //     } else if (member.jobSector === "Private") {
  //       return "badge-primary";
  //     } else if (member.jobSector === "Non-profit Organisation") {
  //       return "badge-secondary";
  //     } else {
  //       return "badge-accent";
  //     }
  //   };
  console.log(member);
  return (
    <div className="card px-6 py-5 cursor-pointer bg-base-100 shadow-2xl border">
      {/* Member  Name */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium  capitalize">{member.name}</h3>
      </div>
      {/* School / Batch */}
      <div className="grid grid-cols-2  mb-2">
        <div className="flex items-center ">
          <FaSchoolFlag className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md capitalize">
            {member.jnv ? member.jnv : "NA"}
          </span>
        </div>
        <div className="flex items-center ">
          <CiCalendarDate className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md capitalize">
            {member.passoutYear ? member.passoutYear : "NA"}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-2">
        <div className={`flex items-center`}>
          <FaHome className="mr-2 " />
          <span className=" text-md">{member.district}</span>
        </div>
        <div className={`flex items-center`}>
          <MdOutlineMapsHomeWork className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md">{member.state}</span>
        </div>
      </div>
      {/* <div className="flex md:items-center flex-col md:flex-row mb-2 md:gap-4 md:mb-1"> */}
      {/* location */}
      <div className="divider m-0" />

      <div className="grid grid-cols-2  mb-1">
        <div className="flex items-center">
          <IoLocationOutline className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md capitalize">
            {member.currentLocation ? member.currentLocation : "NA"}
          </span>
        </div>
        {/* occupation */}
        <div className="flex items-center">
          <MdOutlineSchool className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md capitalize">
            {member.occupation}
          </span>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MemberCard;
