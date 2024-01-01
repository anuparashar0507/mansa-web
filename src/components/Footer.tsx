import React from "react";
// import { FaHeart } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import mansaLogo from "../../public/MANSALogo.png";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

type LinkGroupProps = {
  children: React.ReactNode;
  header: React.ReactNode;
};

type NavLinkProps = {
  link: string;
  label: string;
};

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-dark relative z-10 border-t-2 border-slate-100 flex w-full flex-col justify-center bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-2/3 lg:w-4/12">
            <div className="mb-4 w-full">
              <Link href="/#" className="mb-6 inline-block max-w-[300px]">
                <Image
                  src={mansaLogo}
                  alt="logo"
                  className="hidden h-12 w-auto dark:block md:h-32 md:w-auto"
                  height={800}
                  width={1200}
                />
              </Link>
              <p className="text-body-color dark:text-dark-6 mb-7 max-w-[340px] text-base">
                Madhya-Bharat Association of Navodayan Students & Alumni
              </p>
            </div>
          </div>

          <LinkGroup header="Quick Links">
            <NavLink link="/about" label="About Us" />
            <NavLink link="/events/karvan" label="Events" />
            <NavLink link="/#" label="Gallery" />
            <NavLink link="/contact" label="Contact Us" />
          </LinkGroup>
          {/* <LinkGroup header="Company">
            <NavLink link="/#" label="About TailGrids" />
            <NavLink link="/#" label="Contact & Support" />
            <NavLink link="/#" label="Success History" />
            <NavLink link="/#" label="Setting & Privacy" />
          </LinkGroup> */}

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="dark:text-brand mb-9 text-lg font-semibold text-white">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                <Link
                  href="https://www.facebook.com/profile.php?id=61552934025188"
                  target="_blank"
                  className="border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 dark:hover:border-primary dark:text-brand mr-3 flex h-8 w-8 items-center justify-center rounded-full border hover:opacity-70 sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.instagram.com/mansaunitedfornavodayans"
                  target="_blank"
                  className="border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 dark:hover:border-primary hover:text-brand/80 dark:text-brand mr-3 flex h-8 w-8 items-center justify-center rounded-full border sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.youtube.com/@mansaunitedfornavodayans"
                  target="_blank"
                  className="border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 dark:hover:border-primary hover:text-brand/80 dark:text-brand mr-3 flex h-8 w-8 items-center justify-center rounded-full border sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <FaYoutube />
                </Link>
              </div>
              <p className="text-body-color dark:text-dark-6 text-base">
                &copy; 2023 MANSA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width={217}
            height={229}
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1={281}
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-10 top-10 z-[-1]">
          <svg
            width={75}
            height={75}
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2={75}
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="bottom-0 flex w-full justify-center bg-slate-50 py-4">
        Made with{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="h-6 w-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <Link
          href="https://www.maverixtech.in"
          target="_blank"
          className="text-brand font-semibold"
        >
          {" "}
          by Maverix Technologies
        </Link>
      </div>
    </footer>
  );
};

const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark dark:text-brand mb-9 text-lg font-semibold">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <li>
      <Link
        href={link}
        className="text-body-color hover:text-primary dark:text-dark-6 inline-block text-base leading-loose"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
