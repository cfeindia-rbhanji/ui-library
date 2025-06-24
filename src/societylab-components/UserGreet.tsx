import React from "react";

export interface IuserGreet {
  name: string;
}

export const UserGreet: React.FC<IuserGreet> = ({ name }) => {
  return <h1 className="text-orange-300">Hello {name}</h1>;
};
