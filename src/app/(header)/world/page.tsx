import React from "react";

import Container from "@/app/(header)/world/_component/Container";
import PortalButton from "@/app/(header)/world/_component/PortalButton";

export const revalidate = 0;

const page = async () => {
  return (
    <div className="relative flex flex-1 flex-col">
      <PortalButton />
      <div className="my-2 ml-4 pt-1 text-xl font-bold">世界一覧</div>
      <Container />
    </div>
  );
};

export default page;
