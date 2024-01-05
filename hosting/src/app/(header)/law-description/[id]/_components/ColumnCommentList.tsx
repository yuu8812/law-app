import React from "react";

import ColumnCommentInput from "@/app/(header)/law-description/[id]/_components/ColumnCommentInput";
import { findCommentsOnLawRevisionColumn } from "@/client/law";
import CommentHeart from "@/components/CommentHeart/CommentHeart";

const ColumnCommentList = async ({
  columnId,
  lawRevisionId,
}: {
  columnId: string;
  lawRevisionId: string;
}) => {
  const res = await findCommentsOnLawRevisionColumn({
    columnId: columnId,
    revisionId: lawRevisionId,
  });
  const comments = res.law_revision_columns[0]?.comments_aggregate.nodes;

  return (
    <div className="mb-10 mt-4 flex h-full w-full flex-1 flex-col p-2">
      {comments ? (
        <div className="h-full overflow-y-scroll">
          <div className="sticky top-0 bg-white py-2 text-base">コメント</div>
          <div className="flex flex-col gap-2">
            {comments?.map((item, i) => {
              return (
                <div className="border-b bg-gray-50 p-2 shadow" key={i}>
                  <div className="min-h-6 pb-2 text-sm">{item.text}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="text-sm">{item.user.name}</div>
                      <div className="text-sm">{item.created_at}</div>
                    </div>
                    <CommentHeart
                      commentId={item.id}
                      count={item.comment_reactions_aggregate.aggregate?.count || 0}
                      fill={item.isLiked.length > 0}
                      key={JSON.stringify(res)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex min-h-[300px] flex-1 items-center justify-center">
          コメントがありません
        </div>
      )}

      <div className="end my-4 w-full self-end">
        <ColumnCommentInput columnId={columnId} lawRevisionId={lawRevisionId} />
      </div>
    </div>
  );
};

export default ColumnCommentList;
