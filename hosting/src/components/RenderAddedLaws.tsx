import React, { ReactNode } from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import LawsDrawer from "@/app/(header)/world/_component/LawDrawer";
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
  setValue,
}: {
  laws: InputType["laws"];
  remove: UseFieldArrayRemove;
  onClick: () => void;
  setValue: ([{ law_id, text }]: { law_id: string; text: string }[]) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {laws.map((item, i) => {
        return (
          <WhiteBox key={i + "added_laws"} shadow>
            <div className="flex flex-1 items-center gap-1 rounded">
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
      <LawsDrawer setValue={setValue} laws={laws}>
        <WhiteBox>
          <button
            className="hover:bg-so_se_ji flex h-10 w-40 flex-col items-center justify-center rounded bg-[#ffffff] shadow-sm transition-all hover:border hover:text-white"
            onClick={onClick}
            type="button"
          >
            <p className="">追加する</p>
          </button>
        </WhiteBox>
      </LawsDrawer>
    </div>
  );
};

export default RenderAddedLaws;
