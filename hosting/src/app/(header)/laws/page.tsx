import Link from "next/link";
import React from "react";

import { Card } from "@/components/Card";
import MotionWrapper from "@/motion/MotionWrapper";

export const dynamic = "force-dynamic";

const reactionList = [
  { name: "リアクション", key: "" },
  { name: "議論", key: "" },
  { name: "コメント", key: "" },
  { name: "まとめ", key: "" },
];

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
    <MotionWrapper>
      <div className="relative w-full items-center justify-center">
        <div className="mr-1 w-full gap-1 overscroll-y-none">
          <div className="pb-2 ">注目の法令</div>
          {Array.from({ length: 10 }).map((_, _i) => {
            return (
              <div className="relative flex flex-col" key={_i}>
                <Card className="relative min-h-[320px] p-2" href="/laws/id">
                  <div className="">
                    <p className="">令和五年法律第六十七号</p>
                    <p className="pt-2 text-xs">
                      性的な姿態を撮影する行為等の処罰及び押収物に記録された性的な姿態の影像に係る電磁的記録の消去等に関する法律
                      {searchParams && JSON.stringify(searchParams)}
                    </p>
                    <p className="">{a as string}</p>
                  </div>
                </Card>
                <div className="mb-2 flex h-12 items-center justify-around border-b text-xs">
                  {reactionList.map((_, _i) => {
                    return (
                      <Link className="flex gap-2 text-gray-500" key={_i} href="/">
                        <p className="">{_.name}</p>
                        <p className="text-blue">1223</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionWrapper>
  );
}

export default Page;
