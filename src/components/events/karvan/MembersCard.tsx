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
        {/* <div className="px-4 py-2 bg-gray-100 rounded-t-lg"> */}
        {/* </div> */}
        <div className="px-4 py-2">
          <h3 className="text-lg font-medium"></h3>
          <p className="text-sm font-medium text-gray-700">
            <b>Registration No:</b> {registrationNumber}
          </p>
          <p className="text-sm font-medium text-gray-700">
            <b>Name:</b> {name}
          </p>
          <p className="text-sm font-medium text-gray-700">
            <b>School:</b> {school}
          </p>
          <p className="text-sm font-medium text-gray-700">
            <b>Batch/Passout Year:</b> {batchYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
