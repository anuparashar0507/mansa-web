import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { type Member } from "~/types/member.type";
import { MdFace, MdFace3 } from "react-icons/md";
const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
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
      <div className="flex items-end mb-2">
        {member.gender === "Male" ? (
          <MdFace className="mr-2 text-sky-700 bg-sky-100 border border-sky-300 rounded-full p-1.5 h-12 w-12" />
        ) : (
          <MdFace3 className="mr-2  text-pink-600 bg-pink-100 border border-pink-300 rounded-full p-1.5 h-12 w-12" />
        )}

        <div className="flex items-start flex-col justify-between">
          <h3 className="text-lg font-medium leading-4 capitalize">
            {member.name}
          </h3>
          <span className="text-gray-700 text-md capitalize">
            {member.occupation}
          </span>
        </div>
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
        {/* <div className="flex items-center">
          <MdOutlineSchool className="mr-2 text-gray-500" />
          <span className="text-gray-700 text-md capitalize">
            {member.occupation}
          </span>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default MemberCard;
