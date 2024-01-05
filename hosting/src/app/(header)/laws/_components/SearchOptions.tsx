"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import React from "react";
import { BiSortAlt2, BiTime } from "react-icons/bi";
import { FaFire } from "react-icons/fa";

import { LawsPageSearchParams } from "@/app/(header)/laws/page";

const SearchOptions = () => {
  const sp = useSearchParams();
  const parsed: LawsPageSearchParams = queryString.parse(sp.toString());

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="text-md my-2 flex items-center gap-4 font-semibold">
        <p className="">並び替え順</p>
        <BiSortAlt2 className="relative top-[2px]" size={22} />
      </div>
      <Link
        className={clsx(
          "h-5 w-fit",
          (parsed.dir === "asc" || !parsed.dir) && "border-b border-blue",
        )}
        href={{ pathname: "/laws", query: { ...parsed, dir: "asc" } as LawsPageSearchParams }}
        replace
      >
        降
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.dir === "desc" && "border-b border-blue")}
        replace
        href={{ pathname: "/laws", query: { ...parsed, dir: "desc" } as LawsPageSearchParams }}
      >
        昇
      </Link>
      <div className="text-md my-2 flex items-center gap-4 font-semibold">
        <p className="">人気</p>
        <FaFire />
      </div>
      <Link
        className={clsx(
          "h-5 w-fit",
          (parsed.popular === "attention" || !parsed.popular) && "border-b border-blue",
        )}
        replace
        href={{
          pathname: "/laws",
          query: { ...parsed, popular: "attention" } as LawsPageSearchParams,
        }}
      >
        注目度
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.popular === "comments" && "border-b border-blue")}
        replace
        href={{
          pathname: "/laws",
          query: { ...parsed, popular: "comments" } as LawsPageSearchParams,
        }}
      >
        コメント数
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.popular === "arguments" && "border-b border-blue")}
        replace
        href={{
          pathname: "/laws",
          query: { ...parsed, popular: "arguments" } as LawsPageSearchParams,
        }}
      >
        議論数
      </Link>
      <div className="text-md my-2 flex items-center gap-4 font-semibold">
        <p className="">期間</p>
        <BiTime size={18} className="relative top-[1px]" />
      </div>
      <Link
        className={clsx(
          "h-5 w-fit",
          (parsed.span === "all" || !parsed.span) && "border-b border-blue",
        )}
        replace
        href={{ pathname: "/laws", query: { ...parsed, span: "all" } as LawsPageSearchParams }}
      >
        全て
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.span === "month" && "border-b border-blue")}
        replace
        href={{ pathname: "/laws", query: { ...parsed, span: "month" } as LawsPageSearchParams }}
      >
        月
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.span === "week" && "border-b border-blue")}
        replace
        href={{ pathname: "/laws", query: { ...parsed, span: "week" } as LawsPageSearchParams }}
      >
        週
      </Link>
      <Link
        className={clsx("h-5 w-fit", parsed.span === "day" && "border-b border-blue")}
        replace
        href={{ pathname: "/laws", query: { ...parsed, span: "day" } as LawsPageSearchParams }}
      >
        日
      </Link>
    </div>
  );
};

export default SearchOptions;
