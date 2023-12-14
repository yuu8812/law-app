import React from "react";

import Badge from "@/components/Badge";
import { Card } from "@/components/Card";

export type LawsPageSearchParams = {
  dir?: "asc" | "desc";
  category?: "all";
  popular?: "attention" | "comments" | "arguments";
  span?: "all" | "year" | "month" | "week" | "day";
};

async function Page({ searchParams }: { searchParams: LawsPageSearchParams }) {
  return (
    <div className="relative w-full items-center justify-center">
      <div className="mr-1 flex w-full flex-col gap-4 overscroll-y-none">
        <div className="my-6 ml-2">注目の法令</div>
        {Array.from({ length: 10 }).map((_, _i) => {
          return (
            <div className="relative flex flex-col" key={_i}>
              <div className="absolute -left-7 top-1 flex flex-col gap-4 ">
                <Badge text={"刑事"} className="border-2 border-blue/70 text-xs" />
                <Badge text={"省令"} className="border-2 border-red/70 text-xs" />
              </div>
              <Card
                className="relative min-h-[400px] p-6"
                href={{
                  pathname: "/laws/" + Math.random() * 10,
                  query: { ...searchParams },
                }}
              >
                <div className="">
                  <p className="">令和五年法律第六十七号</p>
                  <p className="pt-2 text-sm">
                    性的な姿態を撮影する行為等の処罰及び押収物に記録された性的な姿態の影像に係る電磁的記録の消去等に関する法律
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
