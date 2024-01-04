import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaUserCircle, FaRegUser, FaChevronDown } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";
const DropdownUser = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const trigger = useRef<HTMLAnchorElement>(null);
  // const dropdown = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  // // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: MouseEvent) => {
  //     if (!dropdown.current) return;
  //     if (
  //       !dropdownOpen ||
  //       dropdown.current.contains(target as Node) ||
  //       trigger?.current?.contains(target as Node)
  //     )
  //       return;
  //     setDropdownOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }: KeyboardEvent) => {
  //     if (!dropdownOpen || keyCode !== 27) return;
  //     setDropdownOpen(false);
  //   };
  //   document.addEventListener("keydown", keyHandler);
  //   return () => document.removeEventListener("keydown", keyHandler);
  // });

  return (
    <div className="relative">
      <Link
        // ref={trigger}
        // onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black">
            {session?.user?.name}
          </span>
          <span className="block text-xs">
            {session?.user ? session.user.jnv : "JNV"}
          </span>
        </span>

        <span className="md:h-12 md:w-12 h-10 w-10 bg-slate-400 flex items-center justify-center rounded-full">
          {/* <Image
            width={112}
            height={112}
            src={"/images/user/user-01.png"}
            alt="User"
          /> */}
          <FaUserCircle
            className="w-full h-full text-blue-300 bg-slate-50"
            alt="User"
          />
        </span>
        {/* <FaChevronDown className="hidden fill-current sm:block" /> */}
      </Link>

      {/* <!-- Dropdown Start --> */}
      {/* <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-brand lg:text-base"
            >
              <FaRegUser />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="/pages/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-brand lg:text-base"
            >
              <MdOutlineSettings />
              Account Settings
            </Link>
          </li>
        </ul>
        <button
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-brand lg:text-base"
          onClick={() => signOut()}
        >
          <CiLogout />
          Log Out
        </button>
      </div> */}
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
