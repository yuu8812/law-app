import React from "react";

import Container from "@/app/(header)/law/create/_component/Container";
import { BreadCrumb } from "@/components/BreadCrumb";

const page = () => {
  return (
    <div className="flex flex-1 flex-col pt-1">
      <BreadCrumb href="/law" leftText="決まり" rightText="決まりを追加" />
      <div className="relative flex flex-1 p-4">
        <Container />
      </div>
    </div>
  );
};

export default page;
