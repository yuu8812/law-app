import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import { findLawsWhenCreateWorld } from "@/client/law";
import { BreadCrumb } from "@/components/BreadCrumb";

export type WorldType = {
  modal?: "open" | "close";
  search?: string;
  type?: "like" | "viewed" | "my_law" | "all";
};

const page = async ({ searchParams }: { searchParams: WorldType }) => {
  const openModal = searchParams.modal === "open";

  const res = openModal ? await findLawsWhenCreateWorld(searchParams) : undefined;

  return (
    <div className="flex flex-1 flex-col">
      <BreadCrumb href="/world" leftText="世界" rightText="世界を追加" />
      <div className="pb-12 pl-4 pt-4 text-2xl">世界を追加</div>
      <div className="flex flex-1">
        <InputContainer res={res} searchParams={searchParams} />
      </div>
    </div>
  );
};

export default page;
