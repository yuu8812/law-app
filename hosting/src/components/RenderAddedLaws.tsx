import Link from "next/link";
import React, { ReactNode } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";

const WhiteBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 shrink-0 items-center justify-center bg-[#ffffff] shadow">
      {children}
    </div>
  );
};

const RenderAddedLaws = ({
  laws,
  remove,
}: {
  laws: InputType["laws"];
  append: UseFieldArrayAppend<InputType>;
  remove: UseFieldArrayRemove;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {laws.map((item, i) => {
        return (
          <div className="flex flex-1 items-center gap-1" key={i + "added_laws"}>
            <div className="flex h-10">
              <WhiteBox>
                <div className="px-2">{item.text}</div>
              </WhiteBox>
            </div>
            <div onClick={() => remove(i)} className="cursor-pointer">
              <IoCloseSharp size={20} className="relative top-[1px]" />
            </div>
          </div>
        );
      })}
      <Link
        className="flex h-10 w-40 flex-col transition-all hover:border hover:border-blue"
        href={{ query: { modal: "open" } }}
        scroll={false}
      >
        <WhiteBox>
          <p className="">追加する</p>
        </WhiteBox>
      </Link>
    </div>
  );
};

export default RenderAddedLaws;
