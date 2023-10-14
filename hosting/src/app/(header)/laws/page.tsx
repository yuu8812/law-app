import React from "react";

import { Card } from "@/components/Card";

function Page() {
  return (
    <div className="flex flex-1">
      <div className="h-full w-80"></div>
      <div className="flex w-[500px] flex-col gap-1 overscroll-y-contain">
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
        <Card className="h-80">
          <div className="">hello</div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
