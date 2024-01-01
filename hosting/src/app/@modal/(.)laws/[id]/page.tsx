import clsx from "clsx";
import Link from "next/link";
import React, { Suspense } from "react";

import CommentsList from "@/app/@modal/(.)laws/[id]/_components/CommentsList";
import LawRenderer from "@/app/@modal/(.)laws/[id]/_components/LawRenderer";
import { findLaw } from "@/client/law";
import Badge from "@/components/Badge";
import { Card } from "@/components/Card";
import DefaultLoading from "@/components/DefaultLoading";
import DescribeSwitcher from "@/components/DescribeSwitcher";

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
  const lawRevision = res.laws_by_pk?.law_revisions[0];

  const openCommentNav = searchParams.nav === "comment";
  const openArgumentNav = searchParams.nav === "argument";

  const openLeftNav = openArgumentNav || openCommentNav;

  const isNavClosed = searchParams.nav === "close";

  return (
    <div className="relative h-full w-full">
      <div className="absolute -left-6 top-0 flex flex-col gap-2">
        <Badge
          text={lawRevision?.law_type.type_name ?? ""}
          className="border-2 border-blue/70 bg-white"
          vertical
        />
        <Badge
          text={lawRevision?.law_category.category_name ?? ""}
          className="border-2 border-red/70 bg-white"
          vertical
        />
      </div>
      <Card className="relative m-2 flex h-full w-full flex-1 rounded-2xl">
        <div className={clsx("relative top-0 h-full flex-1")}>
          <DescribeSwitcher searchParams={searchParams} />
        </div>
        <div className={clsx("flex transition-all", openLeftNav ? "w-[40%]" : "w-0")}>
          {openCommentNav && (
            <Suspense fallback={<DefaultLoading />}>
              <CommentsList title="コメント" lawId={params.id} />
            </Suspense>
          )}
        </div>
        <Link
          className="relative left-0 flex w-8 shrink-0 items-center justify-center"
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
        <div className="w-full overflow-y-scroll">
          <LawRenderer law={res} searchParams={searchParams} />
        </div>
      </Card>
    </div>
  );
};

export default page;
