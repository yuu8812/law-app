import React from "react";

import { findCommentsByLawId } from "@/client/law";
import Heart from "@/components/Heart";

const CommentsList = async ({ lawId }: { lawId: string }) => {
  const res = await findCommentsByLawId({ lawId });
  const comments = res.laws_by_pk?.comments;
  return (
    <div className="hide-scroll-bar ml-1 flex flex-1 flex-col gap-2 overflow-scroll p-1">
      <div className="flex flex-col gap-2">
        {comments?.map((comment, i) => {
          return (
            <div
              className="flex w-full shrink-0 flex-col justify-between  border-b bg-slate-50 p-2 shadow"
              key={i}
            >
              <div className="h-8">{comment.text}</div>
              <div className="flex justify-between">
                <div className="text-sm">{comment.user.name}</div>
                <div className="mr-2 flex items-center gap-1 text-xs">
                  {comment.comment_reactions[0]?.user_id ? (
                    <Heart props={{ color: "#e75632", size: 20 }} fill />
                  ) : (
                    <Heart props={{ color: "#e75632", size: 20 }} />
                  )}
                  <p className="text-xs">{comment.comment_reactions_aggregate.aggregate?.count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex h-16 w-full shrink-0 items-center justify-center">
        <p className="text-sm">もっと見る</p>
      </div>
    </div>
  );
};

export default CommentsList;
