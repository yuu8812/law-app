"use client";
import React from "react";

import { useDefaultModal } from "@/hooks/useDefaultModalStore";

const Modal = () => {
  const {
    closeModal,
    state: { children, state },
  } = useDefaultModal();

  if (state === "close" || !children) return null;

  return (
    <div
      onClick={closeModal}
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-1 cursor-default items-center justify-center bg-slate-800 bg-opacity-50"
    >
      <div className="h-fit w-fit" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
