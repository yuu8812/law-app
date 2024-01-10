import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { LuSmilePlus } from "react-icons/lu";

import { ModalSearchParams } from "@/app/(header)/law-description/[id]/page";
import Comment from "@/components/Comment";
import { FindLawQuery } from "@/graphql/type";
import { ChildrenBaseEntity } from "@/newType.global";

type LawRevisionColumns = Array<{
  __typename?: "law_revision_columns";
  column_id: string;
  id: string;
  comments_aggregate: {
    __typename?: "comments_aggregate";
    aggregate?: { __typename?: "comments_aggregate_fields"; count: number } | null;
  };
  reactions_aggregate: {
    __typename?: "reactions_aggregate";
    aggregate?: { __typename?: "reactions_aggregate_fields"; count: number } | null;
  };
}>;

const renderChildren = ({
  items,
  key,
  lawRevisionId,
  searchParams,
  isBold,
  actionByColumn,
}: {
  items: ChildrenBaseEntity["children"];
  key: string;
  searchParams: ModalSearchParams;
  lawRevisionId: string;
  isBold?: boolean;
  actionByColumn: LawRevisionColumns;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      {items?.map((item: ChildrenBaseEntity, i) => {
        const columnKey = key.slice(0, -1);
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
                          <div className="flex w-20 flex-1 grow-0 items-center gap-2 self-end">
                            <div className="flex w-10 items-center gap-1">
                              <LuSmilePlus size={16} color="#535252" />
                              <div>
                                {actionByColumn.filter((item) => {
                                  return item.column_id === columnKey;
                                })[0]?.reactions_aggregate?.aggregate?.count ?? 0}
                              </div>
                            </div>
                            <Link
                              href={{
                                query: {
                                  ...searchParams,
                                  column_comment: columnKey,
                                  nav: "comment",
                                } as ModalSearchParams,
                              }}
                              className="flex w-10 items-center gap-1"
                              replace
                            >
                              <Comment props={{ color: "#6bb2e6", size: 22 }} />
                              <div>
                                {actionByColumn.filter((item) => {
                                  return item.column_id === columnKey;
                                })[0]?.comments_aggregate?.aggregate?.count ?? 0}
                              </div>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {renderChildren({
                    items: item.children,
                    key: key + item.tag + (item?.attr?.Num ? item?.attr?.Num + "_" : "_"),
                    lawRevisionId: lawRevisionId,
                    searchParams,
                    actionByColumn,
                  })}
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
  const lawRevisionId = law.laws_by_pk?.law_revisions[0].id;
  const actionByColumn = law.laws_by_pk?.law_revisions[0]
    .law_revision_columns as LawRevisionColumns;
  return (
    <div className="flex flex-1 flex-col">
      {lawJson?.children?.map((item: ChildrenBaseEntity, i) => {
        return (
          <div key={i} className="flex flex-1 flex-col">
            {item.children?.length !== 0 &&
              item.children &&
              renderChildren({
                items: item.children,
                key: "",
                lawRevisionId: lawRevisionId ?? "",
                searchParams,
                isBold: i === 1,
                actionByColumn,
              })}
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
    <div className="flex h-full flex-1 flex-col overflow-hidden p-4">
      <div className="flex flex-1">{renderNestedElements(law, searchParams)}</div>
    </div>
  );
};

export default LawRenderer;
