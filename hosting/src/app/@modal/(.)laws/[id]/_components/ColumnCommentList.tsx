import React from "react";

import ColumnCommentInput from "@/app/@modal/(.)laws/[id]/_components/ColumnCommentInput";
import Heart from "@/components/Heart";

const ColumnCommentList = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col py-4">
      <div className="h-full overflow-y-scroll">
        <div className="sticky top-0 bg-white py-2 text-base">コメント</div>
        <div className="">
          {Array.from({ length: 10 }).map((item, i) => {
            return (
              <div className="border-b p-2" key={i}>
                <div className="h-8 text-sm">いい条文</div>
                <div className="flex items-center justify-between">
                  <div className="text-xs">@user1234-44</div>
                  <div className="flex items-center gap-1">
                    <Heart props={{ size: 18, color: "#e75632" }} />
                    <div className="text-xs">100</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <ColumnCommentInput />
      </div>
    </div>
  );
};

export default ColumnCommentList;
