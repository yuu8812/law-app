import { motion } from "framer-motion";
import { ReactNode } from "react";

const Backdrop = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 z-[50] flex h-screen w-screen flex-1 items-center justify-center bg-so_se_ji/5 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
