import React from "react";

const NewnessTag = ({ newness }: { newness: 0 | 1 }) => {
  return (
    <div className="m-1 w-fit rounded bg-so_se_ji p-1 text-xs text-white">
      {newness === 0 ? "新しい決まり" : "既存の決まり"}
    </div>
  );
};

export default NewnessTag;
