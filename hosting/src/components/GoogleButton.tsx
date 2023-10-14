import React from "react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/Button";

export const GoogleButton = ({
  type,
  onClick,
}: {
  type: "login" | "signIn";
  onClick?: () => Promise<void> | void;
}) => {
  return (
    <Button
      text={type === "login" ? "googleでログイン" : "googleでサインイン"}
      Icon={FcGoogle}
      buttonType="light"
      iconSpin={false}
      onClick={onClick}
    />
  );
};
