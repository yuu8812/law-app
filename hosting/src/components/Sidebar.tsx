"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineDocument } from "react-icons/hi2";
import { TiWorld } from "react-icons/ti";

import User from "@/components/User";
import { useUser } from "@/hooks/useUser";

const Sidebar = () => {
  const [isHover, setIsHover] = useState(false);

  const { state } = useUser();

  return (
    <div className="relative top-0 z-10 h-full w-8 grow-0">
      <div
        className={`fixed left-0 top-0 flex h-full items-center justify-center transition-all ${isHover ? "w-40 bg-[#f7f9f8]" : "w-12 bg-[#f7f9f8]/50"} flex-col  shadow-xl`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`flex w-full flex-1 flex-col justify-between pb-10 pt-10 ${isHover && "relative -left-4"}`}
        >
          <div className="flex flex-col gap-2">
            <Link href="/world" className="relative -top-4 flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all`}
                >
                  <Image src={"/icon.svg"} alt="here" width={40} height={40} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} whitespace-nowrap transition-all`}
                  >
                    総政治
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/world" className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`hover:bg-so_se_ji flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:text-white`}
                >
                  <TiWorld size={30} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
                  >
                    世界
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/law" className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col">
                <div
                  className={`hover:bg-so_se_ji flex w-full shrink-0 items-center justify-center gap-2 rounded-full p-2 transition-all hover:text-white`}
                >
                  <HiOutlineDocument size={30} />
                  <p
                    className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
                  >
                    法令
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <Link href="#" className={`flex shrink-0 gap-2 rounded-full transition-all`}>
            <div
              className={`hover:bg-so_se_ji flex w-full shrink-0 items-center justify-center gap-4 overflow-hidden rounded-full p-2 py-3 transition-all duration-75 hover:text-white`}
            >
              <User id={state?.id ?? ""} url={state?.url} />
              <p
                className={`${!isHover && "absolute -translate-x-20 opacity-0"} w-10 whitespace-nowrap transition-all`}
              >
                設定
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
