import React from "react";

import { LawDataRoot } from "@/type2";

export const LawDescribe = ({ lawDataRoot }: { lawDataRoot: LawDataRoot }) => {
  const law = lawDataRoot.DataRoot.ApplData.LawFullText.Law;
  const lawId = lawDataRoot.DataRoot.ApplData.LawId;

  // return (
  //   <div className="absolute h-full w-full overflow-scroll border-l p-4">
  //     <div className="">
  //       <pre>{JSON.stringify(lawDataRoot, null, 2)}</pre>
  //     </div>
  //   </div>
  // );

  return (
    <div className="absolute h-full w-full overflow-scroll border-l p-4">
      <div className="">
        <div className="py-1">{law.LawNum}</div>
        <div className="text-xl">{law.LawBody.LawTitle.text}</div>
      </div>
      <div className="pt-2">
        {law.LawBody.MainProvision.Chapter?.map((chapter, chapterIndex) => {
          return (
            <div className="" key={chapterIndex} id={`${lawId}_${chapterIndex + 1}`}>
              <div className="text-lg">{chapter.ChapterTitle}</div>
              <div className="">
                {chapter.Section?.map((section, sectionIndex) => {
                  return (
                    <div
                      className=""
                      key={chapterIndex}
                      id={`${lawId}_${chapterIndex + 1}_${sectionIndex + 1}`}
                    >
                      <p className="text-lg">{section.SectionTitle}</p>
                      <div className="">
                        {section.Article?.map((article, articleIndex) => {
                          return (
                            <div
                              className="flex flex-col gap-2"
                              key={articleIndex}
                              id={`${lawId}_${sectionIndex + 1}_${articleIndex + 1}`}
                            >
                              <div className="">
                                <p className="py-2 text-lg">{article.ArticleCaption}</p>
                                <p className="text-lg">{article.ArticleTitle}</p>
                              </div>
                              <div className="">
                                {article.Paragraph?.map((paragraph, paragraphIndex) => {
                                  return (
                                    <div
                                      className=""
                                      key={paragraphIndex}
                                      id={`${lawId}_${sectionIndex + 1}_${articleIndex + 1}_${
                                        paragraphIndex + 1
                                      }`}
                                    >
                                      <p className="">{paragraph.ParagraphNum}</p>
                                      <p className="">
                                        {paragraph.ParagraphSentence.Sentence?.map(
                                          (sentence, sentenceIndex) => {
                                            return (
                                              <div
                                                className=""
                                                key={sentenceIndex}
                                                id={`${lawId}_${sectionIndex + 1}_${
                                                  articleIndex + 1
                                                }_${paragraphIndex + 1}_${sentenceIndex + 1}`}
                                              >
                                                <div className="">{sentence.text}</div>
                                              </div>
                                            );
                                          },
                                        )}
                                      </p>
                                      <div className="">
                                        {paragraph.Item?.map((item, itemIndex) => {
                                          return (
                                            <div className="" key={itemIndex}>
                                              <div className="">{item.ItemTitle}</div>
                                              <div className="">
                                                {item.ItemSentence.Sentence?.map(
                                                  (itemSentence, itemSentenceIndex) => {
                                                    return (
                                                      <div className="" key={itemSentenceIndex}>
                                                        <div className="">{itemSentence.text}</div>
                                                      </div>
                                                    );
                                                  },
                                                )}
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="">
          {Array.isArray(law.LawBody.SupplProvision) &&
            law.LawBody.SupplProvision?.map((supplProvision, supplProvisionIndex) => {
              return (
                <div className="" key={supplProvisionIndex}>
                  <div className="">
                    {supplProvision.SupplProvisionLabel}
                    {supplProvision.attr_AmendLawNum}
                  </div>
                  {supplProvision.Article?.map((article, articleIndex) => {
                    return (
                      <div className="" key={articleIndex}>
                        <div className="">{article.ArticleTitle}</div>
                        <div className="">{article.ArticleCaption}</div>
                        <div className="">
                          {article.Paragraph?.map((paragraph, paragraphIndex) => {
                            return (
                              <div className="" key={paragraphIndex}>
                                <div className="">
                                  {paragraph.ParagraphSentence.Sentence?.map(
                                    (sentence, sentenceIndex) => {
                                      return (
                                        <div className="" key={sentenceIndex}>
                                          <div className="">{sentence.text}</div>
                                        </div>
                                      );
                                    },
                                  )}
                                </div>
                                <div className="">
                                  {paragraph.Item?.map((item, itemIndex) => {
                                    return (
                                      <div className="" key={itemIndex}>
                                        <div className="">{item.ItemTitle}</div>
                                        <div className="">
                                          {item.ItemSentence.Column?.map((column, columnIndex) => {
                                            return (
                                              <div className="" key={columnIndex}>
                                                {column.Sentence?.map(
                                                  (columnSentence, columnSentenceIndex) => {
                                                    return (
                                                      <div className="" key={columnSentenceIndex}>
                                                        <div className="">
                                                          {columnSentence.text}
                                                        </div>
                                                      </div>
                                                    );
                                                  },
                                                )}
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
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
