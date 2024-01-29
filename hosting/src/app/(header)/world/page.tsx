import Link from "next/link";
import React from "react";

import PortalButton from "@/app/(header)/world/_component/PortalButton";
import User from "@/components/User";
import { findWorlds } from "@/serverClient/law";

export const revalidate = "0";

const page = async () => {
  const res = await findWorlds({ variables: {} });
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="group">
        <PortalButton />
      </div>
      <div className="my-6 pl-4 text-2xl">私が求める世界</div>
      <div className="flex flex-1 flex-wrap">
        {res.worlds.map((world, i) => {
          return (
            <div className="flex h-[550px] w-1/2" key={i}>
              <Link href={`/world/${world.id}`} className="m-2 flex flex-1 bg-white shadow">
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="cursor-pointer text-2xl hover:underline">
                      {world.world_histories[0].title}
                    </div>
                    <div className="h-20 pt-1 text-gray-600">
                      {world.world_histories[0].description}
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
                      <div className="relative bottom-[6px]">
                        <div className="text-xs text-gray-500">定住</div>
                        <div className="text-base">1000人</div>
                      </div>
                    </div>
                    <User name={world.user.name} url={world.user.icon_url} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
