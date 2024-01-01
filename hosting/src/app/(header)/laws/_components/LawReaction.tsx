import React from "react";

import Heart from "@/components/Heart";

const LawReaction = () => {
  return (
    <div className="mt-4 flex justify-between">
      <div></div>
      <div className="my-2 mr-4 flex gap-4">
        {/* <div className="flex items-center gap-2 text-sm">
          <CiStar color="#eed34e" size={24} strokeWidth={1} />
          <p>1000</p>
        </div> */}
        <div className="flex items-center gap-2 text-sm">
          <Heart props={{ color: "#e75632", size: 20 }} />
          <p>1000</p>
        </div>
      </div>
    </div>
  );
};

export default LawReaction;
