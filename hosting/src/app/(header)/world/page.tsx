import Image from "next/image";
import Link from "next/link";
import React from "react";

import { findWorlds } from "@/api/server";
import PortalButton from "@/app/(header)/world/_component/PortalButton";
import PieChart from "@/components/PieChart";

export const revalidate = 0;

const worldCount = (count: string) => (count ? parseInt(count) : 1) * 10;

const page = async ({ searchParams }: { searchParams: { page: string } }) => {
  const data = await findWorlds({
    order_by: { created_at: "desc" },
    limit: worldCount(searchParams.page),
  });

  return (
    <div className="flex flex-1 flex-col">
      <PortalButton />
      <div className="my-2 ml-4 text-xl font-bold">世界一覧</div>
      <div className="flex flex-1 flex-wrap">
        {data.worlds.map((world, i) => {
          return (
            <div className="flex h-[450px] w-1/2 flex-col" key={i}>
              <Link
                href={`/world/${world.id}/description`}
                className="m-1 my-4 flex flex-1 flex-col rounded-2xl border bg-[#fff] p-4 shadow"
              >
                <div className="flex h-[150px] flex-1 grow-0 justify-between gap-2">
                  <div className="flex flex-1 flex-col gap-2">
                    {/* <div className="text-2xl">{world.world_histories[0].title}</div> */}
                    <div className="text-2xl">例えばの世界</div>
                    <div className="text-sm text-gray-500">
                      非常に美しいが、関亜では納税が固く禁止されている
                      非常に美しいが、関亜では納税が固く禁止されている
                      非常に美しいが、関亜では納税が固く禁止されている
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
                      <span className="px-2 text-lg font-bold">24</span>
                      つの法令が域内で指定されてます
                    </div>
                    <div className="flex flex-col pt-4">
                      <div className="h-28 w-28">
                        <PieChart />
                      </div>
                      <div className="pl-2 pt-2 text-sm">
                        個体数<span className="px-2 text-lg font-bold">24</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-1 flex-col gap-1 pt-6 text-sm">
                    <div className="flex h-8 items-center">
                      <p className="w-32">指定公用語</p>
                      <div className="px-4 font-bold">英語</div>
                    </div>
                    <div className="flex h-8 items-center">
                      <p className="w-32">治安レベル</p>
                      <div className="px-4 font-bold">中</div>
                    </div>
                    <div className="flex h-8 items-center">
                      <p className="w-32">運営管理者数</p>
                      <div className="px-4 font-bold">2</div>
                    </div>
                    <div className="flex h-8 items-center">
                      <p className="w-32">統治責任者</p>
                      <div className="px-4 font-bold">llaool</div>
                    </div>
                    <div className="flex h-8 items-center">
                      <p className="w-32">識別ID</p>
                      <div className="px-4 font-bold">{`#'$("(903)=~1`}</div>
                    </div>
                    <div className="flex h-8 items-center pt-4">
                      <p className="w-32">世界レベル</p>
                      <div className="px-4 text-xl font-bold">111,222,222LV</div>
                    </div>
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
