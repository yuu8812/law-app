import React, { ReactNode } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";

const WhiteBox = ({ children, shadow }: { children: ReactNode; shadow?: boolean }) => {
  return (
    <div className={`flex w-fit rounded bg-[#ffffff] ${shadow && "border shadow-inner"}`}>
      {children}
    </div>
  );
};

const RenderAddedLaws = ({
  laws,
  remove,
  onClick,
}: {
  laws: InputType["laws"];
  append: UseFieldArrayAppend<InputType>;
  remove: UseFieldArrayRemove;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {laws.map((item, i) => {
        return (
          <WhiteBox key={i + "added_laws"} shadow>
            <div className="flex flex-1 items-center gap-1 rounded border bg-[#ffffff]">
              <div className="flex h-10 items-center justify-center">
                <div className="px-2">{item.text}</div>
              </div>
              <div onClick={() => remove(i)} className="cursor-pointer pr-1">
                <IoCloseSharp size={20} className="relative top-[1px]" />
              </div>
            </div>
          </WhiteBox>
        );
      })}
      <WhiteBox>
        <button
          className="flex h-10 w-40 flex-col items-center justify-center rounded bg-[#ffffff] shadow-sm transition-all hover:border hover:bg-blue hover:text-white"
          onClick={onClick}
          type="button"
        >
          <p className="">追加する</p>
        </button>
      </WhiteBox>
    </div>
  );
};

export default RenderAddedLaws;
