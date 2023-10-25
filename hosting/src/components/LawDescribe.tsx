import React from "react";

import { LawDataRoot } from "@/law";

export const LawDescribe = ({ lawDataRoot }: { lawDataRoot: LawDataRoot }) => {
  const law = lawDataRoot.DataRoot.ApplData.LawFullText.Law;
  return (
    <div className="relative h-full w-full overflow-scroll border-l p-2">
      <div className="py-1">{law.LawNum}S</div>
      <div className="text-lg">{law.LawBody.LawTitle.text}</div>
      <div className="">
        <pre>{JSON.stringify(lawDataRoot, null, 2)}</pre>
      </div>
      <div className=""></div>
    </div>
  );
};
