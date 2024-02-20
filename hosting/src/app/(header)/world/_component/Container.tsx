"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { VscCommentDiscussion } from "react-icons/vsc";

import Search from "@/app/(header)/world/_component/Search";
import DefaultLoading from "@/components/DefaultLoading";
import Heart from "@/components/Heart";
import PageNation from "@/components/PageNation";
import PieChart from "@/components/PieChart";
import Star from "@/components/Star";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import { useFindWorldsQuery } from "@/graphql/type";

const FETCH_SIZE = 40;

const Container = () => {
  const [type, setType] = useState<"new" | "popular" | "citizen" | "view" | "search">("new");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const { data, loading } = useFindWorldsQuery({
    variables: {
      order_by:
        type === "popular"
          ? { world_reactions_aggregate: { count: order === "asc" ? "asc" : "desc" } }
          : type === "citizen"
            ? { world_citizens_aggregate: { count: order === "asc" ? "asc" : "desc" } }
            : { created_at: order === "asc" ? "asc" : "desc" },
      limit: FETCH_SIZE,
      offset: (pageNum - 1) * (FETCH_SIZE - 1),
      where:
        search && type === "search"
          ? { world_histories: { title: { _like: `%${search}%` } } }
          : undefined,
    },
  });

  const worlds = data?.worlds.filter((_, i) => i !== FETCH_SIZE - 1);

  const hasData = worlds?.length ?? 0 > 0;

  const hasNext = data?.worlds[FETCH_SIZE - 1];

  return (
    <>
      <Search
        setType={setType}
        type={type}
        order={order}
        setOrder={setOrder}
        setSearch={setSearch}
        search={search}
      />

      <div className="flex flex-1 flex-wrap items-center pt-1">
        {loading ? (
          <DefaultLoading />
        ) : hasData && worlds ? (
          worlds.map((world, i) => {
            return (
              <div className="flex h-[450px] w-1/2 flex-col" key={i}>
                <Link
                  href={`/world/${world.id}/description`}
                  className={`hover:shadow-so_se_ji/50 m-2 flex flex-1 flex-col rounded-lg border bg-[#fff]/75 p-4 shadow transition-all delay-75 duration-1000 hover:-translate-y-1 hover:bg-[#fff] hover:font-medium hover:shadow-lg`}
                >
                  <div className="flex h-[150px] flex-1 grow-0 justify-between gap-2">
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="text-2xl"> {world.world_histories[0].title}</div>
                      <div className="text-sm text-gray-500">
                        {world.world_histories[0].description}
                      </div>
                    </div>
                    <div className="flex h-[120px] w-[200px] overflow-hidden">
                      <Image
                        src={`${world.world_histories[0].world_image_url ? world.world_histories[0].world_image_url : "/dummy.avif"}`}
                        className="rounded object-cover shadow transition hover:scale-105"
                        alt="world"
                        width={200}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <div className="flex w-1/2 flex-col">
                      <div className="text-sm">
                        <span className="px-2 text-lg font-400">
                          {world.world_laws_aggregate.aggregate?.count ?? 0}
                        </span>
                        つの法令が域内で指定されてます
                      </div>
                      <div className="flex flex-col pt-4">
                        <div className="h-36 w-36">
                          <PieChart
                            data={world.species_percentage.map((i) => ({
                              number: i.percentage,
                              text: i.species_name ?? "",
                            }))}
                          />
                        </div>
                        <div className="pl-2 pt-2 text-sm">
                          個体数
                          <span className="px-2 text-lg font-400">
                            {world.world_citizens_aggregate.aggregate?.count ?? 0}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
                      <div className="flex h-8 items-center">
                        <p className="w-32">指定公用語</p>
                        <div className="px-4 font-400">
                          {
                            language.find(
                              (i) => i.en === world?.world_histories[0].official_language,
                            )?.ja
                          }
                        </div>
                      </div>
                      <div className="flex h-8 items-center">
                        <p className="w-32">治安レベル</p>
                        <div className="px-4 font-400">
                          {securityLevel[world?.world_histories[0].public_security ?? 0]}
                        </div>
                      </div>
                      <div className="flex h-8 items-center">
                        <p className="w-32">統治責任者</p>
                        <div className="px-4 font-400">{world?.user.name}</div>
                      </div>
                      <div className="flex h-8 items-center pt-4">
                        <p className="w-32">世界レベル</p>
                        <div className="px-4 text-xl font-400">
                          {world?.level}
                          <span className="pl-2">LV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                      <Heart fill props={{ size: 12, className: "text-red" }} />
                      <p className="text-xs">{world.likeCount.aggregate?.count}</p>
                    </div>
                    <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                      <Star fill props={{ size: 12, className: "text-yellow-400" }} />
                      <p className="text-xs">{world.starCount.aggregate?.count}</p>
                    </div>
                    <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                      <VscCommentDiscussion size={12} />
                      <p className="text-xs">{world.world_comments_aggregate.aggregate?.count}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="flex flex-1 items-center justify-center">見つかりませんでした</div>
        )}
      </div>
      <PageNation pageNum={pageNum} setPageNum={setPageNum} backOnly={!hasNext} />
    </>
  );
};

export default Container;
