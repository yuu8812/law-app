"use client";

import { Button } from "@/components/ui/button";
import { ComboboxDemo } from "@/components/ui/comboBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";

interface Props {}

const LawDetailNav: FC<Props> = (props): JSX.Element => {
  const [index, setIndex] = useState();
  const titleList = [
    {
      title: "本文",
    },
    {
      title: "議論",
    },
    {
      title: "コメント",
    },
  ];
  return (
    <Tabs
      defaultValue={titleList[0].title}
      className="z-20 sticky top-16 border-b p-2 flex items-center text-foreground bg-background text-sm shadow"
    >
      <TabsList>
        {titleList.map((item, _i) => {
          return (
            <TabsTrigger
              key={_i}
              value={item.title}
              className="w-32 font-semibold"
            >
              {item.title}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

export default LawDetailNav;
