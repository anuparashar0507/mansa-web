import React from "react";
// import { Member } from "./types";
// type Member = {
//   registrationNumber: string;
//   name: string;
//   school: string;
//   batchYear: string;
//   registrationDate: string;
// };

type MemberCardProps = {
  registrationNumber: string;
  name: string;
  school: string;
  batchYear: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  school,
  batchYear,
  registrationNumber,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {/* <div className="grid grid-cols-3 gap-0">
          <div className="w-full grid grid-rows-4 col-span-1">
            <p className="text-sm font-medium text-gray-600">Reg No:</p>
            <p className="text-sm font-medium text-gray-600">Name:</p>
            <p className="text-sm font-medium text-gray-600">School:</p>
            <p className="text-sm font-medium text-gray-600">Batch:</p>
          </div>
          <div className="w-full grid grid-rows-4 col-span-2">
            <p className="text-sm text-brand font-semibold">
              {registrationNumber}
            </p>
            <p className="text-sm text-brand font-semibold">{name}</p>
            <p className="text-sm text-brand font-semibold">{school}</p>
            <p className="text-sm text-brand font-semibold">{batchYear}</p>
          </div>
        </div> */}

        {/* <div className="px-4 py-2"> */}
        <p className="text-sm font-medium text-gray-600 gap-1 flex">
          Reg No :{"  "}
          <span className="text-sky-800 font-bold text-md tracking-wide">
            {registrationNumber}{" "}
          </span>
        </p>
        <p className="text-sm font-medium text-gray-600 gap-3 flex">
          Name : {"  "}{" "}
          <span className="text-brand font-semibold text-md tracking-wide">
            {name}{" "}
          </span>
        </p>
        <p className="text-sm font-medium text-gray-600 gap-1 flex">
          School :
          <span className="text-brand font-semibold text-md">{school} </span>
        </p>
        <p className="text-sm font-medium text-gray-600 gap-3 flex">
          Batch :
          <span className="text-brand font-semibold text-md"> {batchYear}</span>
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MemberCard;
