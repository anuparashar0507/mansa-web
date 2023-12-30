import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";
import mansaLogo from "../../../public/MANSALogo.png";
import { FaRegCopy, FaUsers, FaRegUser } from "react-icons/fa";
import { MdOutlinePostAdd, MdOutlineSettings } from "react-icons/md";
type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent): void => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 bg-white flex h-screen w-72 flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 lg:py-4 md:px-6 px-2 py-4 shadow-2">
        <Link href="/dashboard" className="block flex-shrink-0">
          <Image
            height={400}
            width={600}
            className="h-12 w-auto  md:h-16"
            src={mansaLogo}
            alt="Logo"
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-5">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item All Navodayans --> */}
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-lg text-slate-800 duration-300 ease-in-out hover:bg-blue-50 ${
                    pathname?.split("/").pop() === "dashboard" &&
                    "bg-blue-100 text-slate-900"
                  }`}
                >
                  <FaUsers className=" text-brand h-8 w-8 p-1 rounded-md" />
                  Navodayans
                </Link>
              </li>
              {/* <!-- Menu Item All Navodayans --> */}

              {/* <!-- Menu Item All Jobs --> */}
              <li>
                <Link
                  href="/dashboard/job-board"
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-lg text-slate-800 duration-300 ease-in-out hover:bg-blue-50 ${
                    pathname.includes("job-board") &&
                    "bg-blue-100 text-slate-900"
                  }`}
                >
                  <FaRegCopy className=" text-brand h-8 w-8 p-1 rounded-md" />
                  Jobs
                </Link>
              </li>
              {/* <!-- Menu Item All Jobs --> */}

              {/* <!-- Menu Item Post New Job --> */}
              <li>
                <Link
                  href="/dashboard/post-job"
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-lg text-slate-800 duration-300 ease-in-out hover:bg-blue-50 ${
                    pathname.includes("post-job") &&
                    "bg-blue-100 text-slate-900"
                  }`}
                >
                  <MdOutlinePostAdd className=" text-brand h-8 w-8 p-1 rounded-md" />
                  Post New Job
                </Link>
              </li>
              {/* <!-- Menu Item Post New Job --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/dashboard/profile"
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-lg text-slate-800 duration-300 ease-in-out hover:bg-blue-50 ${
                    pathname.includes("profile") && "bg-blue-100 text-slate-900"
                  }`}
                >
                  <FaRegUser className=" text-brand h-8 w-8 p-1 rounded-md" />
                  Profile
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <Link
                  href="/dashboard/edit-profile"
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-2 rounded-sm py-2 px-4 font-medium text-lg text-slate-800 duration-300 ease-in-out hover:bg-blue-50 ${
                    pathname.includes("edit-profile") &&
                    "bg-blue-100 text-slate-900"
                  }`}
                >
                  <MdOutlineSettings className=" text-brand h-8 w-8 p-1 rounded-md" />
                  Settings
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
