import clsx from "clsx";
import Link from "next/link";
import React, { Suspense } from "react";

import CommentsList from "@/app/(header)/law-description/[id]/_components/CommentsList";
import LawRenderer from "@/app/(header)/law-description/[id]/_components/LawRenderer";
import { createWatchedLaw, findLaw } from "@/client/law";
import { Card } from "@/components/Card";
import DefaultLoading from "@/components/DefaultLoading";

export type ModalSearchParams = {
  describe: "main" | "toc";
  nav: "close" | "column-comment" | "argument" | "comment" | "law-revisions";
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
  // const lawRevision = res.laws_by_pk?.law_revisions[0];

  const openCommentNav = searchParams.nav === "comment";
  const openArgumentNav = searchParams.nav === "argument";

  const openLeftNav = openArgumentNav || openCommentNav;

  const isNavClosed = searchParams.nav === "close";

  const isWatched = !!res.laws_by_pk?.law_views[0]?.id;

  if (!isWatched) await createWatchedLaw({ law_id: params.id });

  return (
    <div className="relative flex flex-1 flex-col">
      <div className="my-3 flex items-center gap-2">
        <Link href={"/laws"} className="mx-2 border-b border-stone-500">
          法令
        </Link>
        <div className="">{">"}</div>
        <div className="mx-2 border-b border-stone-500">
          {res.laws_by_pk?.law_revisions[0].title}
        </div>
      </div>
      <div className="flex flex-1">
        <Card className="relative top-0 m-1 flex flex-1 overflow-y-scroll ">
          <div className="absolute flex w-full pb-10">
            <LawRenderer law={res} searchParams={searchParams} />
          </div>
        </Card>
        <div className="m-1 flex flex-1 grow-0  bg-white shadow">
          <div
            className={clsx(
              "start flex min-h-full flex-1 transition-all",
              openLeftNav ? "w-[350px]" : "w-0",
            )}
          >
            {openCommentNav && (
              <div className="flex flex-1 flex-col">
                <div className="">コメント</div>
                <Suspense fallback={<DefaultLoading />}>
                  <CommentsList lawId={params.id} />
                </Suspense>
              </div>
            )}
          </div>
          <Link
            className="relative left-0 flex w-8 items-center justify-center "
            href={{
              query: {
                ...searchParams,
                nav: !openLeftNav ? "comment" : "close",
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
