"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const AnimationProvider = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="relative top-0 flex flex-1 flex-col gap-2 overflow-hidden"
      initial={{ background: "red", opacity: 0 }}
      animate={{ background: "pink", opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationProvider;
