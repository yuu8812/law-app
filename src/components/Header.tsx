"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineDocument } from "react-icons/hi2";
import { TiWorld } from "react-icons/ti";

import User from "@/components/User";
import { useUser } from "@/hooks/useUser";

const Header = () => {
  const { state } = useUser();
  const pathname = usePathname();
  return (
    <div className="fixed z-10 flex h-12 w-full flex-1 items-center justify-around bg-white shadow md:hidden">
      <Link
        className={`rounded-full p-2 transition-all ${pathname.includes("world") && "bg-so_se_ji text-white"}`}
        href="/world"
      >
        <TiWorld size={30} />
      </Link>
      <Link
        href="/law"
        className={`rounded-full p-2 transition-all ${pathname.includes("law") && "bg-so_se_ji text-white"}`}
      >
        <HiOutlineDocument size={30} />
      </Link>
      {state?.id ? (
        <Link href="/user" className={`flex shrink-0 gap-2 rounded-full transition-all`}>
          <div
            className={`flex w-full shrink-0 items-center justify-center gap-4 overflow-hidden rounded-full p-2 transition-all duration-75 ${pathname.includes("user") && "bg-so_se_ji text-white"}`}
          >
            <User id={state?.id ?? ""} url={state?.url ?? "/user.svg"} />
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
