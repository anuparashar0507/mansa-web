import React from "react";
import { components } from "react-select";
import { FaCaretDown } from "react-icons/fa";
import type { DropdownIndicatorProps } from "react-select";
import type { Option } from "~/types/selectOption.type";

// type TDropdownIndicator = DropdownIndicatorProps<
//   Option,
//   boolean,
//   GroupBase<Option>
// >;

// const DropdownIndicator: DropdownIndicatorProps<
//   Option,
//   boolean,
//   GroupBase<Option>
// > = () => {
//   return (
//     <components.DropdownIndicator {...rest}>
//       <FaCaretDown />
//     </components.DropdownIndicator>
//   );
// };

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCaretDown />
    </components.DropdownIndicator>
  );
};
export default DropdownIndicator;
