"use client";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa";

const PortalButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      {createPortal(
        <div
          className="fixed right-10 top-20"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Link
            href="/world/create"
            className={`flex h-14 w-14 flex-1 items-center justify-center overflow-hidden bg-cyan-900 transition-all ${hover && "w-40 justify-between"}`}
          >
            <div
              className={`relative z-10 h-full w-28 shrink-0 items-center justify-center overflow-hidden font-bold text-white delay-75 ${hover ? "flex opacity-100" : "hidden"}`}
            >
              <p className="relative z-50 text-white">世界を追加</p>
            </div>
            <div className="flex w-16 items-center justify-center opacity-100">
              <FaPlus size={24} color="white" />
            </div>
          </Link>
        </div>,
        document?.body,
      )}
    </>
  );
};

export default PortalButton;
