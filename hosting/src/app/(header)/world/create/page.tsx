import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import { BreadCrumb } from "@/components/BreadCrumb";

export type WorldType = {
  modal?: "open" | "close";
  search?: string;
};

const page = ({ searchParams }: { searchParams: WorldType }) => {
  const openModal = searchParams.modal === "open";

  return (
    <div className="flex flex-1 flex-col">
      <BreadCrumb href="/world" leftText="世界" rightText="世界を追加" />
      <div className="pb-12 pl-4 pt-4 text-8xl">世界を追加</div>
      <div className="flex flex-1">
        <InputContainer />
      </div>
      {openModal && <div className="fixed top-20 h-20">yes</div>}
    </div>
  );
};

export default page;
