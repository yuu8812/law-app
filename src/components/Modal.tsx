import React, { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="top-o left-o fixed z-50 flex h-screen w-screen items-center justify-center bg-so_se_ji/5 backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
};

export default Modal;
