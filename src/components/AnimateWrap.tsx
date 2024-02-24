"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React, { ReactNode, memo } from "react";

const dropIn: Variants = {
  hidden: {
    // y: "200px",
    opacity: 0,
  },
  visible: {
    // y: "0",
    opacity: 1,
  },
  exit: {
    // y: "-200px",
    opacity: 0,
  },
};

const AnimateWrap = memo(({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full flex-1 items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-fill flex h-full flex-1 overflow-hidden">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
});

AnimateWrap.displayName = "AnimateWrap";

export default AnimateWrap;
