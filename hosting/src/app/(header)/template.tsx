import React, { ReactNode } from "react";

import MotionWrapper from "@/app/motion/MotionWrapper";

const template = ({ children }: { children: ReactNode }) => {
  return <MotionWrapper>{children}</MotionWrapper>;
};

export default template;
