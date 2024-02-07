"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { createPortal } from "react-dom";

const SwitchType = () => {
  const pathname = usePathname();
  return createPortal(
    <div className="fixed top-1 flex h-fit gap-2">
      <Link
        className={clsx(
          "shrink-0 rounded border border-[#000] bg-[#ffffff] p-1 px-6 hover:bg-blue hover:text-[#ffffff]",
          pathname.includes("description") && "bg-blue text-[#ffffff]",
        )}
        href={`${pathname.replace("chat", "description")}`}
        replace
      >
        世界について
      </Link>
      <Link
        className={clsx(
          "shrink-0 rounded border border-[#000] bg-[#ffffff] p-1 px-6 hover:bg-blue hover:text-[#ffffff]",
          pathname.includes("chat") && "bg-blue text-[#ffffff]",
        )}
        href={`${pathname.replace("description", "chat")}`}
        replace
      >
        チャット
      </Link>
    </div>,
    document.body,
  );
};

export default SwitchType;
