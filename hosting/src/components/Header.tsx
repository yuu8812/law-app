import { faUser, faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const userData = async (): Promise<DecodedIdToken | null> => {
  const data = await fetch("http://localhost:3000/api", {
    method: "get",
    credentials: "include",
    headers: { Cookie: cookies().toString() },
  });
  if (data.ok) return data.json();
  return null;
};

const LINK_LIST = [
  { NAME: "法令", HREF: "/party" },
  { NAME: "議論", HREF: "/laws" },
  { NAME: "政党", HREF: "/party" },
  { NAME: "議員", HREF: "/laws" },
];

export const Header = async () => {
  const data = await userData();
  console.log(data);
  return (
    <div className="sticky top-2 z-10 mb-6 flex h-16 w-[98%] items-center self-center rounded-full bg-slate-800 text-white shadow-md">
      <Link className="ml-6 p-2" href="/">
        総政治
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
        <Link className="flex h-8 w-8 items-center justify-center gap-2 rounded-full" href="/">
          <FontAwesomeIcon icon={faUser} height={16} className="relative z-10" />
        </Link>
      </div>
    </div>
  );
};
