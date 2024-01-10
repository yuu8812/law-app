import React from "react";

import { BreadCrumb } from "@/components/BreadCrumb";

const page = () => {
  return (
    <div>
      <BreadCrumb href="/create" leftText="世界" rightText="世界を追加" />
      <div className="pb-6 pl-4 text-8xl">世界を追加</div>
      <div className=""></div>
    </div>
  );
};

export default page;
