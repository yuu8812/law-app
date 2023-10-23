"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import React from "react";

const SearchOptions = () => {
  const sp = useSearchParams();
  const parsed: LawsPageSearchParams = queryString.parse(sp.toString());

  return (
    <div className="sticky top-20 flex h-40 w-80 flex-col gap-4 ">
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            (parsed.dir === "asc" || !parsed.dir) && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, dir: "asc" } as LawsPageSearchParams }}
        >
          降
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            parsed.dir === "desc" && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, dir: "desc" } as LawsPageSearchParams }}
        >
          昇
        </Link>
      </div>
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            (parsed.popular === "attention" || !parsed.popular) && "border-blue",
          )}
          href={{
            pathname: "/laws",
            query: { ...parsed, popular: "attention" } as LawsPageSearchParams,
          }}
        >
          注目度
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            parsed.popular === "comments" && "border-blue",
          )}
          href={{
            pathname: "/laws",
            query: { ...parsed, popular: "comments" } as LawsPageSearchParams,
          }}
        >
          コメント数
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            parsed.popular === "arguments" && "border-blue",
          )}
          href={{
            pathname: "/laws",
            query: { ...parsed, popular: "arguments" } as LawsPageSearchParams,
          }}
        >
          議論数
        </Link>
      </div>
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            (parsed.span === "all" || !parsed.span) && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, span: "all" } as LawsPageSearchParams }}
        >
          全て
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            parsed.span === "month" && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, span: "month" } as LawsPageSearchParams }}
        >
          月
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            parsed.span === "week" && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, span: "week" } as LawsPageSearchParams }}
        >
          週
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            parsed.span === "day" && "border-blue",
          )}
          href={{ pathname: "/laws", query: { ...parsed, span: "day" } as LawsPageSearchParams }}
        >
          日
        </Link>
      </div>
    </div>
  );
};

export default SearchOptions;
