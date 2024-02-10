"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { TbWorldUp } from "react-icons/tb";
import { VscCommentDiscussion } from "react-icons/vsc";

import StarRate from "@/app/(header)/law/_component/StarRate";
import Heart from "@/components/Heart";
import User from "@/components/User";

const Container = () => {
  const [currentLawId, setCurrentLawId] = useState<string | null>();
  let flag: boolean = false;
  const onMouseEnter = (id: string) => {
    if (id === currentLawId || flag === true) return;
    setCurrentLawId(null);
    flag = true;
    const unsub = setTimeout(() => {
      setCurrentLawId(id);
      console.log("dede");
      flag = false;
    }, 500);
    return () => unsub;
  };
  return (
    <>
      <div className="hide-scrollbar sticky top-0 flex h-full min-w-[56%] flex-1 overflow-y-scroll rounded pt-4">
        <div className="absolute flex h-fit w-full flex-1 flex-col gap-2 pl-3">
          {Array.from({ length: 100 }).map((_, i) => {
            return (
              <Link
                className="flex min-h-[120px] flex-1 flex-col rounded-lg border bg-[#ffffff] py-4 shadow transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/50"
                key={i}
                href="/world"
                onMouseEnter={() => onMouseEnter(String(Math.random() * 10))}
              >
                <div className="m-2 flex flex-1 flex-col justify-between gap-1">
                  <div className="text-lg">関税定率法・法令</div>
                  <div className="flex items-center gap-2 pt-1 text-gray-600">
                    <div className="pl-2 text-xs">カテゴリ</div>
                    <div className="pl-2 font-bold">環境</div>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-gray-600">
                    <div className="pl-2 text-xs">作成者</div>
                    <div className="pl-2 font-bold">国</div>
                  </div>
                  <div className="flex flex-1 justify-between pt-2 text-gray-400">
                    <div className="end-0 flex flex-1 items-center gap-2">
                      <div className="flex w-20 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                        <Heart fill props={{ size: 18, className: "text-red" }} />
                        <p className="text-xs">112</p>
                      </div>
                      <div className="flex w-20 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                        <TbWorldUp className="text-cyan-800" size={20} />
                        <p className="text-xs">112</p>
                      </div>
                      <div className="flex w-20 items-center justify-center gap-2 rounded-full border px-2 py-1 shadow">
                        <VscCommentDiscussion className="text-cyan-800" size={20} />
                        <p className="text-xs">112</p>
                      </div>
                    </div>
                    <div className="flex">
                      <StarRate />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="sticky top-0 w-[26%] overflow-scroll rounded">
        <AnimatePresence>
          {currentLawId && (
            <motion.div
              className="absolute flex h-fit w-full flex-1 flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="sticky top-0 z-10 mx-2 flex items-center rounded bg-[#ffffff]/75 py-2 pl-1 text-sm">
                あっらら
              </div>
              <div className="relative flex h-fit w-full flex-1 shrink-0 flex-col gap-1 p-2">
                {Array.from({ length: 100 }).map((_, i) => {
                  return (
                    <div
                      className="min-h-32 flex flex-1 shrink-0  rounded bg-[#ffffff] shadow"
                      key={i}
                    >
                      <div className="h-24 p-2">
                        <User id="" name="刺身" imgSize="h-4 w-4" style="text-xs" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Container;
