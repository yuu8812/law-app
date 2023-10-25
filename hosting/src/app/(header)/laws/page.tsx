import React from "react";

import Badge from "@/components/Badge";
import { Card } from "@/components/Card";

export const dynamic = "force-dynamic";

// const reactionList = [
//   { name: "リアクション", key: "" },
//   { name: "議論", key: "" },
//   { name: "コメント", key: "" },
//   { name: "まとめ", key: "" },
// ];

const res = async (str: string | undefined) => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() * 10 + str!);
    }, 1000);
  });
  return res;
};

async function Page({ searchParams }: { searchParams: LawsPageSearchParams }) {
  const a = await res(searchParams.dir ?? "");
  return (
    <div className="relative w-full items-center justify-center">
      <div className="mr-1 flex w-full flex-col gap-4 overscroll-y-none">
        <div className="my-6 ml-2">注目の法令</div>
        {Array.from({ length: 10 }).map((_, _i) => {
          return (
            <div className="relative flex flex-col" key={_i}>
              <div className="absolute -left-7 top-1 flex flex-col gap-4 ">
                <Badge text={"刑事"} className="border-2 border-orange-300/70 text-xs" />
                <Badge text={"省令"} className="border-2 border-red/70 text-xs" />
              </div>
              <Card
                className="relative min-h-[400px] p-6"
                href={{
                  pathname: "/laws/" + Math.random() * 10,
                  query: { ...searchParams },
                }}
                scroll={false}
              >
                <div className="">
                  <p className="">令和五年法律第六十七号</p>
                  <p className="pt-2 text-xs">
                    性的な姿態を撮影する行為等の処罰及び押収物に記録された性的な姿態の影像に係る電磁的記録の消去等に関する法律
                    {searchParams && JSON.stringify(searchParams)}
                  </p>
                  <p className="">{a as string}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
