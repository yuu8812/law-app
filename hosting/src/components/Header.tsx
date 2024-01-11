import { faUser, faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const LINK_LIST = [
  { NAME: "世界", HREF: "/world" },
  { NAME: "法令", HREF: "/laws" },
  { NAME: "議論", HREF: "/laws" },
  { NAME: "政党", HREF: "/laws" },
  { NAME: "議員", HREF: "/laws" },
];

export const Header = async () => {
  return (
    <div className="sticky top-2 z-50 mb-4 flex w-[98%] items-center self-center bg-cyan-900 py-3 text-white">
      <Link className="ml-6 pb-2 text-4xl" href="/">
        ga-ga
      </Link>
      <div className="flex h-full gap-4 pl-20 text-sm font-500 ">
        {LINK_LIST.map((LINK, _i) => {
          return (
            <Link
              key={_i}
              href={LINK.HREF}
              className={clsx(
                "flex h-full items-center justify-center px-4 transition-all hover:bg-slate-300 hover:text-slate-950",
              )}
            >
              {LINK.NAME}
            </Link>
          );
        })}
      </div>
      <div className="absolute right-4 mr-6 flex gap-6">
        <Link className="flex items-center justify-center gap-2" href="/">
          <FontAwesomeIcon icon={faBell} height={18} />
        </Link>
        <Link className="-full flex h-8 w-8 items-center justify-center gap-2" href="/">
          <FontAwesomeIcon icon={faUser} height={16} className="relative z-10" />
        </Link>
      </div>
    </div>
  );
};
