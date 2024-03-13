"use client";

import React, { Dispatch, SetStateAction } from "react";

const PageNation = ({
  pageNum,
  backOnly,
  setPageNum,
  visible,
}: {
  pageNum: number;
  backOnly?: boolean;
  setPageNum: Dispatch<SetStateAction<number>>;
  visible?: boolean;
}) => {
  if (!visible) return null;
  return (
    <div className="relative bottom-0 my-10 flex w-full flex-1 items-center justify-center">
      <div className="flex h-20 items-center justify-center gap-4">
        {pageNum !== 1 && (
          <button
            onClick={() => {
              setPageNum((prev) => prev - 1);
              window.scrollTo(0, 0);
            }}
            className="flex w-60 items-center justify-center rounded-full bg-so_se_ji p-2 text-white"
          >
            前へ
          </button>
        )}
        {!backOnly && (
          <button
            onClick={() => {
              setPageNum((prev) => prev + 1);
              window.scrollTo(0, 0);
            }}
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
