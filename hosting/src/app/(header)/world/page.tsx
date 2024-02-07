import Image from "next/image";
import Link from "next/link";
import React from "react";

import { findWorlds } from "@/api/server";
import PortalButton from "@/app/(header)/world/_component/PortalButton";
import PieChart from "@/components/PieChart";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import RefreshProvider from "@/providers/RefreshProvider";

export const revalidate = 0;

const worldCount = (count: string) => (count ? parseInt(count) : 1) * 10;

const page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const data = await findWorlds({
    order_by: { created_at: "desc" },
    limit: worldCount(searchParams.page),
  });

  return (
    <RefreshProvider>
      <div className="flex flex-1 flex-col">
        <PortalButton />
        {/* <LoadMore searchParams={searchParams} pos="top" /> */}
        <div className="my-2 ml-4 text-xl font-bold">世界一覧</div>
        <div className="flex flex-1 flex-wrap">
          {data.worlds.map((world, i) => {
            return (
              <div className="flex h-[450px] w-1/2 flex-col" key={i}>
                <Link
                  href={`/world/${world.id}/description`}
                  className={`m-1 my-4 flex flex-1 flex-col rounded-2xl border bg-[#fff] p-4 shadow transition-all delay-75 duration-1000 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/50`}
                >
                  <div className="flex h-[150px] flex-1 grow-0 justify-between gap-2">
                    <div className="flex flex-1 flex-col gap-2">
                      {/* <div className="text-2xl">{world.world_histories[0].title}</div> */}
                      <div className="text-2xl"> {world.world_histories[0].title}</div>
                      <div className="text-sm text-gray-500">
                        {world.world_histories[0].description}
                      </div>
                    </div>
                    <div className="flex h-[120px] w-[200px]">
                      <Image
                        src={"/ex.jpg"}
                        className="rounded-xl border object-cover shadow outline"
                        alt="world"
                        width={200}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <div className="flex w-1/2 flex-col">
                      <div className="text-sm">
                        <span className="px-2 text-lg font-bold">
                          {world.world_laws_aggregate.aggregate?.count ?? 0}
                        </span>
                        つの法令が域内で指定されてます
                      </div>
                      <div className="flex flex-col pt-4">
                        <div className="h-36 w-36">
                          <PieChart
                            data={world.species_percentage.map((i) => ({
                              number: i.percentage,
                              text: i.species_name ?? "",
                            }))}
                          />
                        </div>
                        <div className="pl-2 pt-2 text-sm">
                          個体数
                          <span className="px-2 text-lg font-bold">
                            {world.world_citizens_aggregate.aggregate?.count ?? 0}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
                      <div className="flex h-8 items-center">
                        <p className="w-32">指定公用語</p>
                        <div className="px-4 font-bold">
                          {language[world?.world_histories[0].official_language ?? 0].ja}
                        </div>
                      </div>
                      <div className="flex h-8 items-center">
                        <p className="w-32">治安レベル</p>
                        <div className="px-4 font-bold">
                          {securityLevel[world?.world_histories[0].public_security ?? 0]}
                        </div>
                      </div>
                      <div className="flex h-8 items-center">
                        <p className="w-32">運営管理者数</p>
                        <div className="px-4 font-bold">
                          {world?.world_editable_users_aggregate.aggregate?.count ?? 0}
                        </div>
                      </div>
                      <div className="flex h-8 items-center">
                        <p className="w-32">統治責任者</p>
                        <div className="px-4 font-bold">{world?.user.name}</div>
                      </div>
                      <div className="flex h-8 items-center pt-4">
                        <p className="w-32">世界レベル</p>
                        <div className="px-4 text-xl font-bold">
                          {world?.level}
                          <span className="pl-2">LV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </RefreshProvider>
  );
};

export default page;
