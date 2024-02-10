"use client";
import React, { ReactNode, memo } from "react";
import { createPortal } from "react-dom";

import { useCustomModal } from "@/hooks/useCustomModal";

const CustomModal = memo(({ children }: { children: ReactNode }) => {
  const {
    closeModal,
    state: { state },
  } = useCustomModal();

  if (state === "close") return null;

  const Modal = () => (
    <div
      onClick={(e) => {
        e.preventDefault();
        closeModal();
      }}
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-1 cursor-default items-center justify-center bg-slate-800 bg-opacity-50"
    >
      <div
        className="h-fit w-fit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(<Modal />, document.body);
});

CustomModal.displayName = "CustomModal";

export default CustomModal;
