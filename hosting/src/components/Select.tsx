"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type SelectType = { value: string; label: string; color?: string; disabled?: boolean };

const Select = <T extends FieldValues>({
  options,
  register,
  name,
  width = "w-40",
  onChange,
  initialMessage,
  initialValue,
  displayCurrentValue = false,
  bigSelect = false,
}: {
  options: SelectType[];
  register?: UseFormRegister<T>;
  name?: Path<T>;
  width?: string;
  onChange?: (value: SelectType) => void;
  initialMessage?: string;
  initialValue?: SelectType;
  displayCurrentValue?: boolean;
  bigSelect?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<SelectType | undefined>(initialValue);
  const [message, setMessage] = useState<string | undefined>(initialMessage);

  const onClickOption = (option: SelectType) => {
    setCurrentValue(option);
    setMessage(undefined);
    setIsOpen(false);
    onChange && onChange(option);
  };

  return (
    <div
      className="relative flex w-fit flex-col text-sm"
      tabIndex={0}
      role="button"
      onBlur={() => setIsOpen(false)}
    >
      {register && name && <input {...register(name)} hidden />}
      <div
        className={clsx(
          `flex h-10 ${width} items-center justify-center rounded bg-[#ffffff] px-4 hover:text-white ${initialMessage ? "border-none shadow-sm" : "border shadow-inner"} hover:bg-so_se_ji hover:border-so_se_ji transition-all hover:border hover:text-white`,
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="">{!message ? currentValue?.label : message}</div>
      </div>
      {isOpen && (
        <div
          className={clsx(
            `absolute top-12 z-[1000] h-[500px] ${!bigSelect ? width : "w-[800px]"} overflow-y-scroll rounded border bg-[#ffffff] shadow-lg`,
          )}
        >
          <div
            className={` ${!bigSelect ? "flex flex-col items-center justify-center" : " flex flex-wrap"}  gap-1 p-1`}
          >
            {options.map((option, i) => {
              const isSelected = option.value === currentValue?.value && displayCurrentValue;
              return (
                <div
                  className={clsx(
                    `w-32 border-b px-2 py-2 ${
                      isSelected ? "bg-so_se_ji text-white" : "hover:bg-so_se_ji hover:text-white"
                    } `,
                    option.disabled &&
                      "cursor-not-allowed bg-gray-200 text-gray-400 hover:bg-gray-200 hover:text-gray-400",
                  )}
                  key={i + "select_box_option"}
                  onClick={() =>
                    !option.disabled && onClickOption({ label: option.label, value: option.value })
                  }
                >
                  <div className="text-base">{option.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
