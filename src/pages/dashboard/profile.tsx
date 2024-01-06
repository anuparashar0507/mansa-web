import React, { useState, useEffect } from "react";
import { type User } from "@prisma/client";
import Loader from "~/components/ui/Loader";
import { useSession } from "next-auth/react";

const Profile = () => {
  const [member, setMember] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session } = useSession();
  // console.log
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/user/getUser?id=${session?.user.id}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await res.json();
        if (res.ok) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          setMember(data);
        }
        setLoading(false);
      } catch (error) {
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
        <div className="w-full flex flex-col justify-start px-2 py-6 md:p-6 gap-4 md:gap-8 bg-white">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Your Information
            </h3>
            <p className="mt-1 max-w-2xl text-md leading-6 text-gray-500">
              Personal details.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Gender / Age
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.gender} / {member?.age}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Occupation
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.occupation}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  JNV - Batch/Passout Year
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.jnv} - {member?.passoutYear}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Home District/State
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.district}/{member?.state}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Contact
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {member?.phone}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
