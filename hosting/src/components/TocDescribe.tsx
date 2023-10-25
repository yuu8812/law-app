import React from "react";

import { LawDataRoot } from "@/law";

export const TocDescribe = ({ lawDataRoot }: { lawDataRoot: LawDataRoot }) => {
  console.log(lawDataRoot);
  return <div className="relative h-full w-full overflow-scroll border-l p-2">hello</div>;
};
