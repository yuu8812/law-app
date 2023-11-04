import React, { ReactNode } from "react";

import SearchOptions from "@/app/(header)/laws/_components/SearchOptions";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-4 flex flex-1 justify-between text-sm">
      <SearchOptions />
      <div className="flex w-8/12">
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </div>
    </div>
  );
};

export default Template;
