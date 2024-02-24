import { Variants, motion } from "framer-motion";
import React from "react";

const ContainerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
      duration: 0.1,
    },
  },
};

const DotVariants: Variants = {
  initial: {
    y: "0",
  },
  animate: {
    y: "10px",
  },
};

const DotsWave = () => {
  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.span className="block h-2 w-2 rounded-full bg-so_se_ji" variants={DotVariants} />
        <motion.span className="block h-2 w-2 rounded-full bg-so_se_ji" variants={DotVariants} />
        <motion.span className="block h-2 w-2 rounded-full bg-so_se_ji" variants={DotVariants} />
      </motion.div>
    </div>
  );
};

export default DotsWave;
