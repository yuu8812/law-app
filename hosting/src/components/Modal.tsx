import Link from "next/link";
import React, { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      href={{ query: { modal: "close" } }}
      replace
      scroll={false}
      className="fixed left-0 top-0 z-50 flex h-full w-full flex-1 cursor-default items-center justify-center bg-slate-800 bg-opacity-50"
    >
      {children}
    </Link>
  );
};

export default Modal;
