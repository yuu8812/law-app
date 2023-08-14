"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const ReactionProps = ["閲覧", "議論", "リアクション", "コメント"];

const LawsList: FC<Props> = (props): JSX.Element => {
  const arr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <div className="p-4 flex gap-4 flex-col">
      {arr.map(() => {
        return (
          <Link href="" className="h-full w-full">
            <Card className="lg:h-64 h-80 w-full">
              <CardHeader className="w-full h-full relative flex">
                <div className="flex justify-between lg:flex-row flex-col gap-2">
                  <div className="">関税についての法律</div>
                  <div className="flex gap-2">
                    <Badge>関税</Badge>
                    <Badge>関税</Badge>
                  </div>
                </div>
                <div className="h-2/3">
                  <div className="text-sm flex gap-1 flex-col">
                    <div className="">
                      文字数<span className="mx-2">1000文字</span>
                    </div>
                    <div className="">
                      最新施行<span className="px-2">1999/9/9</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 justify-between">
                  {ReactionProps.map((item) => {
                    return (
                      <div className="end-0 self-end text-xs min-w-[150px]">
                        {item}
                        <span className="pl-2">1000</span>
                      </div>
                    );
                  })}
                </div>
              </CardHeader>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default LawsList;
