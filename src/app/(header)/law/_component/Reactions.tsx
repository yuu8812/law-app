"use client";
import React from "react";
import { BiEditAlt } from "react-icons/bi";

import LikeStar from "@/app/(header)/law/_component/LikeStar";
import PortalStarRate from "@/app/(header)/law/_component/PortalStarRate";
import { useFindLawReactionsQuery } from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const Reactions = ({
  id,
  setEdit,
  edit,
  isAuthor,
}: {
  id: string;
  setEdit: () => void;
  edit: boolean;
  isAuthor: boolean;
}) => {
  const { state } = useUser();

  const { data } = useFindLawReactionsQuery({
    variables: { law_id: id, user_id: state?.id ?? "" },
  });

  const isLiked = (data?.laws_by_pk?.is_liked.length ?? 0) > 0;
  const isStared = (data?.laws_by_pk?.is_stared.length ?? 0) > 0;

  const likeCount = data?.laws_by_pk?.like.aggregate?.count ?? 0;
  const starCount = data?.laws_by_pk?.star.aggregate?.count ?? 0;

  return (
    <div>
      {isAuthor && (
        <div
          onClick={() => !edit && setEdit()}
          className={`fixed right-2 top-20 flex md:top-4 ${edit ? "cursor-default" : "cursor-pointer"} items-center justify-center rounded bg-[#ffffff] p-1 shadow`}
        >
          {edit && <div className="w-24 px-2 text-so_se_ji">編集中です</div>}
          <BiEditAlt size={30} className="transition-all hover:scale-110" />
        </div>
      )}
      {!edit && (
        <>
          <PortalStarRate
            law_id={id}
            avg={data?.laws_by_pk?.law_star_rates_aggregate.aggregate?.avg?.rate ?? 0}
            user_rate={data?.laws_by_pk?.user_rate[0]?.rate ?? 0}
          />
          <LikeStar
            isLiked={isLiked}
            isStared={isStared}
            likeCount={likeCount}
            starCount={starCount}
            law_id={id}
          />
        </>
      )}
    </div>
  );
};

export default Reactions;
