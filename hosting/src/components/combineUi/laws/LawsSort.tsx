"use client";
import { FC } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {}

const LawType = ["全法令", "憲法", "法律", "政令", "勅令", "府省令", "規則"];

const LawCategory = [
  "すべて",
  "刑事",
  "民事",
  "関税",
  "閲覧数",
  "議論数",
  "総リアクション数",
  "コメント数",
  "日",
  "週",
  "月",
  "年",
];

const OrderType = ["すべて", "閲覧数", "議論数", "総リアクション数", "コメント数"];

const OrderSpan = ["すべて", "日", "週", "月", "年"];

const OrderDesc = ["ランダム", "昇順", "降順"];

const LawsSort: FC<Props> = (props): JSX.Element => {
  return (
    <div className="p-4 w-full flex flex-col overflow-scroll mb-20">
      <div className="flex items-center">
        <div className="">並び替え</div>
      </div>
      <Tabs defaultValue="降" className="py-4">
        <TabsList className="">
          <TabsTrigger value="降">降</TabsTrigger>
          <TabsTrigger value="昇">昇</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="">
        <div className="pb-4 text-sm">人気</div>
        <RadioGroup defaultValue="すべて" className="gap-4 flex flex-col">
          {OrderType.map((item) => {
            return (
              <div className="flex gap-2">
                <RadioGroupItem value={item} key={item} id={item} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
      <div className="">
        <div className="py-4 text-sm">期間</div>
        <RadioGroup defaultValue="すべて" className="gap-4 flex flex-col">
          {OrderSpan.map((item) => {
            return (
              <div className="flex gap-2">
                <RadioGroupItem value={item} key={item} id={item} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>
      <div className="">
        <div className="text-sm py-4">カテゴリー</div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="すべて" />
          </SelectTrigger>
          <SelectContent className="max-h-96 w-auto">
            <ScrollArea>
              {LawCategory.map((item) => {
                return <SelectItem value={item}>{item}</SelectItem>;
              })}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
      <div className="">
        <div className="text-sm py-4">種別</div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="全法令" />
          </SelectTrigger>
          <SelectContent className="max-h-96 w-auto">
            <ScrollArea>
              {LawType.map((item) => {
                return <SelectItem value={item}>{item}</SelectItem>;
              })}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LawsSort;
