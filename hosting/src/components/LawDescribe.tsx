import React from "react";

import { LawDataRoot } from "@/law";

export const LawDescribe = ({ lawDataRoot }: { lawDataRoot: LawDataRoot }) => {
  const law = lawDataRoot.DataRoot.ApplData.LawFullText.Law;
  const lawId = lawDataRoot.DataRoot.ApplData.LawId;

  return (
    <div className="absolute h-full w-full overflow-scroll border-l p-4">
      <div className="">
        <div className="py-1">{law.LawNum}</div>
        <div className="text-lg">{law.LawBody.LawTitle.text}</div>
      </div>
      <div className="">
        {law.LawBody.MainProvision.Chapter?.map((chapter, chapterIndex) => {
          return (
            <div className="" key={chapterIndex} id={`${lawId}_${chapterIndex + 1}`}>
              <p className="">{chapter.ChapterTitle}</p>
            </div>
          );
        })}
      </div>
      <div className="">
        <pre>{JSON.stringify(lawDataRoot, null, 2)}</pre>
      </div>
      <div className="" id="id1">
        hello
      </div>
    </div>
  );
};
