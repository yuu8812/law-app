import React from "react";

import Heart from "@/components/Heart";

const LawHeart = ({ count, isLiked }: { count: number; isLiked: boolean }) => {
  return (
    <form className="flex flex-col items-center justify-center gap-1">
      <button type="submit">
        <Heart fill={isLiked} props={{ size: 24, color: "#e75632" }} />
      </button>
      <div className="text-xs">{count}</div>
    </form>
  );
};

export default LawHeart;
