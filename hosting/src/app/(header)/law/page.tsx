import React from "react";

import Container from "@/app/(header)/law/_component/Container";
import PortalButton from "@/app/(header)/law/_component/PortalButton";

const page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="fixed top-0 my-1 ml-4 w-fit pt-2 text-xl font-bold">決まり一覧</div>
      <div className="mr-1 flex flex-1 justify-center gap-1">
        <Container />
      </div>
      <PortalButton />
    </div>
  );
};

export default page;
