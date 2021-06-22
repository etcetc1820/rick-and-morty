import React from "react";

import "./input.scss";

type inputTypes = "text" | "number";

interface InputProps {
  type: inputTypes;
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, ...props }): JSX.Element => {
  return (
    <div className="inputWrapper">
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
