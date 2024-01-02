import clsx from "clsx";
import React, { Suspense } from "react";
import { LuBookmarkPlus } from "react-icons/lu";

import ArgumentCard from "@/app/(header)/laws/_components/ArgumentCard";
import CommentsCard from "@/app/(header)/laws/_components/CommentsCard";
import LawReaction from "@/app/(header)/laws/_components/LawReaction";
import SummaryCard from "@/app/(header)/laws/_components/SummaryCard";
import { findLaws } from "@/client/law";
import Badge from "@/components/Badge";
import { Card } from "@/components/Card";
import DefaultLoading from "@/components/DefaultLoading";

export type LawsPageSearchParams = {
  dir?: "asc" | "desc";
  category?: "all";
  popular?: "attention" | "comments" | "arguments";
  span?: "all" | "year" | "month" | "week" | "day";
  page?: number;
};

async function Page() {
  const res = await findLaws({});
  return (
    <div className="relative flex w-full justify-center">
      <div className="mr-1 flex w-10/12 flex-col gap-10 overscroll-y-none">
        <div className="ml-2 mt-6">注目の法令</div>
        {res.laws.map((law, _i) => {
          return (
            <div className="relative flex flex-col" key={_i}>
              <div className="absolute -left-7 top-1 flex flex-col gap-4 ">
                <Badge
                  text={law.law_revisions[0].law_type.type_name}
                  className="border-2 border-blue/70 text-xs"
                  vertical
                />
                <Badge
                  text={law.law_revisions[0].law_category.category_name}
                  className="border-2 border-red/70 text-xs"
                  vertical
                />
              </div>
              <div className="absolute -left-8 bottom-1 flex flex-col gap-4 ">
                <LuBookmarkPlus size={30} color="#616161" strokeWidth={1.2} fill="white" />
              </div>
              <div className="absolute -top-7 right-0">
                <Badge text={"閲覧済"} className="border-2 border-black text-xs" />
              </div>
              <Card
                className="relative flex flex-col rounded-2xl px-6 py-4 transition-all duration-75"
                href={{
                  pathname: `/law-description/${law.id}`,
                }}
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <p className={clsx("text-xl")}>{law.law_revisions[0].num_kanji}</p>
                    <p>{law.law_revisions[0].enforcement_date}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="pt-2 text-sm">{law.law_revisions[0].title}</p>
                    <div className="flex gap-2">
                      <p>改正回数</p>
                      {law.law_revisions_aggregate.aggregate?.count &&
                        law.law_revisions_aggregate.aggregate?.count - 1}
                    </div>
                  </div>
                  <div className="self-start">
                    <LawReaction />
                  </div>
                  {/* スクロールカード */}
                  <div className="flex flex-1 flex-col gap-2">
                    <Suspense fallback={<DefaultLoading />}>
                      <SummaryCard />
                    </Suspense>
                    <Suspense fallback={<DefaultLoading />}>
                      <ArgumentCard />
                    </Suspense>
                    <Suspense fallback={<DefaultLoading />}>
                      <CommentsCard />
                    </Suspense>
                  </div>
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
