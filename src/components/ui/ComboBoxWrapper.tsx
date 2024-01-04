import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { type FieldError } from "react-hook-form";
import { type FocusEventHandler } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function ComboBoxWrapper({
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
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
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
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  const getNameFromValue = (value: string | number) => {
    const option = options?.find((option) => option.value === value);
    return option ? option.label : "";
  };

  return (
    <div className="p-0 m-0">
      <Combobox
        value={value}
        disabled={
          !(filteredOptions?.length > 0) && !(query?.length > 0) ? true : false
        }
        onChange={onChange}
        nullable
      >
        <Combobox.Label className="text-sm">
          <div className="label">
            <span className={`label-text ${required && "star-label"}`}>
              {label}
            </span>
          </div>
        </Combobox.Label>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <Combobox.Button
              id={label}
              className="w-full inset-y-0 right-0 flex items-center"
            >
              <Combobox.Input
                className="w-full select select-bordered min-w-full text-base"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(optionValue: string | number) =>
                  getNameFromValue(optionValue)
                }
                placeholder={
                  placeholder ? placeholder : "Start typing to search..."
                }
                onBlur={onBlur}
              />
              <FaCaretDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 z-40 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredOptions?.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions?.map((option, index) => (
                  <Combobox.Option
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
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error.message}
        </p>
      )}
    </div>
  );
}
