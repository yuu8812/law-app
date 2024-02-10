import React from "react";

import Container from "@/app/(header)/law/_component/Container";

const page = async () => {
  // const res = await fetch("https://elaws.e-gov.go.jp/api/1/lawdata/123AC0000000001");
  // const text = await res.text();
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative my-1 ml-4 w-fit pt-2 text-xl font-bold">法令一覧</div>
      <div className="flex flex-1">
        <Container />
      </div>
    </div>
  );
};

export default page;
