"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode, memo, useMemo } from "react";

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
  const pathName = usePathname();
  const memoedPathName = useMemo(() => pathName, [pathName]);
  return (
    <AnimatePresence>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full flex-1 items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={memoedPathName}
      >
        <div className="w-fill flex h-full flex-1 overflow-hidden">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
});

AnimateWrap.displayName = "AnimateWrap";

export default AnimateWrap;
