import React, { memo } from "react";

import Heart from "@/components/Heart";
import {
  useCreateColumnReactionMutation,
  useDeleteLawColumnReactionsMutation,
  useFindLawColumnReactionsQuery,
} from "@/graphql/type";
import useRedirectIfUnAuth from "@/hooks/useRedirectIfUnAuth";
import { useUser } from "@/hooks/useUser";

const RevisionReaction = memo(
  ({
    columnId,
    lawRevisionId,
    text,
    renderAllowed,
  }: {
    columnId: number;
    lawRevisionId: string;
    text: string;
    renderAllowed: number;
  }) => {
    const [mutate] = useCreateColumnReactionMutation();
    const [del] = useDeleteLawColumnReactionsMutation();

    const { state } = useUser();

    const { data } = useFindLawColumnReactionsQuery({
      variables: { law_revision_id: lawRevisionId, user_id: state?.id, _lt: renderAllowed },
    });

    const isLiked = !!data?.isLiked.find((item) => item.country_law_column?.column_id === columnId);

    const { redirect } = useRedirectIfUnAuth();

    const handleClick = async () => {
      redirect();
      isLiked
        ? await del({
            variables: {
              law_revision_id: lawRevisionId,
              user_id: state?.id,
              column_id: columnId,
            },
            refetchQueries: ["findLawColumnReactions"],
          })
        : await mutate({
            variables: {
              column_id: columnId,
              law_revision_id: lawRevisionId,
              type: 0,
              user_id: state?.id,
              text: text,
            },
            refetchQueries: ["findLawColumnReactions"],
          });
    };

    return (
      <div className="my-1 flex items-center gap-1">
        <div
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full border px-2 py-1 shadow"
          onClick={handleClick}
        >
          <Heart
            fill={isLiked}
            props={{ size: 14, className: "text-red hover:scale-125 transition-all" }}
          />
          <p className="text-xs">
            {data?.country_law_column.find((item) =>
              item.likeCount.nodes.find((i) => i.country_law_column?.column_id === columnId),
            )?.likeCount.aggregate?.count ?? 0}
          </p>
        </div>
      </div>
    );
  },
);

RevisionReaction.displayName = "RevisionReaction";

export default RevisionReaction;
