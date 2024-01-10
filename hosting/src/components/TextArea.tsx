import React, { ReactNode } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export const TextArea = <T extends FieldValues>({
  width = "w-96",
  placeHolder,
  isError = false,
  errorMessage = "入力してください",
  inputName,
  required = true,
  label,
  register,
  Icon,
  disabled,
  loading,
  height = "h-12",
}: {
  width?: string;
  height?: string;
  placeHolder?: string;
  isError?: boolean;
  errorMessage?: string;
  inputName: Path<T>;
  required?: boolean;
  label?: string;
  register: UseFormRegister<T>;
  Icon?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}) => {
  const requiredOptions = required ? { required: errorMessage } : {};

  return (
    <div className="relative flex flex-col text-sm">
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <div className="flex items-center">
        <div className="absolute left-2 rotate-90">{Icon && Icon}</div>
        <textarea
          className={`${width} ${
            Icon && "pl-8"
          } ${height} resize-none border border-white p-2 tracking-widest hover:border-blue focus:outline-blue`}
          placeholder={placeHolder}
          {...register(inputName, requiredOptions)}
          disabled={disabled || loading}
        />
      </div>
      <p className={`h-2 pt-1 text-xs text-red`}>{isError && errorMessage}</p>
    </div>
  );
};
