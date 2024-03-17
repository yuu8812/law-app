import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";

import {
  useCreateUserLawColumnReactionMutation,
  useDeleteUserLawColumnReactionMutation,
  useFindUserLawColumnReactionsQuery,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Button = ({
  node,
  count,
  isLiked,
  identifyId,
}: {
  node: Element;
  count: number;
  isLiked: boolean;
  identifyId: string;
}) => {
  useEffect(() => {
    node.className = "bn-block-content group relative flex";
  }, [node]);

  const id = node.parentElement?.attributes.getNamedItem("data-id")?.value ?? "";

  const textContent = node.querySelector(".bn-inline-content")?.childNodes[0].textContent ?? "";

  const [mutate] = useCreateUserLawColumnReactionMutation();

  const [remove] = useDeleteUserLawColumnReactionMutation();

  const { state } = useUser();

  const handleClick = async () => {
    if (!id) return;
    isLiked
      ? await remove({
          variables: {
            law_revision_id: identifyId,
            user_id: state?.id ?? "",
            column_id: id,
            type: 0,
          },
          refetchQueries: ["findUserLawColumnReactions"],
        })
      : await mutate({
          variables: {
            column_id: id,
            law_revision_id: identifyId,
            text: textContent,
            type: 0,
            user_id: state?.id ?? "",
          },
          refetchQueries: ["findUserLawColumnReactions"],
        });
  };

  return createPortal(
    <>
      {id && (
        <div
          className={`absolute top-0 z-10 -ml-[58px] flex h-full items-center justify-center transition-all ${!count && "opacity-0 group-hover:opacity-100"}`}
        >
          <div
            className="relative flex h-8 cursor-pointer items-center justify-center gap-2 rounded border px-2 shadow"
            onClick={handleClick}
          >
            {isLiked ? (
              <RiThumbUpFill size={14} className="text-slate-800 transition-all hover:scale-125" />
            ) : (
              <RiThumbUpLine size={14} className="text-slate-800 transition-all hover:scale-125" />
            )}
            <p className="!text-xs !font-bold">{count}</p>
          </div>
        </div>
      )}
    </>,
    node,
  );
};

const EditorReactionButton = ({
  nodeList,
  identifyId,
}: {
  nodeList: NodeListOf<Element> | undefined;
  identifyId: string;
}) => {
  const { state } = useUser();

  const { data } = useFindUserLawColumnReactionsQuery({
    variables: { law_revision_id: identifyId, user_id: state?.id ?? "" },
  });

  const render = () => {
    const arr: JSX.Element[] = [];

    nodeList?.forEach((block) => {
      const id = block.parentElement?.attributes.getNamedItem("data-id")?.value ?? "";
      const isLiked = !!data?.isLiked.find((item) => item.user_law_column?.column_id === id);
      arr.push(
        <Button
          node={block}
          isLiked={isLiked}
          identifyId={identifyId}
          count={
            data?.user_law_column.find((item) =>
              item.likeCount.nodes.find((i) => i.user_law_column?.column_id === id),
            )?.likeCount.aggregate?.count ?? 0
          }
        />,
      );
    });
    return arr.map((v, i) => <React.Fragment key={i}>{v}</React.Fragment>);
  };

  return render();
};

export default EditorReactionButton;
