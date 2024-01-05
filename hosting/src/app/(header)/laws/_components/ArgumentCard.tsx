"use client";
import React from "react";

import NameAndDate from "@/app/(header)/laws/_components/NameAndDate";
import Comment from "@/components/Comment";
import Heart from "@/components/Heart";

const ArgumentCard = () => {
  return (
    <div className="flex min-h-[100px] flex-1 flex-col ">
      <div className="my-2 text-xs">議論</div>
      <div className="flex flex-1 border-l-2 border-blue">
        <div className="flex flex-1 flex-col">
          <div className="m-1 h-full">
            <div className="m-1">名前がよくわからないことについての議論</div>
            <div className="m-1">名前が非常に不可解でよくわからない場合が多い。 変えてほしい</div>
          </div>
          <div className="flex items-center justify-between ">
            <NameAndDate date="1000-10-10" name="@user-11019" />
            <div className="my-2 mr-4 flex gap-2">
              <div className="flex items-center gap-2">
                <Heart props={{ color: "#e75632", size: 20 }} />
                <p className="text-xs">1000</p>
              </div>
              <div className="flex items-center gap-2">
                <Comment props={{ color: "#6bb2e6", size: 22 }} />
                <p className="text-xs">1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArgumentCard;
