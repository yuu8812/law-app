"use client";
import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons/lib";
import { RiLoader3Fill } from "react-icons/ri";

import { cn } from "@/lib/utils";

export const Button = ({
  text,
  width = "w-80",
  buttonType = "primary",
  disabled = false,
  type = "button",
  Icon,
  onClick,
  form,
  height = "h-10",
}: {
  text: string | ReactNode;
  width?: string;
  buttonType?: "warning" | "primary" | "light" | "danger";
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  Icon?: IconType;
  onClick?: () => Promise<void> | void;
  form?: string;
  height?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickMethod = async () => {
    setIsLoading(true);
    try {
      onClick && (await onClick());
    } catch (error) {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const switchButtonType = () => {
    switch (buttonType) {
      case "danger":
        return `!bg-red/80 text-white hover:!bg-red ${
          (isLoading || disabled) && "hover:!bg-opacity-100 opacity-50"
        }`;
      case "light":
        return `!border-blue hover:!bg-gray-200 ${
          (isLoading || disabled) && "text-gray-400 hover:!bg-white border-gray-400"
        }`;
      case "primary":
        return `!bg-blue text-white hover:!bg-opacity-75 ${
          (isLoading || disabled) && "hover:!bg-opacity-100 opacity-50"
        }`;
      case "warning":
        return `!border-red hover:!bg-gray-200 ${
          (isLoading || disabled) && "text-gray-400 hover:!bg-white border-gray-400"
        }`;
    }
  };

  return (
    <button
      className={cn(
        width,
        height,
        "relative flex items-center justify-center border text-sm",
        switchButtonType(),
      )}
      onClick={onClickMethod}
      disabled={disabled || isLoading}
      type={type}
      form={form}
    >
      {isLoading ? (
        <div className={`absolute left-1 animate-spin`}>{<RiLoader3Fill />}</div>
      ) : (
        <div className={`absolute left-2`}>{Icon && <Icon />}</div>
      )}
      <div>{text}</div>
    </button>
  );
};
