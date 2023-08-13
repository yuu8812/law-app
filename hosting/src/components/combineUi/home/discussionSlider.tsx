"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { FC } from "react";
import { PiCrownSimple } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

import "@splidejs/react-splide/css/skyblue";

interface Props {
  lawArray: string[];
}

const DiscussionSlider: FC<Props> = ({ lawArray }): JSX.Element => {
  return (
    <Splide
      className="h-full w-full flex flex-1"
      options={{
        arrows: false,
        type: "loop",
        pauseOnHover: true,
      }}
    >
      {lawArray.map((item, _i) => {
        return (
          <SplideSlide key={_i} className="w-full">
            <CardContent className="flex-1">
              <div className="flex justify-between flex-col">
                <div className="flex lg:items-center gap-2 flex-wrap lg:flex-row flex-col">
                  <div className="relative flex items-center justify-center self-start -bottom-2">
                    <PiCrownSimple size={30} className="text-yellow-400 -rotate-6" />
                    <div className="absolute text-xs">{_i + 1}</div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm">
                      関税定率法（明治四十三年法律第五十四号）についての議論
                    </p>
                    <p className="">関税の比率について</p>
                  </div>
                </div>
              </div>
              <Button className="absolute right-0 top-20 m-4 h-10 mb-6" asChild>
                <Link href={"/register/login"}>みる</Link>
              </Button>
              <div className="flex-1 text-xs absolute bottom-6 right-4 m-2 ">
                <span className="text-xs pr-2">1000</span>回閲覧
              </div>
              <div className="flex-1 text-xs absolute bottom-6 left-4 m-2">
                <span className="text-xs pr-2">1000</span>個のリアクション
              </div>
            </CardContent>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default DiscussionSlider;
