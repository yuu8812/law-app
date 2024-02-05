"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiWorld } from "react-icons/ti";

import { useUser } from "@/hooks/useUser";

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false);

  const { state } = useUser();

  return (
    <div className="relative top-0 z-50 h-full w-4 grow-0">
      <div
        className={`fixed left-0 top-0 flex h-full items-center justify-center transition-all ${isHover ? "w-40" : "w-10"} flex-col bg-[#f7f9f8] shadow-xl`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={`flex w-full flex-1 flex-col pb-10 pt-10 ${isHover && "relative -left-4"}`}>
          <Link href="#" className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-col">
              <div
                className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:bg-blue hover:text-white`}
              >
                <TiWorld size={25} />
                <p className={`${isHover ? "w-10" : "hidden w-0"}  shrink-0`}>世界</p>
              </div>
            </div>
          </Link>
          <Link href="#" className={`flex shrink-0 gap-2 rounded-full transition-all`}>
            <div
              className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:bg-blue hover:text-white`}
            >
              <Image
                width={22}
                height={22}
                alt="icon"
                src={state?.url ?? ""}
                className="rounded-full border border-black"
              />
              <p className={`${isHover ? "w-10" : "hidden w-0"}  shrink-0`}>設定</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
