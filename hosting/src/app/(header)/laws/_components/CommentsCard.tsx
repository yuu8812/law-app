"use client";
import React from "react";

import NameAndDate from "@/app/(header)/laws/_components/NameAndDate";
import Heart from "@/components/Heart";

const CommentsCard = () => {
  return (
    <div className="flex min-h-[100px] flex-1 flex-col">
      <div className="my-2 text-xs">コメント</div>
      <div className="flex h-full flex-1 ">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col rounded-2xl border">
            <div className="m-1 h-full">
              <div className="m-1">よくない法律</div>
            </div>
            <div className="flex items-center justify-between">
              <NameAndDate date="1000-10-10" name="@user-11019" />
              <div className="my-2 mr-4 flex gap-2">
                <div className="flex items-center gap-2">
                  <Heart props={{ color: "#e75632", size: 20 }} />
                  <p className="text-xs">1000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
