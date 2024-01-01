import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { type FieldError } from "react-hook-form";
import { type FocusEventHandler } from "react";
// import { FaCaretDown } from "react-icons/fa";

export default function ListBoxWrapper({
  value = "",
  onChange,
  onBlur,
  label,
  options,
  error,
  placeholder,
  required,
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  onBlur?: FocusEventHandler<HTMLButtonElement> | undefined;
  label: string;
  placeholder: string | undefined;
  options: {
    value: string | number;
    label: string;
    id?: number | string | undefined;
  }[];
  error?: FieldError | undefined;
  required?: boolean;
}) {
  return (
    <div className="p-0 m-0">
      <Listbox
        value={value}
        disabled={!(options?.length > 0) ? true : false}
        onChange={onChange}
      >
        <Listbox.Label className="text-sm">
          <div className="label">
            <span className={`label-text ${required && "star-label"}`}>
              {label}
            </span>
          </div>
        </Listbox.Label>
        <div className="relative">
          <div className="relative w-full  min-w-full text-base cursor-default overflow-hidden rounded-lg bg-white text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <Listbox.Button
              id={label}
              className="w-full min-w-full select select-bordered text-base inset-y-0 right-0 flex items-center"
              onBlur={onBlur}
            >
              <span
                className={`block truncate ${
                  !(value.toString().length > 0) && "text-slate-400"
                }`}
              >
                {/* {getNameFromValue(optionValue)} */}
                {value.toString().length > 0 ? value : placeholder}
              </span>
              {/* <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FaCaretDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span> */}
            </Listbox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                options.map((option, index) => (
                  <Listbox.Option
                    key={option?.id ? option.id : index}
                    className={({ active }) =>
                      `relative cursor-default py-2 pl-10 pr-4 ${
                        active ? "bg-orange-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-orange-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error.message}
        </p>
      )}
    </div>
  );
}
