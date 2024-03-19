"use client";

import React from "react";

const PageNation = ({
  pageNum,
  backOnly,
  setPageNum,
  visible,
}: {
  pageNum: number;
  backOnly?: boolean;
  setPageNum: (t: "increment" | "decrement") => void;
  visible?: boolean;
}) => {
  if (!visible) return null;
  return (
    <div className="relative bottom-0 my-10 mb-40 flex w-full flex-1 items-center justify-center md:mb-0">
      <div className="flex h-20 flex-col-reverse items-center justify-center gap-4 md:flex-row ">
        {pageNum !== 1 && (
          <button
            onClick={() => setPageNum("decrement")}
            className="flex w-60 items-center justify-center rounded-full bg-so_se_ji p-2 text-white"
          >
            前へ
          </button>
        )}
        {!backOnly && (
          <button
            onClick={() => setPageNum("increment")}
            className="flex w-60 items-center justify-center rounded-full bg-so_se_ji p-2 text-white"
          >
            次へ
          </button>
        )}
      </div>
    </div>
  );
};

export default PageNation;
