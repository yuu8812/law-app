import Link from "next/link";
import React from "react";

import { ModalSearchParams } from "@/app/@modal/(.)laws/[id]/page";
import { LawDataRoot } from "@/law";

export const TocDescribe = ({
  lawDataRoot,
  searchParams,
}: {
  lawDataRoot: LawDataRoot;
  searchParams: ModalSearchParams;
}) => {
  const toc = lawDataRoot.DataRoot.ApplData.LawFullText.Law.LawBody.TOC;
  const lawId = lawDataRoot.DataRoot.ApplData.LawId;
  return (
    <div className="absolute flex h-full w-full flex-col gap-2 overflow-scroll border-l p-4">
      <div className="mt-4"></div>
      <div className="flex flex-col gap-4">
        {toc.TOCChapter?.map((chapter, chapterIndex) => {
          return (
            <div className="" key={chapterIndex}>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <Link
                    href={{
                      hash: `${lawId}_${chapterIndex + 1}`,
                      query: { ...searchParams, describe: "main" } as ModalSearchParams,
                    }}
                    replace
                    className="w-fit border-b border-stone-950"
                  >
                    {chapter.ChapterTitle}
                  </Link>
                  {chapter.ArticleRange && (
                    <Link
                      href={{
                        hash: `${lawId}_${chapterIndex + 1}`,
                        query: { ...searchParams, describe: "main" } as ModalSearchParams,
                      }}
                      replace
                      className=""
                    >
                      {chapter.ArticleRange}
                    </Link>
                  )}
                </div>
                {!chapter.ArticleRange && (
                  <div className="mb-1 mt-4 flex flex-col gap-3">
                    {chapter.TOCSection?.map((section, sectionIndex) => {
                      return (
                        <Link
                          href={{
                            hash: `${lawId}_${chapterIndex + 1}_${sectionIndex + 1}`,
                            query: { ...searchParams, describe: "main" } as ModalSearchParams,
                          }}
                          replace
                          className="flex gap-2"
                          key={sectionIndex}
                        >
                          <p className="w-fit border-b border-stone-950">
                            ・ {section.SectionTitle}
                          </p>
                          <p className="">{section.ArticleRange}</p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <Link href="#" className="mb-4 w-fit border-b border-stone-950">
          {toc.TOCSupplProvision.SupplProvisionLabel}
        </Link>
      </div>
    </div>
  );
};
