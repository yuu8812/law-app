import clsx from "clsx";
import Link from "next/link";
import React, { Suspense } from "react";

import CommentsList from "@/app/(header)/law-description/[id]/_components/CommentsList";
import LawRenderer from "@/app/(header)/law-description/[id]/_components/LawRenderer";
import { createWatchedLaw, findLaw } from "@/client/law";
import Badge from "@/components/Badge";
import { BreadCrumb } from "@/components/BreadCrumb";
import DefaultLoading from "@/components/DefaultLoading";

export type ModalSearchParams = {
  describe: "main" | "toc";
  nav: "close" | "argument" | "comment" | "law-revisions" | "summary";
  column_comment: string;
};

const page = async ({
  searchParams,
  params,
}: {
  searchParams: ModalSearchParams;
  params: { id: string };
}) => {
  const res = await findLaw({ id: params.id });

  const openCommentNav = searchParams.nav === "comment";
  const openArgumentNav = searchParams.nav === "argument";
  const openSummaryNav = searchParams.nav === "summary";

  const openNav = openArgumentNav || openCommentNav || openSummaryNav;

  const isNavClosed = searchParams.nav === "close";

  const isWatched = !!res.laws_by_pk?.law_views[0]?.id;

  if (!isWatched) await createWatchedLaw({ law_id: params.id });

  return (
    <div className="flex flex-1 flex-col">
      <BreadCrumb
        href="/laws"
        leftText="法令"
        rightText={res.laws_by_pk?.law_revisions[0].title ?? ""}
      />
      <div className="flex flex-1 justify-between gap-1">
        <div className="relative flex h-full w-full flex-col overflow-scroll bg-white">
          <div className="relative z-50 my-4 flex w-full gap-4 overflow-hidden pl-4">
            <Badge
              text={res.laws_by_pk?.law_revisions[0].law_type.type_ja ?? ""}
              className="border-2 border-blue/70 py-1 text-xs"
            />
            <Badge
              text={res.laws_by_pk?.law_revisions[0].law_category.category_ja ?? ""}
              className="border-2 border-red/70 py-1 text-xs"
            />
          </div>
          <div className="absolute w-full flex-col pt-10">
            <LawRenderer law={res} searchParams={searchParams} />
          </div>
        </div>
        <div className="relative right-0 flex h-full gap-1">
          <div
            className={clsx(
              "flex flex-1 bg-white shadow transition-all",
              openNav ? "w-[350px]" : "w-0",
            )}
          >
            {openNav && (
              <div className="relative flex flex-1 flex-col overflow-scroll">
                <div className="sticky top-0 z-10 flex gap-2 bg-white p-2 text-sm">
                  <Link
                    href={{
                      query: { ...searchParams, nav: "comment" } as ModalSearchParams,
                    }}
                    className={clsx(
                      "flex w-24  items-center justify-center bg-[#ffffff] px-2 shadow outline-slate-400 hover:outline",
                      openCommentNav ? "outline outline-slate-400" : "",
                    )}
                  >
                    コメント
                  </Link>
                  <Link
                    href={{
                      query: { ...searchParams, nav: "argument" } as ModalSearchParams,
                    }}
                    className={clsx(
                      "flex  w-24 items-center justify-center bg-[#ffffff] px-2 shadow outline-slate-400 hover:outline",
                      openArgumentNav ? "outline outline-slate-400" : "",
                    )}
                  >
                    議論
                  </Link>
                  <Link
                    href={{
                      query: { ...searchParams, nav: "summary" } as ModalSearchParams,
                    }}
                    className={clsx(
                      "flex w-24  items-center justify-center bg-[#ffffff] px-2 shadow outline-slate-400 hover:outline",
                      openSummaryNav ? "outline outline-slate-400" : "",
                    )}
                  >
                    どんな法律
                  </Link>
                </div>
                <div className="flex flex-1">
                  {openCommentNav && (
                    <div className="flex h-full w-full flex-1">
                      <Suspense fallback={<DefaultLoading />}>
                        <CommentsList
                          column_id={searchParams.column_comment}
                          revision_id={res.laws_by_pk?.law_revisions[0].id ?? ""}
                        />
                      </Suspense>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link
            className="flex w-8 items-center justify-center bg-white shadow"
            href={{
              query: {
                ...searchParams,
                nav: !openNav ? "comment" : "close",
              } as ModalSearchParams,
            }}
            replace
          >
            {isNavClosed ? ">" : "<"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
