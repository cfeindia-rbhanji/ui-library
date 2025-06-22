import React from "react";
import "./../index.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GaplyButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="!bg-red-200" {...props}>
      {children}
    </button>
  );
};
