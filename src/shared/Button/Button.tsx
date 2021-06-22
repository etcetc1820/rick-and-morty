import React from "react";

import "./buttons.scss";

interface ButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }): JSX.Element => {
  return <button {...props}>{children}</button>;
};

export default Button;
