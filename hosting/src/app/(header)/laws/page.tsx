import clsx from "clsx";
import React, { Suspense } from "react";

import ArgumentCard from "@/app/(header)/laws/_components/ArgumentCard";
import CommentsCard from "@/app/(header)/laws/_components/CommentsCard";
import LawReaction from "@/app/(header)/laws/_components/LawReaction";
import SummaryCard from "@/app/(header)/laws/_components/SummaryCard";
import Badge from "@/components/Badge";
import Bookmark from "@/components/Bookmark";
import { Card } from "@/components/Card";
import DefaultLoading from "@/components/DefaultLoading";
import { findLaws } from "@/serverClient/law";

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
    <div className="relative flex flex-1 justify-center">
      <div className="mr-1 flex flex-1 flex-col gap-10 overscroll-y-none">
        <div className="ml-2 mt-6 text-2xl">法令</div>
        <div className="flex flex-wrap pt-6">
          {res.laws.map((law, _i) => {
            return (
              <div className="flex w-1/2 flex-col" key={_i}>
                <div className="relative px-2 py-10">
                  <div className="absolute -top-4 left-4 flex flex-1 gap-4">
                    <Badge
                      text={law.law_revisions[0].law_type.type_ja}
                      className="border-2 border-blue/70 text-xs"
                    />
                    <Badge
                      text={law.law_revisions[0].law_category.category_ja}
                      className="border-2 border-red/70 text-xs"
                    />
                    <Badge
                      text={law.law_views[0]?.id ? "閲覧済" : "未閲覧"}
                      className={clsx(
                        "border-2 border-black text-xs",
                        law.law_views[0]?.id && "border-yellow-400",
                      )}
                    />
                    <Bookmark />
                  </div>
                  <Card
                    className="relative flex flex-col px-6 py-4 transition-all duration-75"
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
