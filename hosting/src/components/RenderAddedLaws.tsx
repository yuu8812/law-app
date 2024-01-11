import Link from "next/link";
import React, { ReactNode } from "react";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

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
  remove: UseFieldArrayRemove;
}) => {
  if (laws.length === 0 || !laws) {
    return (
      <Link
        className="flex h-10 w-40 flex-col transition-all hover:border hover:border-blue"
        href={{ query: { modal: "open" } }}
        scroll={false}
      >
        <WhiteBox>
          <div className="">追加する</div>
        </WhiteBox>
      </Link>
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
