import React, { ReactNode } from "react";
import { UseFieldArrayAppend } from "react-hook-form";

import { Input } from "@/app/(header)/world/create/_component/InputContainer";

const WhiteBox = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 shrink-0 items-center justify-center bg-[#ffffff]">{children}</div>
  );
};

const RenderAddedLaws = ({
  laws,
}: {
  laws: Input["other"];
  append: UseFieldArrayAppend<Input>;
}) => {
  console.log(laws);
  if (laws.length === 0 || !laws) {
    return (
      <div className="flex h-12 w-60 flex-col shadow">
        <WhiteBox>
          <div className="">追加する</div>
        </WhiteBox>
      </div>
    );
  }
  return (
    <div>
      {laws.map((item, i) => {
        return <div className="" key={i}></div>;
      })}
    </div>
  );
};

export default RenderAddedLaws;
