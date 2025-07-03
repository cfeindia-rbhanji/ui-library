import React from "react";
import { Button } from "./Button";
interface IWelcomeUser {
  name: string;
  designation?: string;
  company?: string;
}

export const WelcomeUser: React.FC<IWelcomeUser> = ({
  name,
  designation,
  company,
}) => {
  return (
    <div className="mb-2">
      <h1 className="assessmentTitle text-base-foreground pb-2 capitalize">
        Hello, {name}
      </h1>
      <h4 className="uppercase leading-7 text-muted-foreground">
        {designation} {designation && company ? "AT" : null} {company}
      </h4>
      <Button>Button</Button>
    </div>
  );
};
