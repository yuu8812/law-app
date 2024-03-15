import React from "react";

import Container from "@/app/(header)/user/_component/Container";

export const metadata = {
  title: "ユーザー情報",
};

const Page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="p-4">
        <div className="text-xl font-bold">ユーザー情報</div>
      </div>
      <Container />
    </div>
  );
};

export default Page;
