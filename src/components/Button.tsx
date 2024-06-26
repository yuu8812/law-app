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
  onClick?: (() => Promise<void>) | (() => void);
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
        return `!bg-red text-white md:hover:!bg-red/80 ${
          (isLoading || disabled) && "md:hover:!bg-opacity-100 opacity-50"
        }`;
      case "light":
        return `!border-so_se_ji md:hover:!bg-gray-200 bg-[#ffffff] ${
          (isLoading || disabled) && "text-gray-400 md:hover:!bg-white border-gray-400"
        }`;
      case "primary":
        return `!bg-so_se_ji text-white md:hover:!bg-opacity-75 ${
          (isLoading || disabled) && "md:hover:!bg-opacity-100 opacity-50"
        }`;
      case "warning":
        return `!border-red md:hover:!bg-gray-200 ${
          (isLoading || disabled) && "text-gray-400 md:hover:!bg-white border-gray-400"
        }`;
    }
  };

  return (
    <button
      className={cn(
        width,
        height,
        "relative flex items-center justify-center rounded border text-sm",
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
