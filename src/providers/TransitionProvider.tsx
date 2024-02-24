"use client";

import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode, useMemo } from "react";

const animations: Variants[] = [
  {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  },
];

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const memoedPathname = useMemo(() => pathname, [pathname]);

  return (
    <motion.div
      className="sticky top-0 flex flex-1 flex-col overflow-hidden"
      variants={animations[0]}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      key={memoedPathname}
    >
      {children}
    </motion.div>
  );
};

export default TransitionProvider;
