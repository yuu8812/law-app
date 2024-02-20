"use client";

import React, { Dispatch, SetStateAction } from "react";

const PageNation = ({
  pageNum,
  backOnly,
  setPageNum,
}: {
  pageNum: number;
  backOnly?: boolean;
  setPageNum: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="flex h-20 items-center justify-center gap-4">
        {pageNum !== 1 && (
          <button
            onClick={() => setPageNum((prev) => prev - 1)}
            className="bg-so_se_ji flex w-60 items-center justify-center rounded-full p-2 text-white"
          >
            前へ
          </button>
        )}
        {!backOnly && (
          <button
            onClick={() => setPageNum((prev) => prev + 1)}
            className="bg-so_se_ji flex w-60 items-center justify-center rounded-full p-2 text-white"
          >
            次へ
          </button>
        )}
      </div>
    </div>
  );
};

export default PageNation;
