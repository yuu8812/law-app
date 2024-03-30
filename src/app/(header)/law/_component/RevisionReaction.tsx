import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Heart from "@/components/Heart";
import {
  useCreateColumnReactionMutation,
  useDeleteLawColumnReactionsMutation,
  useFindLawColumnReactionsLazyQuery,
} from "@/graphql/type";
import useRedirectIfUnAuth from "@/hooks/useRedirectIfUnAuth";
import { useUser } from "@/hooks/useUser";

const RevisionReaction = memo(
  ({
    columnId,
    lawRevisionId,
    text,
  }: {
    columnId: string;
    lawRevisionId: string;
    text: string;
  }) => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    const [mutate] = useCreateColumnReactionMutation();
    const [del] = useDeleteLawColumnReactionsMutation();

    const { state } = useUser();

    const [m, { data }] = useFindLawColumnReactionsLazyQuery({
      variables: {
        law_revision_id: lawRevisionId,
        user_id: state?.id ?? undefined,
        columnId: columnId,
        type: 0,
      },
    });

    useEffect(() => {
      inView && m();
    }, [inView, m]);

    const isLiked = data?.country_law_column_reactions.length === 1;

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
      <div className="my-1 flex items-center gap-1" ref={ref}>
        {inView && (
          <div
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full border px-2 py-1 shadow"
            onClick={handleClick}
          >
            <Heart
              fill={isLiked}
              props={{ size: 14, className: "text-red hover:scale-125 transition-all" }}
            />
            <p className="text-xs">{data?.count.aggregate?.count ?? 0}</p>
          </div>
        )}
      </div>
    );
  },
);

RevisionReaction.displayName = "RevisionReaction";

export default RevisionReaction;
