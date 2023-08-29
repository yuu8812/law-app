"use client";
import { FC } from "react";

interface Props {}

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const LawsReactionList: FC<Props> = (props): JSX.Element => {
  return (
    <div className="h-full w-full p-2 overflow-scroll">
      <div className="sticky top-0 flex gap-2 w-full mb-4 justify-between px-2 bg-blend-darken">
        <Tabs defaultValue="議論" className="rounded-lg">
          <TabsList className="w-full">
            <TabsTrigger value="議論" className="w-20">
              議論
            </TabsTrigger>
            <TabsTrigger value="コメント" className="w-20">
              コメント
            </TabsTrigger>
            <TabsTrigger value="質問" className="w-20">
              質問
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <RadioGroup defaultValue="人気順" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="人気順" id="人気順" />
            <Label htmlFor="人気順">人気順</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="新着順" id="新着順" />
            <Label htmlFor="新着順">新着順</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="mb-20">
        <Card className="min-h-[160px]">
          <CardHeader>
            <CardTitle className="text-sm font-normal">関税についての議論</CardTitle>
          </CardHeader>
        </Card>
        <Card className="min-h-[160px] mt-2">
          <CardHeader>
            <CardTitle className="text-sm font-normal">関税についての議論</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default LawsReactionList;
