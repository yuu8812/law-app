import clsx from "clsx";
import Link from "next/link";
import queryString from "query-string";
import React from "react";

const SearchOptions = ({ searchParams }: { searchParams: LawsPageSearchParams }) => {
  return (
    <div className="sticky top-20 flex h-40 w-80 flex-col gap-4 ">
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1 ",
            (searchParams.dir === "asc" || !searchParams.dir) && "border-blue",
          )}
          href="/laws?dir=asc"
        >
          降
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            searchParams.dir === "desc" && "border-blue",
          )}
          href="/laws?dir=desc"
        >
          昇
        </Link>
      </div>
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            searchParams.popular === "attention" && "border-blue",
          )}
          href="/laws?dir=desc"
        >
          注目度
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            searchParams.popular === "comments" && "border-blue",
          )}
          href="/laws?dir=desc"
        >
          コメント数
        </Link>
        <Link
          className={clsx(
            "flex w-20 items-center justify-center rounded border py-1",
            searchParams.popular === "arguments" && "border-blue",
          )}
          href={`laws?${queryString.stringify(searchParams).replace("asc", "desc")}`}
        >
          議論数
        </Link>
      </div>
      <div className="flex justify-around">
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            searchParams.dir === "desc" && "border-blue",
          )}
          href={`laws?${queryString.stringify(searchParams).replace("asc", "desc")}`}
        >
          全て
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            searchParams.dir === "desc" && "border-blue",
          )}
          href={`laws?${queryString.stringify(searchParams).replace("asc", "desc")}`}
        >
          月
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            searchParams.dir === "desc" && "border-blue",
          )}
          href="/laws?dir=desc"
        >
          週
        </Link>
        <Link
          className={clsx(
            "flex w-12 items-center justify-center rounded border py-1",
            searchParams.dir === "desc" && "border-blue",
          )}
          href="/laws?dir=desc"
        >
          日
        </Link>
      </div>
    </div>
  );
};

export default SearchOptions;
