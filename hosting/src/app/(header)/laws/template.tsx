import React, { ReactNode } from "react";

import Ads from "@/app/(header)/laws/_components/Ads";
import SearchOptions from "@/app/(header)/laws/_components/SearchOptions";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-4 flex flex-1 justify-between text-sm">
      <SearchOptions />
      <div className="flex max-w-[500px] flex-1">
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </div>
      <Ads />
    </div>
  );
};

export default Template;
