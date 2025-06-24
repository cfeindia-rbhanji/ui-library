// import React from "react";
// import "./../index.css";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// export const GaplyButton: React.FC<ButtonProps> = ({ children, ...props }) => {
//   return (
//     <button className="!bg-red-200" {...props}>
//       {children}
//     </button>
//   );
// };

import React from "react";
import { Button as ShadcnButton, ButtonProps } from "@/components/ui/button";

interface MyButtonProps extends ButtonProps {
  // You can add custom props here if needed
  intent?: "primary" | "secondary";
}

export const Button: React.FC<MyButtonProps> = ({
  intent = "primary",
  className,
  ...props
}) => {
  const intentClass =
    intent === "primary" ? "bg-blue-600 text-white" : "bg-gray-100 text-black";

  return (
    <ShadcnButton className={`${intentClass} ${className ?? ""}`} {...props} />
  );
};
