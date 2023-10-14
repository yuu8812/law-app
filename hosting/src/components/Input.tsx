import React, { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export const Input = <T extends FieldValues>({
  width = "w-96",
  placeHolder,
  isError = false,
  errorMessage = "入力してください",
  inputName,
  type,
  required = true,
  label,
  register,
}: {
  width?: string;
  type: HTMLInputTypeAttribute;
  placeHolder?: string;
  isError?: boolean;
  errorMessage?: string;
  inputName: Path<T>;
  required?: boolean;
  label?: string;
  register: UseFormRegister<T>;
}) => {
  const requiredOptions = required ? { required: errorMessage } : {};

  return (
    <div className="relative flex flex-col text-sm">
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <input
        className={`${width} h-12 rounded border border-white px-2 tracking-widest hover:border-blue focus:outline-blue`}
        type={type}
        placeholder={placeHolder}
        {...register(inputName, requiredOptions)}
      />
      <p className={`h-2 pt-1 text-xs text-red`}>{isError && errorMessage}</p>
    </div>
  );
};
