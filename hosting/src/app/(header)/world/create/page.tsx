import React from "react";

import InputContainer from "@/app/(header)/world/create/_component/InputContainer";
import SearchLawModal from "@/app/(header)/world/create/_component/SearchLawModal";
import { BreadCrumb } from "@/components/BreadCrumb";
import Modal from "@/components/Modal";

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
      {openModal && (
        <Modal>
          <SearchLawModal searchParams={searchParams} />
        </Modal>
      )}
    </div>
  );
};

export default page;
