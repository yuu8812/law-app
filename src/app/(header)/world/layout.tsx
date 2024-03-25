import React, { ReactNode, Suspense } from "react";

import DefaultLoading from "@/components/DefaultLoading";

const layout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<DefaultLoading />}>{children}</Suspense>;
};

export default layout;
