"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../ui/sheet";

import { FC } from "react";
import LawsSort from "./LawsSort";
import { Button } from "@/components/ui/button";

interface Props {}

const LawsSortMobile: FC<Props> = (props): JSX.Element => {
  return (
    <div className="pl-4 pt-2">
      <Sheet>
        <SheetTrigger>
          <Button className="p-4">並び替え</Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <LawsSort />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LawsSortMobile;
