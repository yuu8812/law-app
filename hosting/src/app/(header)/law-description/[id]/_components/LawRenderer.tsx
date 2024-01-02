import clsx from "clsx";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuSmilePlus } from "react-icons/lu";

import ColumnCommentList from "@/app/(header)/law-description/[id]/_components/ColumnCommentList";
import { ModalSearchParams } from "@/app/(header)/law-description/[id]/page";
import Comment from "@/components/Comment";
import DefaultLoading from "@/components/DefaultLoading";
import { FindLawQuery } from "@/graphql/type";
import { ChildrenBaseEntity } from "@/newType.global";

const renderChildren = (
  items: ChildrenBaseEntity["children"],
  key: string,
  searchParams: ModalSearchParams,
  isBold?: boolean,
) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      {items?.map((item: ChildrenBaseEntity, i) => {
        return (
          <div key={i} className="flex flex-1">
            <div className="flex flex-1 flex-col">
              {typeof item?.children?.[0] === "string" ? (
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1 justify-between gap-1">
                    <p className={clsx(isBold && "text-xl font-semibold")}>{item.children[0]}</p>
                    <div className="flex w-28 flex-1 grow-0 self-end text-xs">
                      {key.includes("Sentence") && (
                        <div className="flex flex-1 flex-col">
                          <div className="flex flex-1 grow-0 items-center justify-center gap-2 self-end ">
                            <div className="flex items-center justify-center gap-1">
                              <LuSmilePlus size={16} />
                              <div>2</div>
                            </div>
                            <Link
                              href={{
                                query: {
                                  ...searchParams,
                                  column_comment:
                                    searchParams.column_comment === key.slice(0, -1)
                                      ? "close"
                                      : key.slice(0, -1),
                                } as ModalSearchParams,
                              }}
                              className="flex items-center justify-center gap-1"
                              replace
                            >
                              <Comment props={{ color: "#6bb2e6", size: 22 }} />
                              <p className="text-xs">10</p>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {searchParams.column_comment === key.slice(0, -1) &&
                    searchParams.column_comment !== "close" && (
                      <div className="flex h-[500px] flex-col">
                        <Suspense fallback={<DefaultLoading />}>
                          <ColumnCommentList />
                        </Suspense>
                      </div>
                    )}
                </div>
              ) : (
                <div>
                  {renderChildren(
                    item.children,
                    key + item.tag + (item?.attr?.Num ? item?.attr?.Num + "_" : "_"),
                    searchParams,
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const renderNestedElements = (law: FindLawQuery, searchParams: ModalSearchParams) => {
  const lawJson: ChildrenBaseEntity = law.laws_by_pk?.law_revisions[0].law_full_text;
  return (
    <div className="flex flex-1 flex-col">
      {lawJson?.children?.map((item: ChildrenBaseEntity, i) => {
        return (
          <div key={i} className="flex flex-1 flex-col">
            {item.children?.length !== 0 &&
              item.children &&
              renderChildren(item.children, "", searchParams, i === 1)}
          </div>
        );
      })}
    </div>
  );
};

const LawRenderer = ({
  law,
  searchParams,
}: {
  law: FindLawQuery;
  searchParams: ModalSearchParams;
}) => {
  return (
    <div className="flex flex-1 p-4">
      <div className="flex flex-1">{renderNestedElements(law, searchParams)}</div>
    </div>
  );
};

export default LawRenderer;
