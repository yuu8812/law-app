"use client";

import Image from "next/image";
import Link from "next/link";

import BgProvider from "@/components/BgProvider";
import { Button } from "@/components/Button";
import { useFindLawWorldCountQuery } from "@/graphql/type";

export default function Home() {
  const { data } = useFindLawWorldCountQuery();
  return (
    <div className="flex h-full w-full flex-1">
      <div className="absolute left-4 top-4">
        <Image src={"/icon-mini.svg"} alt="here" width={32} height={32} priority />
      </div>
      <BgProvider>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex h-[350px] w-[95%] max-w-[450px] flex-col items-center justify-center gap-10 rounded-full border bg-white shadow-xl md:h-[700px] md:w-[700px] md:max-w-none">
            <div className="flex items-center gap-4 text-2xl md:text-[40px]">総政治</div>
            <div className="mx-10 sm:w-[60%]">
              総政治は法令や決まりを制定し、それをもとに様々な地域を構築して共有できるプラットフォームです。
            </div>
            <Link
              href="/world"
              className="absolute bottom-28 z-20 my-10 rounded border bg-white p-2 shadow-xl lg:bottom-32"
            >
              <Button text="始める" />
            </Link>
          </div>
          <div className="absolute right-2 top-2 md:left-14 md:top-14">
            <div className="flex h-40 w-40 flex-col items-center justify-center gap-4 rounded-full border bg-white shadow-xl md:h-60 md:w-60 md:gap-10">
              <div className="">現在の地域の数</div>
              <div className="text-4xl font-bold">
                {data?.worlds_aggregate.aggregate?.count ?? 0}
              </div>
            </div>
          </div>
          <div className="absolute left-2 top-10 md:bottom-10 md:left-auto md:right-10 md:top-auto">
            <div className="flex h-40 w-40 flex-col items-center justify-center gap-4 rounded-full border bg-white shadow-xl md:h-60 md:w-60 md:gap-10">
              <div className="">現在の決まりの数</div>
              <div className="text-4xl font-bold">{data?.laws_aggregate.aggregate?.count ?? 0}</div>
            </div>
          </div>
        </div>
      </BgProvider>
    </div>
  );
}
