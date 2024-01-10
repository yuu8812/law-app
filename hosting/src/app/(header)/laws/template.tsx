import React, { ReactNode } from "react";

import { SuspenseWrapper } from "@/components/SuspenseWrapper";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-4 flex flex-1 justify-between gap-2 text-sm">
      <div className="flex flex-1">
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </div>
    </div>
  );
};

export default Template;
