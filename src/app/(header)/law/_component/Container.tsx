"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbWorldUp } from "react-icons/tb";
import { VscCommentDiscussion } from "react-icons/vsc";

import Search from "@/app/(header)/law/_component/Search";
import StarRate from "@/app/(header)/law/_component/StarRate";
import AnimateWrap from "@/components/AnimateWrap";
import Bookmark from "@/components/Bookmark";
import DefaultLoading from "@/components/DefaultLoading";
import Heart from "@/components/Heart";
import NewnessTag from "@/components/NewnessTag";
import PageNation from "@/components/PageNation";
import { Laws_Bool_Exp, useFindLawsQuery } from "@/graphql/type";

const FETCH_SIZE = 31;

type LocalStorage = {
  lawOrderType: "new" | "world" | "star" | "view" | "search";
  lawOrderDestination: "asc" | "desc";
  lawOrderSearch: string;
  lawOrderPage: string;
  lawOrderAuthor: "japan" | "user";
};

const Container = () => {
  const lsType = localStorage.getItem("lawOrderType") as LocalStorage["lawOrderType"];
  const lsOrder = localStorage.getItem(
    "lawOrderDestination",
  ) as LocalStorage["lawOrderDestination"];
  const lsSearch = localStorage.getItem("lawOrderSearch") as LocalStorage["lawOrderSearch"];
  const lsPageNum = localStorage.getItem("lawOrderPage")
    ? parseInt(localStorage.getItem("lawOrderPage") ?? "1")
    : 1;
  const lsAuthor = localStorage.getItem("lawOrderAuthor") as LocalStorage["lawOrderAuthor"];

  const [type, setType] = useState<"new" | "world" | "star" | "view" | "search">(lsType ?? "new");
  const [order, setOrder] = useState<"asc" | "desc">(lsOrder ?? "desc");
  const [search, setSearch] = useState(lsSearch ?? "");
  const [pageNum, setPageNum] = useState(lsPageNum ?? 1);
  const [author, setAuthor] = useState<"japan" | "user" | null>(lsAuthor ?? null);

  const whereCondition =
    search && type === "search"
      ? { law_revisions: { title: { _like: `%${search}%` } } }
      : undefined;

  const authorCondition: Laws_Bool_Exp = {
    author_id: author ? { _is_null: author === "user" ? false : true } : undefined,
  };

  const { data, loading } = useFindLawsQuery({
    variables: {
      order_by:
        type === "world"
          ? { world_laws_aggregate: { count: order === "asc" ? "asc" : "desc" } }
          : type === "star"
            ? {
                law_star_rates_aggregate: {
                  avg: { rate: order === "asc" ? "asc_nulls_last" : "desc_nulls_last" },
                },
              }
            : { created_at: order === "asc" ? "asc" : "desc" },
      limit: FETCH_SIZE,
      offset: (pageNum - 1) * (FETCH_SIZE - 1),
      where: { ...whereCondition, ...authorCondition },
    },
  });

  const laws = data?.laws.filter((_, i) => i !== FETCH_SIZE - 1);

  const hasData = laws?.length ?? 0 > 0;

  const hasNext = data?.laws[FETCH_SIZE - 1];

  const handleSetType = (t: "new" | "world" | "star" | "view" | "search") => {
    setType(t);
    setPageNum(1);
    localStorage.setItem("lawOrderType", t);
  };

  const handleSetAuthor = (a: "japan" | "user" | null) => {
    setAuthor(a);
    setPageNum(1);
    localStorage.setItem("lawOrderAuthor", a ?? "");
  };

  const handleOrder = () => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    setPageNum(1);
    localStorage.setItem("lawOrderDestination", order);
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    setPageNum(1);
    localStorage.setItem("lawOrderSearch", text);
  };

  const handlePageNum = (t: "increment" | "decrement") => {
    const nextPageNum = pageNum + (t === "increment" ? 1 : -1);
    setPageNum(nextPageNum);
    window.scrollTo(0, 0);
    localStorage.setItem("lawOrderPage", String(nextPageNum));
  };

  return (
    <>
      <Search
        setType={handleSetType}
        type={type}
        order={order}
        setOrder={handleOrder}
        setSearch={handleSearch}
        search={search}
        author={author}
        setAuthor={handleSetAuthor}
      />
      <div className="relative top-0 flex flex-1 items-center justify-center rounded">
        <div className="relative mt-4 flex min-w-[70%] flex-1 flex-col items-center justify-center gap-2">
          <AnimatePresence>
            {loading ? (
              <DefaultLoading />
            ) : hasData && laws ? (
              <AnimateWrap>
                <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-2">
                  {laws.map((law, i) => {
                    return (
                      <Link
                        className="relative flex h-auto w-[80%] flex-1 grow-0 flex-col rounded-lg border bg-[#ffffff] py-4 shadow transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-so_se_ji/50"
                        key={i}
                        href={`/law/${law.id}`}
                      >
                        <div className="absolute right-0 top-0">
                          <NewnessTag newness={law.newness as 0 | 1} />
                        </div>
                        <div className="flex flex-1 items-center">
                          <div className="relative flex h-[200px] w-[300px] items-center justify-center overflow-hidden rounded p-1">
                            <Image
                              src={`${law.type === 1 ? "/hinomaru.webp" : law.law_revisions[0].law_image_url ? law.law_revisions[0].law_image_url : "/dummy.avif"}`}
                              alt="hinomaru"
                              width={300}
                              height={200}
                              className="rounded object-cover"
                              priority={i < 5}
                            />
                          </div>
                          <div className="m-2 flex flex-1 flex-col justify-between gap-1">
                            <div className="text-lg">{law.law_revisions[0]?.title}</div>
                            <div className="flex flex-1">
                              <div className="flex min-h-[100px] w-[80%] flex-1 text-sm">
                                {law.law_revisions[0]?.description}
                              </div>

                              <div className="w-[20%] flex-1">
                                <div className="flex items-center gap-2 pt-1 text-gray-600">
                                  <div className="pl-2 text-sm">カテゴリ</div>
                                  <div className="pl-2">
                                    {law.law_revisions[0]?.law_category ?? "なし"}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 pt-1 text-gray-600">
                                  <div className="pl-2 text-sm">作成者</div>
                                  <div className="pl-2">{`${law.type === 1 ? "日本国" : law.user?.name ?? ""}`}</div>
                                </div>
                                <div className="flex items-center gap-2 pt-1 text-gray-600">
                                  <div className="pl-2 text-sm">決まりがある場所</div>
                                  <div className="pl-2">
                                    {law.type === 1 ? "日本国" : law.place ? law.place : "未設定"}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 justify-between pt-2 text-gray-400">
                              <div className="end-0 flex flex-1 items-center gap-2">
                                <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                                  <Heart fill props={{ size: 14, className: "text-red" }} />
                                  <p className="text-xs">{law.likeCount.aggregate?.count ?? 0}</p>
                                </div>
                                <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                                  <Bookmark fill props={{ size: 14, className: "text-red" }} />
                                  <p className="text-xs">{law.likeCount.aggregate?.count ?? 0}</p>
                                </div>
                                <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                                  <TbWorldUp className="text-so_se_ji" size={14} />
                                  <p className="text-xs">
                                    {law.world_laws_aggregate.aggregate?.count ?? 0}
                                  </p>
                                </div>
                                <div className="flex w-14 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                                  <VscCommentDiscussion className="text-slate-900" size={14} />
                                  <p className="text-xs">
                                    {law.law_comments_aggregate.aggregate?.count ?? 0}
                                  </p>
                                </div>
                              </div>
                              <div className="flex">
                                <StarRate
                                  value={law.law_star_rates_aggregate.aggregate?.avg?.rate ?? 0}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </AnimateWrap>
            ) : (
              <div className="flex flex-1 items-center justify-center pt-10">
                決まりがありません
              </div>
            )}
          </AnimatePresence>
          <PageNation
            pageNum={pageNum}
            setPageNum={handlePageNum}
            backOnly={!hasNext}
            visible={!loading}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
