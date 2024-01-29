import React from "react";

import ColumnCommentInput from "@/app/(header)/law-description/[id]/_components/ColumnCommentInput";
import CommentHeart from "@/components/CommentHeart/CommentHeart";
import User from "@/components/User";
import { findCommentsByLawId } from "@/serverClient/law";

const CommentsList = async ({
  column_id,
  revision_id,
}: {
  column_id: string;
  revision_id: string;
}) => {
  const res = await findCommentsByLawId({
    type: 0,
    law_revision_column: {
      law_revision_id: { _eq: revision_id },
      column_id: column_id ? { _eq: column_id } : undefined,
    },
  });
  const comments = res.comments;
  return (
    <div className="absolute top-2 ml-1 mr-1 w-full pr-1">
      <div className="sticky top-8 z-10 -mt-6 flex w-full flex-col gap-1 overflow-hidden bg-white pt-1">
        <div className="text-sm">{column_id ? column_id + "について" : "全てのコメント"}</div>
        <ColumnCommentInput columnId={column_id} lawRevisionId={revision_id} key={column_id} />
      </div>
      <div className="relative mb-4 flex flex-1 flex-col gap-2 p-2 pt-12">
        {comments && comments?.length > 0 ? (
          comments?.map((comment, i) => {
            return (
              <div key={i}>
                <div
                  className="flex w-full shrink-0 flex-col justify-between border-b bg-[#ffffff] p-2 shadow"
                  key={i}
                >
                  <div className="py-1 text-xs">{comment.law_revision_column?.column_id}</div>
                  <div className="whitespace-break-spaces break-all pb-4">{comment.text}</div>
                  <div className="flex justify-between">
                    <User name={comment.user.name} url={comment.user.icon_url} />
                    <CommentHeart
                      commentId={comment.id}
                      count={comment.comment_reactions_aggregate.aggregate?.count || 0}
                      fill={comment.comment_reactions?.length > 0}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="">コメントがありません</div>
        )}
      </div>
    </div>
  );
};

export default CommentsList;
