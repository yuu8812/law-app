"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { VscCommentDiscussion } from "react-icons/vsc";

import Search from "@/app/(header)/world/_component/Search";
import AnimateWrap from "@/components/AnimateWrap";
import Bookmark from "@/components/Bookmark";
import DefaultLoading from "@/components/DefaultLoading";
import Heart from "@/components/Heart";
import PageNation from "@/components/PageNation";
import PieChart from "@/components/PieChart";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import { useFindWorldsQuery } from "@/graphql/type";

const FETCH_SIZE = 21;

type LocalStorage = {
  worldOrderType: "new" | "popular" | "citizen" | "view" | "search";
  worldOrderDestination: "asc" | "desc";
  worldOrderSearch: string;
  worldOrderPage: string;
};

const Container = () => {
  const lsType = localStorage.getItem("worldOrderType") as LocalStorage["worldOrderType"];
  const lsOrder = localStorage.getItem(
    "worldOrderDestination",
  ) as LocalStorage["worldOrderDestination"];
  const lsSearch = localStorage.getItem("worldOrderSearch") as LocalStorage["worldOrderSearch"];
  const lsPageNum = localStorage.getItem("worldOrderPage")
    ? parseInt(localStorage.getItem("worldOrderPage") ?? "1")
    : 1;

  const [type, setType] = useState<"new" | "popular" | "citizen" | "view" | "search">(
    lsType ?? "new",
  );
  const [order, setOrder] = useState<"asc" | "desc">(lsOrder ?? "desc");
  const [search, setSearch] = useState(lsSearch ?? "");
  const [pageNum, setPageNum] = useState(lsPageNum ?? 1);

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

  const handleResetPageNum = () => {
    setPageNum(1);
    localStorage.setItem("worldOrderPage", "1");
    window.scrollTo(0, 0);
  };

  const handleType = (t: "new" | "popular" | "citizen" | "view" | "search") => {
    setType(t);
    handleResetPageNum();
    localStorage.setItem("worldOrderType", t);
  };

  const handleOrder = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    handleResetPageNum();
    localStorage.setItem("worldOrderDestination", newOrder);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    handleResetPageNum();
    localStorage.setItem("worldOrderSearch", text);
  };

  const handlePageNum = (t: "increment" | "decrement") => {
    const nextPageNum = pageNum + (t === "increment" ? 1 : -1);
    setPageNum(nextPageNum);
    window.scrollTo(0, 0);
    localStorage.setItem("worldOrderPage", String(nextPageNum));
  };

  const worlds = data?.worlds.filter((_, i) => i !== FETCH_SIZE - 1);

  const hasData = worlds?.length ?? 0 > 0;

  const hasNext = data?.worlds[FETCH_SIZE - 1];

  return (
    <div className="flex flex-1 flex-col items-center">
      <Search
        setType={handleType}
        type={type}
        order={order}
        setOrder={handleOrder}
        setSearch={handleSearch}
        search={search}
      />
      <div className="relative top-0 flex w-full flex-1 flex-col">
        <div className="relative flex flex-1 items-center pt-1">
          <AnimatePresence>
            {loading ? (
              <DefaultLoading />
            ) : hasData && worlds ? (
              <AnimateWrap>
                <div className="flex h-full w-full flex-1 flex-col items-center justify-center lg:flex-wrap">
                  {worlds.map((world, i) => {
                    return (
                      <div
                        className="flex h-auto w-full max-w-[700px] flex-col lg:w-1/2 lg:min-w-[700px] lg:max-w-[70%]"
                        key={i}
                      >
                        <Link
                          href={`/world/${world.id}/description`}
                          className={`m-2 flex flex-1 flex-col rounded-lg border bg-[#fff]/75 p-4 shadow transition-all delay-75 duration-1000 md:hover:-translate-y-1 md:hover:bg-[#fff] md:hover:font-medium md:hover:shadow-lg md:hover:shadow-so_se_ji/50`}
                        >
                          <div className="flex h-[400px] flex-1 grow-0 flex-col justify-between gap-2 md:h-[150px] md:flex-row">
                            <div className="flex flex-1 flex-col gap-2">
                              <div className="text-2xl"> {world.world_histories[0].title}</div>
                              <div className="h-20 text-sm text-gray-500">
                                {world.world_histories[0].description}
                              </div>
                            </div>
                            <div className="flex h-[140px] w-[250px] overflow-hidden">
                              <Image
                                src={`${world.world_histories[0].world_image_url ? world.world_histories[0].world_image_url : "/dummy.avif"}`}
                                className="rounded object-cover shadow transition hover:scale-105"
                                alt="world"
                                width={250}
                                height={140}
                                priority={i < 6}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <div className="flex w-1/2 flex-col">
                              <div className="text-sm">
                                <span className="px-2 text-lg font-400">
                                  {world.world_laws_aggregate.aggregate?.count ?? 0}
                                </span>
                                つの決まりが域内で指定されてます
                              </div>
                              <div className="flex flex-col pt-4">
                                <div className="h-36 w-36">
                                  <PieChart
                                    data={world.species_percentage.map((i) => ({
                                      number: i.percentage,
                                      text: i.species_name ?? "",
                                      type: Number(i.species_auto_incremental_id),
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
                            <div className="text-md flex flex-1 flex-col gap-2 px-2 pt-6 font-normal md:gap-1">
                              <div className="flex flex-col gap-2 md:h-8 md:flex-row md:items-center">
                                <p className="">指定公用語</p>
                                <div className="font-bold md:px-4">
                                  {language.find(
                                    (i) => i.en === world?.world_histories[0].official_language,
                                  )?.ja ?? "なし"}
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 md:h-8 md:flex-row md:items-center">
                                <p className="">治安レベル</p>
                                <div className="font-bold md:px-4">
                                  {securityLevel[world?.world_histories[0].public_security ?? 0]}
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 md:h-8 md:flex-row md:items-center">
                                <p className="">統治責任者</p>
                                <div className="font-bold md:px-4">{world?.user.name}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                              <Heart fill props={{ size: 12, className: "text-red" }} />
                              <p className="text-xs">{world.likeCount.aggregate?.count}</p>
                            </div>
                            <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                              <Bookmark fill props={{ size: 14, className: "text-red" }} />
                              <p className="text-xs">{world.starCount.aggregate?.count}</p>
                            </div>
                            <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                              <VscCommentDiscussion size={12} />
                              <p className="text-xs">
                                {world.world_comments_aggregate.aggregate?.count}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                  <PageNation
                    pageNum={pageNum}
                    setPageNum={handlePageNum}
                    backOnly={!hasNext}
                    visible={!loading}
                  />
                </div>
              </AnimateWrap>
            ) : (
              <div className="flex flex-1 items-center justify-center">見つかりませんでした</div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Container;
