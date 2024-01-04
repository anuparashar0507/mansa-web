import { useState, type Dispatch, type SetStateAction, Fragment } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import mansaLogo from "../../public/MANSALogo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
type NavLinkProps = {
  href: string;
  title: string;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const handleLogout = async () => {
    await signOut();
    setMobileMenuOpen(false);
  };
  return (
    <header className="bg-gray-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-mx-5 p-1.5">
            <span className="sr-only">MANSA</span>
            <Image
              className="h-12 w-auto  md:h-16"
              height={400}
              width={600}
              src={mansaLogo}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <NavLink
            href="/about"
            title="About US"
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <NavLink
            href="/events/karvan"
            title="Events"
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <NavLink
            href="#"
            title="Gallery"
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <NavLink
            href="/contact"
            title="Contact Us"
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          {!!session && (
            <>
              {/* <DropdownUser /> */}
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-50 bg-brand hover:bg-brand/80 rounded-3xl px-3 py-2 "
              >
                Dashboard
              </Link>
              <button
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => signOut()}
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            </>
          )}
          {!session && (
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-10 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full scale-80 opacity-0"
            enterTo="translate-x-0 opacity-100 scale-100"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-full"
            leaveTo="translate-x-0 opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between w-full">
                <Link href="/" className="-mx-4 p-1.5">
                  <span className="sr-only">MANSA</span>
                  <Image
                    className="h-12 w-auto"
                    src={mansaLogo}
                    alt="MANSA Logo"
                    // fill={true}
                    height={400}
                    width={600}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6  border-b-2">
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/events/karvan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Events
                    </Link>
                    <Link
                      // href="/gallery"
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div className="space-y-2 py-6">
                    {!!session && (
                      <>
                        {/* <DropdownUser /> */}
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Dashboard
                        </Link>
                        <button
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={handleLogout}
                        >
                          Log out <span aria-hidden="true">&rarr;</span>
                        </button>
                      </>
                    )}
                    {!session && (
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
};
export default Header;

const NavLink: React.FC<NavLinkProps> = ({
  href,
  title,
  setMobileMenuOpen,
}) => {
  return (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className="hover:bg-blue hover:text-brand/80 rounded-3xl px-3 py-2 text-sm font-semibold leading-6 text-gray-900  focus:outline-none focus:ring focus:ring-blue-300"
    >
      {title}
    </Link>
  );
};
