import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import { BreadCrumb } from "@/components/BreadCrumb";

const page = async () => {
  return (
    <div className="relative flex flex-1 flex-col">
      <BreadCrumb href="/world" leftText="世界" rightText="世界を追加" />
      <div className="relative flex flex-1">
        <InputContainer />
      </div>
    </div>
  );
};

export default page;
