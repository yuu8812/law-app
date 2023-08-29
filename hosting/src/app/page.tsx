import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import DiscussionSlider from "@/components/combineUi/home/discussionSlider";
import LawsSlider from "@/components/combineUi/home/lawsSlider";

export default function Home() {
  return (
    <div className="grid grid-raws-10 grid-cols-1 lg:grid-raws-3 lg:grid-cols-4 p-4 lg:p-10 gap-4 min-h-full relative lg:max-w-fit self-center max-w-[550px] bg-gradient-to-b">
      <Card className="relative row-span-1 col-span-1 lg:row-span-3 lg:col-span-2 min-h-[300px] flex flex-col">
        <CardHeader>
          <CardTitle>人気な法令</CardTitle>
        </CardHeader>
        <LawsSlider lawArray={["", "", "", "", "", "", "", "", ""]} />
      </Card>
      <Card className="lg:row-span-2 lg:col-span-2 row-span-4 col-span-1 flex flex-wrap lg:min-h-fit min-h-[350px]">
        <CardHeader className="lg:w-1/2 w-full relative">
          <CardTitle>月間オンライン</CardTitle>
          <CardDescription className="pt-4">
            月にこのサイトを訪れた、投票権のあるユーザーの総数です
          </CardDescription>
          <CardContent className="absolute bottom-0 right-0">
            <span className="text-xl pr-4">1000</span>人
          </CardContent>
        </CardHeader>
        <CardHeader className="lg:w-1/2 w-full relative">
          <CardTitle>現在のオンライン人数</CardTitle>
          <CardDescription className="pt-4">
            30分以内にアクティブだったユーザーの総数です
          </CardDescription>
          <CardContent className="absolute bottom-0 right-0">
            <span className="text-xl pr-4">1000</span>人
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="row-span-1 col-span-1 lg:row-span-2 lg:col-span-2 min-h-[300px] flex flex-col">
        <CardHeader>
          <CardTitle>人気の議論</CardTitle>
        </CardHeader>
        <DiscussionSlider lawArray={["", "", "", "", "", "", "", "", ""]} />
      </Card>
      <Card className="lg:row-span-1 lg:col-span-1 min-h-[200px]">
        <CardHeader className="relative">
          <CardTitle>お知らせ</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="">新着</div>
          <div className="text-sm">version1.0.0リリースしました!</div>
        </CardContent>
      </Card>
      <Card className="lg:row-span-1 lg:col-span-1 min-h-[200px] flex flex-col ">
        <CardHeader className="">
          <CardTitle>あなたのレベル</CardTitle>
        </CardHeader>
        <CardContent className="self-center place-content-center">
          <div className="font-semibold text-[100px] text-primary">54</div>
        </CardContent>
      </Card>
      <Card className="lg:row-span-1 lg:col-span-1 min-h-[200px] flex relative">
        <CardHeader className="relative">
          <CardTitle>ご意見・ご要望</CardTitle>
          <CardDescription className="pt-4">
            現在こちらのサイトはベータ版です。皆様のご意見をもとにより良い運営をしていきたいと思っています
          </CardDescription>
          <CardContent className="flex flex-1 relative">
            <Button className="absolute right-0 bottom-0">要望を送る</Button>
          </CardContent>
        </CardHeader>
      </Card>
      <Card className="lg:row-span-1 lg:col-span-3 min-h-[200px] relative">
        <CardHeader className="relative">
          <CardTitle>支持率調査</CardTitle>
          <CardDescription className="pt-4">
            開発中です...もうしばらくお待ちください
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
