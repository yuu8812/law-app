import React from "react";

import Bookmark from "@/components/Bookmark";

const LawBookmark = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Bookmark props={{ size: 18 }} fill />
      <div className="text-xs">1000</div>
    </div>
  );
};

export default LawBookmark;
