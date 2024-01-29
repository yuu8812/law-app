import React, { ReactNode } from "react";

import TransitionProvider from "@/providers/TransitionProvider";

const template = ({ children }: { children: ReactNode }) => {
  return <TransitionProvider>{children}</TransitionProvider>;
};

export default template;
