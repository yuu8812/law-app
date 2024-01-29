import React, { ReactNode } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";

const WhiteBox = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-1">{children}</div>;
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
          <WhiteBox key={i + "added_laws"}>
            <div className="flex flex-1 items-center gap-1 bg-[#ffffff] shadow">
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
          className="flex h-10 w-40 flex-col items-center justify-center !bg-[#ffffff] shadow transition-all hover:border hover:border-blue"
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
