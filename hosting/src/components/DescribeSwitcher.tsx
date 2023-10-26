import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { ModalSearchParams } from "@/app/@modal/(.)laws/[id]/page";

const DescribeSwitcher = ({ searchParams }: { searchParams: ModalSearchParams }) => {
  return (
    <div className="absolute -top-9 flex items-center justify-center gap-1">
      <Link
        className={clsx(
          "flex h-7 w-20 shrink-0 items-center justify-center border-white bg-slate-800 text-sm text-white shadow transition-all",
          searchParams.describe !== "toc" && "h-8 border-b-2",
        )}
        href={{ query: { ...searchParams, describe: "main" } as ModalSearchParams }}
        replace
      >
        本文
      </Link>
      <Link
        className={clsx(
          "flex h-7 w-20 shrink-0 items-center justify-center border-white bg-slate-800 text-sm text-white shadow transition-all",
          searchParams.describe === "toc" && "h-8 border-b-2",
        )}
        href={{ query: { ...searchParams, describe: "toc" } as ModalSearchParams }}
        replace
      >
        目次
      </Link>
    </div>
  );
};

export default DescribeSwitcher;
