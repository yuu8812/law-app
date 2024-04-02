import { Fragment, memo, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { InView } from "react-intersection-observer";

import RevisionReaction from "@/app/(header)/law/_component/RevisionReaction";
import { useFindLawColumnReactionsLazyQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Reaction = memo(
  ({
    node,
    lawRevisionId,
    onChange,
    isLiked,
    likeCount,
    index,
    last,
  }: {
    node: Element;
    lawRevisionId: string;
    onChange: (index: number, last: boolean) => void;
    isLiked: boolean;
    likeCount: number;
    index: number;
    last: boolean;
  }) => {
    const columnId = node.getAttribute("data-column-id") ?? "";
    const text = node.getAttribute("data-text") ?? "";

    return (
      <>
        {lawRevisionId ? (
          createPortal(
            <>
              <RevisionReaction
                columnId={columnId}
                lawRevisionId={lawRevisionId}
                text={text}
                isLiked={isLiked}
                likeCount={likeCount}
              />
              <InView triggerOnce onChange={(v) => v && onChange(index, last)} />
            </>,
            node,
          )
        ) : (
          <></>
        )}
      </>
    );
  },
);

Reaction.displayName = "Reaction";

const RenderCountryReactions = ({
  lawRevisionId,
  nodeList,
}: {
  lawRevisionId: string;
  nodeList: NodeListOf<Element> | undefined;
}) => {
  const [columnArr, setColumnArr] = useState<string[]>([]);

  const { state } = useUser();

  const [m, { data, fetchMore }] = useFindLawColumnReactionsLazyQuery({
    variables: {
      law_revision_id: lawRevisionId,
      user_id: state?.id,
      column_ids: columnArr.slice(0, 20),
      type: 0,
    },
  });

  useEffect(() => {
    columnArr.length !== 0 && m();
  }, [m, columnArr]);

  const handleChange = async (index: number, last: boolean) => {
    if (index % 20 === 0 || last) {
      const response = await fetchMore({
        variables: {
          law_revision_id: lawRevisionId,
          user_id: state?.id,
          column_ids: !last ? columnArr.slice(index, index + 20) : columnArr.slice(-index % 20),
          type: 0,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            country_law_column_reactions: [
              ...(prev.country_law_column_reactions ?? []),
              ...(fetchMoreResult.country_law_column_reactions ?? []),
            ],
            country_law_column_reactions_aggregate: {
              nodes: [
                ...(prev.country_law_column_reactions_aggregate?.nodes ?? []),
                ...(fetchMoreResult.country_law_column_reactions_aggregate?.nodes ?? []),
              ],
            },
          };
        },
      });
      return response;
    }
  };
  const a: string[] = useMemo(() => [], []);

  const render = () => {
    const arr: JSX.Element[] = [];
    nodeList?.forEach((node, i) => {
      const columnId = node.getAttribute("data-column-id") ?? "";
      a.push(columnId);
      arr.push(
        <Reaction
          node={node}
          lawRevisionId={lawRevisionId}
          onChange={handleChange}
          isLiked={
            !!data?.country_law_column_reactions.find((v) => v.column_id === columnId)?.user_id
          }
          likeCount={
            data?.country_law_column_reactions_aggregate.nodes.find(
              (v) =>
                v.country_law_column?.country_law_column_reactions_aggregate.nodes[0].column_id ===
                columnId,
            )?.country_law_column?.country_law_column_reactions_aggregate.aggregate?.count ?? 0
          }
          index={i}
          last={i === nodeList.length - 1}
        />,
      );
    });

    return arr.map((v, i) => <Fragment key={i}>{v}</Fragment>);
  };

  useEffect(() => {
    setColumnArr(Array(...new Set(a)));
  }, [a]);

  return render();
};

export default RenderCountryReactions;
