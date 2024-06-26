import React from "react";

import Container from "@/app/(header)/world/_component/Container";
import PortalButton from "@/app/(header)/world/_component/PortalButton";

export const metadata = {
  title: "地域一覧",
};

const page = async () => {
  return (
    <div className="flex flex-1 flex-col">
      <PortalButton />
      <div className="mx-4 my-2 flex flex-col pt-1 text-xl font-bold">
        <p>地域一覧</p>
        <p className="mt-4 text-sm">
          ここには様々な地域が掲載されています。素晴らしい地域を見つけてみましょう
        </p>
      </div>
      <div className="flex flex-1 md:items-center md:justify-center">
        <Container />
      </div>
    </div>
  );
};

export default page;
