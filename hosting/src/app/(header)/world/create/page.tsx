import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import { BreadCrumb } from "@/components/BreadCrumb";

const page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <BreadCrumb href="/world" leftText="世界" rightText="世界を追加" />
      <div className="pb-8 pl-4 pt-2 text-8xl">世界を追加</div>
      <div className="flex flex-1">
        <InputContainer />
      </div>
    </div>
  );
};

export default page;
