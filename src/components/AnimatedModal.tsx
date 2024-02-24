import { motion } from "framer-motion";
import { ReactNode } from "react";

import Backdrop from "@/components/BackDrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const AnimateModal = ({
  handleClose,
  children,
}: {
  handleClose?: () => void;
  children: ReactNode;
}) => {
  return (
    <Backdrop onClick={handleClose && handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex h-fit w-fit items-center justify-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex h-fit w-fit flex-1">{children}</div>
      </motion.div>
    </Backdrop>
  );
};

export default AnimateModal;
