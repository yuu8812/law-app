import React, { ReactNode } from "react";
import { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

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
  height = "min-h-10",
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
  const requiredOptions: RegisterOptions<T, Path<T>> | undefined = required
    ? { required: errorMessage }
    : {};

  return (
    <div className="relative flex max-h-40 w-full flex-1 flex-col text-sm">
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <div className="flex items-center">
        {Icon && <div className="absolute left-2 top-[10px] rotate-90 self-start">{Icon}</div>}
        <textarea
          className={`${width} ${
            Icon && "pl-8"
          } rounded ${height} mt-[2px] resize-none border border-white p-2 tracking-widest shadow-inner transition-all hover:border-blue focus:outline-blue`}
          placeholder={placeHolder}
          {...register(inputName, requiredOptions)}
          disabled={disabled || loading}
        />
      </div>
      {isError && <p className={`h-2 pt-1 text-xs text-red`}>{isError && errorMessage}</p>}
    </div>
  );
};
