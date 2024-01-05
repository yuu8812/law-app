import React, { ReactNode } from "react";

import SearchOptions from "@/app/(header)/laws/_components/SearchOptions";
import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-4 flex flex-1 justify-between text-sm">
      <div className="sticky top-24 flex h-0 w-2/12 flex-col gap-4 pr-8">
        <SearchOptions />
      </div>
      <div className="flex w-10/12 flex-1">
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </div>
    </div>
  );
};

export default Template;
