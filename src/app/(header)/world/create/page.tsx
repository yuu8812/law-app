import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import { BreadCrumb } from "@/components/BreadCrumb";

const page = async () => {
  return (
    <div className="relative flex flex-1 flex-col pt-2">
      <BreadCrumb href="/world" leftText="地域" rightText="地域を追加" />
      <div className="relative flex flex-1">
        <InputContainer />
      </div>
    </div>
  );
};

export default page;
