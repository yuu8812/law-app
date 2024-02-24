import React, { ReactNode } from "react";
import { FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

const TextArea = <T extends FieldValues>({
  width = "w-96",
  placeHolder,
  isError = false,
  errorMessage = "入力してください",
  inputName,
  required = true,
  label,
  register,
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
  onInput?: (value: string) => void;
  onSubmit?: () => Promise<void> | void;
  disabled?: boolean;
}) => {
  const requiredOptions: RegisterOptions<T, Path<T>> | undefined = required
    ? { required: errorMessage }
    : {};

  return (
    <div className="relative flex h-fit w-full flex-1 flex-col text-sm">
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <div className="flex h-fit items-center gap-2">
        <textarea
          className={`${width} resize-none rounded ${height} h-auto max-h-[200px] overflow-scroll break-all bg-[#ffffff] p-2 tracking-widest shadow-inner transition-all hover:border-so_se_ji focus:outline-so_se_ji`}
          placeholder={placeHolder}
          {...register(inputName, { ...requiredOptions })}
        />
      </div>
      {isError && (
        <p
          className={`absolute -bottom-2 h-2 w-fit shrink-0 whitespace-nowrap pl-1 pt-1 text-[10px] text-red`}
        >
          {isError && errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextArea;
