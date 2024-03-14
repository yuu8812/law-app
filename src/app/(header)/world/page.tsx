import React from "react";

import Container from "@/app/(header)/world/_component/Container";
import PortalButton from "@/app/(header)/world/_component/PortalButton";

export const metadata = {
  title: "世界一覧",
};

const page = async () => {
  return (
    <div className="relative flex flex-1 flex-col">
      <PortalButton />
      <div className="my-2 ml-4 pt-1 text-xl font-bold">
        <p>世界一覧</p>
        <p className="mt-4 text-sm">
          ここには様々な世界が掲載されています。素晴らしい世界を見つけてみましょう
        </p>
      </div>
      <Container />
    </div>
  );
};

export default page;
