"use client";

import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const animations: Variants[] = [
  {
    hidden: { opacity: 0, scale: 1.5 },
    enter: { opacity: 1, scale: 1 },
  },

  {
    hidden: { opacity: 0, y: "-100%" },
    enter: { opacity: 1, y: "0%" },
  },

  {
    hidden: { opacity: 0, rotate: "360deg" },
    enter: { opacity: 1, rotate: "0deg" },
  },

  {
    hidden: { opacity: 0, x: "-100%" },
    enter: { opacity: 1, x: "0%" },
  },

  {
    hidden: { opacity: 0, background: "#fff", translateX: "100%" },
    enter: { opacity: 1, translateX: "0%" },
  },
];

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const pathname = usePathname();

  return (
    <motion.div
      className="site-wrapper sticky top-0 flex flex-1 flex-col"
      variants={animations[0]}
      initial="hidden"
      animate="enter"
      transition={{
        type: "linear",
        duration: 0.5,
      }}
      key={pathname + JSON.stringify(randomAnimation)}
    >
      {children}
    </motion.div>
  );
};

export default TransitionProvider;
