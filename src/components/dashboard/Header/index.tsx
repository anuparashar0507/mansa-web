import Link from "next/link";
// import DarkModeSwitcher from "./DarkModeSwitcher";
// import DropdownMessage from "./DropdownMessage";
// import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import mansaLogo from "../../../../public/MANSALogo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-20 flex w-full drop-shadow-md dark:bg-slate-600 bg-white dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-2 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-1 sm:gap-4 lg:hidden">
          <Link className="block flex-shrink-0 lg:hidden" href="/dashboard">
            <Image
              height={400}
              width={600}
              className="h-12 w-auto  md:h-16"
              src={mansaLogo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex">
          <div className="flex items-center gap-3 2xsm:gap-7">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              {/* <!-- Dark Mode Toggler --> */}
              {/* <DarkModeSwitcher /> */}
              {/* <!-- Dark Mode Toggler --> */}

              {/* <!-- Notification Menu Area --> */}
              {/* <DropdownNotification /> */}
              {/* <!-- Notification Menu Area --> */}

              {/* <!-- Chat Notification Area --> */}
              {/* <DropdownMessage /> */}
              {/* <!-- Chat Notification Area --> */}
            </ul>

            {/* <!-- User Area --> */}
            <DropdownUser />
            {/* <!-- User Area --> */}
          </div>
          {/* <!-- Hamburger Toggle BTN --> */}
          <Bars3Icon
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className={`z-40 bg-white p-1.5 text-slate-900 lg:hidden ${
              props.sidebarOpen && "hidden"
            } cursor-pointer ${!props.sidebarOpen && "!w-10 delay-300"}`}
          />
          <XMarkIcon
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className={`z-40 bg-white p-1.5 text-slate-900 lg:hidden cursor-pointer ${
              !props.sidebarOpen && "hidden"
            }  ${props.sidebarOpen && "!w-10 delay-300"}`}
          />
        </div>

        {/* <!-- Hamburger Toggle BTN --> */}
      </div>
    </header>
  );
};

export default Header;
