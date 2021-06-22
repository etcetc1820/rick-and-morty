import React from "react";

import { StatusType } from "../types";
import "./select.scss";

interface SelectProps {
  name: string;
  items: StatusType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  items,
  selected,
  placeholder,
  ...props
}): JSX.Element => {
  return (
    <select {...props} defaultValue={placeholder} value={selected}>
      {placeholder && (
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
      )}
      {items.map((item) => (
        <option value={item.value} key={item.id}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
