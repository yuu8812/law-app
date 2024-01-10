import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="group">
        <Link
          href="/world/create"
          className="fixed right-10 top-20 flex h-14 w-14 flex-1 items-center justify-center bg-slate-400 transition-all hover:justify-between group-hover:w-40 group-hover:scale-95"
        >
          <div className="relative hidden h-full w-28 shrink-0 items-center justify-center overflow-hidden font-bold text-white group-hover:flex">
            世界を追加
          </div>
          <div className="flex w-16 items-center justify-center">
            <FaPlus size={24} color="white" />
          </div>
        </Link>
      </div>
      <div className="my-6 pl-4 text-8xl">私が求める世界</div>
      <div className="flex flex-1 flex-wrap">
        <div className="flex h-[550px] w-1/2 ">
          <div className="m-2 flex flex-1 bg-white shadow">
            <div className="flex flex-1 flex-col p-4">
              <div className="flex flex-1 flex-col gap-1">
                <div className="cursor-pointer text-2xl hover:underline">美しい世界</div>
                <div className="h-20 pt-1 text-gray-600">
                  美しさで全てが決まる世界。ここでは数え切れないほどの花が世界を満たしている。
                </div>
                <div className="flex flex-col gap-1">
                  <div className="pb-1 pt-2">文書 22個</div>
                  <div className="cursor-pointer bg-slate-50 px-4 py-2 text-gray-600 shadow hover:underline">
                    関税定率法
                  </div>
                  <div className="cursor-pointer bg-slate-50 px-4 py-2 text-gray-600 shadow hover:underline">
                    関税肥満法
                  </div>
                  <div className="end self-end pt-1 text-sm">など</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="pb-1 pt-2">この世界の法令 133個</div>
                  <div className="cursor-pointer bg-slate-50 px-4 py-2 text-gray-600 shadow hover:underline">
                    関税定率法
                  </div>
                  <div className="cursor-pointer bg-slate-50 px-4 py-2 text-gray-600 shadow hover:underline">
                    関税肥満法
                  </div>
                  <div className="end self-end pt-1 text-sm">など</div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex gap-3">
                  <GrUserManager size={30} />
                  <div className="relative bottom-[6px]">
                    <div className="text-xs text-gray-500">定住</div>
                    <div className="text-base">1000人</div>
                  </div>
                </div>
                <div className="border-1 h-7 w-7 self-start rounded-full border-black bg-slate-300 outline outline-offset-1 outline-slate-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
