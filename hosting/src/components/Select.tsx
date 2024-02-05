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
}: {
  options: SelectType[];
  register?: UseFormRegister<T>;
  name?: Path<T>;
  width?: string;
  onChange?: (value: SelectType) => void;
  initialMessage?: string;
  initialValue?: SelectType;
  displayCurrentValue?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<SelectType | undefined>(initialValue);

  const onClickOption = (option: SelectType) => {
    setCurrentValue(option);
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
          `flex h-10 ${width} hover:text-white" items-center justify-center rounded bg-[#ffffff] px-4 shadow-sm transition-all hover:border hover:border-blue hover:bg-blue hover:text-white`,
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="">{!initialMessage ? currentValue?.label : initialMessage}</div>
      </div>
      {isOpen && (
        <div
          className={clsx(
            `absolute top-12 z-[1000] h-[400px] ${width} overflow-y-scroll rounded bg-[#ffffff]`,
          )}
        >
          <div className="flex flex-col">
            {options.map((option, i) => {
              const isSelected = option.value === currentValue?.value && displayCurrentValue;
              return (
                <div
                  className={clsx(
                    `border-b px-2 py-2 ${
                      isSelected ? "bg-slate-800 text-white" : "hover:bg-slate-800 hover:text-white"
                    } `,
                    option.disabled &&
                      "bg-gray-200 text-gray-400 hover:bg-gray-200 hover:text-gray-400",
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
