import React from "react";

import Heart from "@/components/Heart";

const RevisionReaction = () => {
  return (
    <div className="my-1 flex items-center gap-1">
      <div className="flex items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
        <Heart fill props={{ size: 12, className: "text-red" }} />
        <p className="text-xs">{0}</p>
      </div>
    </div>
  );
};

export default RevisionReaction;
