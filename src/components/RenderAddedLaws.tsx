import React, { ReactNode, useRef } from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import LawsDrawer from "@/components/LawDrawer";

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
  setValue: ([{ law_id, text, description, law_image_url }]: InputType["laws"]) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleSubmitLaw = (laws: InputType["laws"]) => {
    setValue(laws);
    if (!ref?.current) return;
    ref?.current?.click();
  };
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
      <LawsDrawer
        laws={laws}
        handleSubmitLaw={handleSubmitLaw}
        buttonText="追加する"
        description="追加する決まりを選択してください"
        title="あなたの世界に決まりを追加"
      >
        <WhiteBox>
          <button
            className="flex h-10 w-40 flex-col items-center justify-center rounded bg-[#ffffff] shadow-sm transition-all md:hover:border md:hover:bg-so_se_ji md:hover:text-white"
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
