import React, { Dispatch, KeyboardEvent, SetStateAction, useRef, useState } from "react";

import { Button } from "@/components/Button";

const TA = ({
  width = "w-96",
  placeHolder,
  isError = false,
  errorMessage = "入力してください",
  label,
  height = "min-h-10",
  onSubmit,
  disabled,
  buttonTitle,
  value,
  setValue,
  buttonDisabled,
}: {
  width?: string;
  height?: string;
  placeHolder?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  label?: string;
  buttonTitle?: string;
  onSubmit?: () => Promise<void> | void;
  disabled?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  buttonDisabled?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [focus, setFocus] = useState(false);

  const handleKeyUp = async (e: KeyboardEvent<HTMLDivElement>) => {
    if (ref.current) {
      setValue(e?.currentTarget.innerText ?? "");
    }
    JSON.stringify(value);
  };

  const handleSubmit = async () => {
    if (disabled) return;
    onSubmit && (await onSubmit());
    setValue("");
    if (!ref.current) return;
    ref.current.innerHTML = "";
  };

  return (
    <div
      className="relative flex h-fit w-full flex-1 flex-col text-sm"
      onFocus={() => setFocus(true)}
    >
      {label && <p className="pb-1 pl-1 text-xs">{label}</p>}
      <div className="flex h-fit items-center gap-2">
        {!value && <div className="absolute pl-2 text-sm text-gray-400">コメントする</div>}
        <div
          className={`${width} ${height} relative z-10 h-auto max-h-[200px] overflow-scroll break-all border-b ${focus && `border-slate-900`} bg-transparent p-2 tracking-widest outline-none transition-all`}
          placeholder={placeHolder}
          role="textbox"
          contentEditable
          onKeyUp={handleKeyUp}
          tabIndex={-1}
          ref={ref}
        />
      </div>
      {(focus || value) && (
        <div className="self-end p-2" onClick={handleSubmit}>
          <Button text={buttonTitle} width="w-32" disabled={buttonDisabled} />
        </div>
      )}
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

export default TA;
