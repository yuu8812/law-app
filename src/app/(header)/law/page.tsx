import React from "react";

import Container from "@/app/(header)/law/_component/Container";
import PortalButton from "@/app/(header)/law/_component/PortalButton";

export const metadata = {
  title: "決まり一覧",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative top-0 my-1 ml-4 w-fit pt-2 text-xl font-bold">
        <p>決まり一覧</p>
        <p className="mt-4 text-sm">ここにはあらゆる世界のあらゆる決まりが集まっています</p>
      </div>
      <div className="mr-1 flex flex-1 justify-center gap-1">
        <Container />
      </div>
      <PortalButton />
    </div>
  );
};

export default page;
