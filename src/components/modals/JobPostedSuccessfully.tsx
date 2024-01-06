import {
  Fragment,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function JObPostedSuccessfully({
  title,
  description,
  setIsOpen,
  isOpen,
  primaryButtonText,
  onClick,
}: {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  onClick?: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  //   const [isOpen, setIsOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex flex-col items-center justify-center sm:items-start">
                    <div className="mx-auto w-full flex flex-col h-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100  sm:h-12 sm:w-12">
                      <CheckIcon
                        className="h-8 w-8 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        {title && title?.length > 0 ? title : "Success"}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {description && description?.length > 0 ? title : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 w-full flex">
                  {primaryButtonText && primaryButtonText?.length > 0 && (
                    <button
                      type="button"
                      className=" w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-full"
                      //   onClick={() => setIsOpen(false)}
                      onClick={onClick}
                    >
                      {primaryButtonText}
                    </button>
                  )}
                  <button
                    type="button"
                    className="mt-3  w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
