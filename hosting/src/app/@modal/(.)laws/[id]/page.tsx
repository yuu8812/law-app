import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { getClient } from "@/api/client";
import Badge from "@/components/Badge";
import { Card } from "@/components/Card";
import DescribeSwitcher from "@/components/DescribeSwitcher";
import { MyQueryDocument } from "@/graphql/type";

export type ModalSearchParams = { describe: "main" | "toc"; nav: "open" | "close" };

const res = async () => {
  const res = await getClient().query({ query: MyQueryDocument });
  return res;
};

const page = async ({ searchParams }: { searchParams: ModalSearchParams }) => {
  console.log(JSON.stringify(await res()));
  return (
    <div className="relative h-full w-full">
      <div className="absolute -left-8 top-0 flex flex-col gap-2">
        <Badge text={"刑事"} className="border-2 border-orange-300/70 bg-white" />
        <Badge text={"省令"} className="border-2 border-red/70 bg-white" />
      </div>
      <Card className="relative m-2 flex h-full w-full flex-1 shadow-2xl">
        <div
          className={clsx("flex transition-all", searchParams.nav === "close" ? "w-0" : "w-[27%]")}
        >
          <div className={clsx("relative top-0 h-full flex-1")}>
            <DescribeSwitcher searchParams={searchParams} />
          </div>
        </div>
        <Link
          className="relative left-0 flex w-6 items-center justify-center"
          href={{
            query: {
              ...searchParams,
              nav: searchParams.nav === "close" ? "open" : "close",
            } as ModalSearchParams,
          }}
          replace
        >
          {searchParams.nav === "close" ? ">" : "<"}
        </Link>
      </Card>
    </div>
  );
};

export default page;
