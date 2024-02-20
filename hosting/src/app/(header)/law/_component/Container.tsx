"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbWorldUp } from "react-icons/tb";
import { VscCommentDiscussion } from "react-icons/vsc";

import Search from "@/app/(header)/law/_component/Search";
import StarRate from "@/app/(header)/law/_component/StarRate";
import Bookmark from "@/components/Bookmark";
import DefaultLoading from "@/components/DefaultLoading";
import Heart from "@/components/Heart";
import PageNation from "@/components/PageNation";
import { useFindLawsQuery } from "@/graphql/type";

const FETCH_SIZE = 40;

const Container = () => {
  const [type, setType] = useState<"new" | "world" | "star" | "view" | "search">("new");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [search, setSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const { data, loading } = useFindLawsQuery({
    variables: {
      order_by:
        type === "world"
          ? { world_laws_aggregate: { count: order === "asc" ? "asc" : "desc" } }
          : type === "star"
            ? { law_star_rates_aggregate: { avg: { rate: order === "asc" ? "asc" : "desc" } } }
            : { created_at: order === "asc" ? "asc" : "desc" },
      limit: FETCH_SIZE,
      offset: (pageNum - 1) * (FETCH_SIZE - 1),
      where:
        search && type === "search"
          ? { law_revisions: { title: { _like: `%${search}%` } } }
          : undefined,
    },
  });

  const laws = data?.laws.filter((_, i) => i !== FETCH_SIZE - 1);

  const hasData = laws?.length ?? 0 > 0;

  const hasNext = data?.laws[FETCH_SIZE - 1];

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
      <div className="hide-scrollbar sticky top-0 flex h-full max-w-[70%] flex-1 overflow-y-scroll rounded pt-4">
        <div className="absolute mt-12 flex h-fit w-full flex-1 flex-col gap-2 pb-10 pl-3">
          {loading ? (
            <DefaultLoading />
          ) : hasData && laws ? (
            laws.map((law, i) => {
              return (
                <Link
                  className="hover:shadow-so_se_ji/50 flex h-auto flex-1 flex-col rounded-lg border bg-[#ffffff] py-4 shadow transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg"
                  key={i}
                  href={`/law/${law.id}`}
                >
                  <div className="flex flex-1 items-center">
                    <div className="flex h-[100px] w-[200px] items-center justify-center overflow-hidden">
                      <Image
                        src={`${law.type === 1 ? "/hinomaru.webp" : law.law_revisions[0].law_image_url}`}
                        alt="hinomaru"
                        width={200}
                        height={100}
                        className="scale-100"
                      />
                    </div>
                    <div className="m-2 flex flex-1 flex-col justify-between gap-1">
                      <div className="text-lg">{law.law_revisions[0]?.title}</div>
                      <div className="flex items-center gap-2 pt-1 text-gray-600">
                        <div className="pl-2 text-xs">カテゴリ</div>
                        <div className="pl-2 font-400">
                          {law.law_revisions[0]?.category_ja ?? "なし"}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-1 text-gray-600">
                        <div className="pl-2 text-xs">作成者</div>
                        <div className="pl-2 font-400">{`${law.type === 1 ? "日本国" : law.user?.name ?? ""}`}</div>
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
                            <VscCommentDiscussion className="text-so_se_ji" size={14} />
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
            })
          ) : (
            <div className="flex flex-1 items-center justify-center pt-10">決まりがありません</div>
          )}
        </div>
        <PageNation pageNum={pageNum} setPageNum={setPageNum} backOnly={!hasNext} />
      </div>
    </>
  );
};

export default Container;
