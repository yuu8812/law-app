"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import usePreventDefaultIfUnAuth from "@/hooks/usePreventDefaultIfUnAuth";

const PortalButton = () => {
  const [hover, setHover] = useState(false);
  const { redirect } = usePreventDefaultIfUnAuth();

  return (
    <>
      <div
        className="fixed bottom-10 right-10 z-10"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          onClick={redirect}
          href="/world/create"
          className={`hidden h-14 w-14 flex-1 items-center justify-center overflow-hidden bg-so_se_ji transition-all md:flex ${hover && "w-48 justify-between"} rounded`}
        >
          <div
            className={`relative z-10 h-full w-32 shrink-0 items-center justify-center overflow-hidden font-bold text-white delay-75 ${hover ? "flex opacity-100" : "hidden"}`}
          >
            <p className="relative z-50 text-white">地域を追加</p>
          </div>
          <div className="flex w-16 items-center justify-center opacity-100">
            <FaPlus size={24} color="white" />
          </div>
        </Link>
        <Link
          onClick={redirect}
          href="/world/create"
          className={`flex h-14 w-14 flex-1 items-center justify-center overflow-hidden rounded bg-so_se_ji transition-all md:hidden`}
        >
          <div className="flex w-16 items-center justify-center opacity-100">
            <FaPlus size={24} color="white" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default PortalButton;
