"use client";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useCustomModal } from "@/hooks/useCustomModal";

const CustomModal = ({ children }: { children: ReactNode }) => {
  const {
    closeModal,
    state: { state },
  } = useCustomModal();

  if (state === "close") return null;

  const Modal = () => (
    <div
      onClick={closeModal}
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-1 cursor-default items-center justify-center bg-slate-800 bg-opacity-50"
    >
      <div className="h-fit w-fit" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  return createPortal(<Modal />, document.body);
};

export default CustomModal;
