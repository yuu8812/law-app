"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

import AnimateModal from "@/components/AnimatedModal";
import { useCustomModal } from "@/hooks/useCustomModal";

const CustomModal = ({
  option,
  children,
  handleClose,
}: {
  option: boolean;
  children: ReactNode;
  handleClose?: () => void;
}) => {
  const { state } = useCustomModal();
  return (
    <>
      <AnimatePresence>
        {option && state.state === "open" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ width: "content-fit", height: "content-fit" }}
          >
            <AnimateModal handleClose={handleClose}>{children}</AnimateModal>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomModal;
