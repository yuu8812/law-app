import React, { HTMLInputTypeAttribute, ReactNode } from "react";
import { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

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
  Icon,
  disabled,
  loading,
  height = "h-12",
  onChange,
}: {
  width?: string;
  height?: string;
  type: HTMLInputTypeAttribute;
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
  onChange?: () => void;
}) => {
  const onChangeOption: RegisterOptions<T, Path<T>> | undefined = {
    onChange,
  };

  const requiredOptions: RegisterOptions<T, Path<T>> | undefined = required
    ? { required: errorMessage, ...onChangeOption }
    : { ...onChangeOption };

  return (
    <div className="relative flex flex-col text-sm">
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <div className="flex items-center">
        <div className="absolute left-2 rotate-90">{Icon && Icon}</div>
        <input
          className={`${width} ${
            Icon && "pl-8"
          } ${height} rounded border-white px-2 tracking-widest shadow-inner transition-all hover:border-blue focus:outline-blue`}
          type={type}
          placeholder={placeHolder}
          {...register(inputName, requiredOptions)}
          disabled={disabled || loading}
        />
      </div>
      <p className={`h-2 pl-1 pt-1 text-xs text-red`}>{isError && errorMessage}</p>
    </div>
  );
};
