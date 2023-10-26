import clsx from "clsx";
import { X2jOptions, XMLParser } from "fast-xml-parser";
import Link from "next/link";
import React from "react";

import Badge from "@/components/Badge";
import { Card } from "@/components/Card";
import DescribeSwitcher from "@/components/DescribeSwitcher";
import { LawDescribe } from "@/components/LawDescribe";
import { TocDescribe } from "@/components/TocDescribe";
import { LawDataRoot } from "@/law";

const alwaysArray = ["TOCChapter", "Article", "Paragraph", "Sentence", "Item"];

// .ApplData.LawFullText.Law.LawBody.MainProvision.Chapter.Article

const options: Partial<X2jOptions> = {
  ignoreAttributes: false,
  attributeNamePrefix: "attr_",
  textNodeName: "text",
  ignoreDeclaration: true,
  //name: is either tagname, or attribute name
  //jPath: upto the tag name
  // preserveOrder: true,
  isArray: (jpath) => {
    if (alwaysArray.indexOf(jpath) !== -1) return true;
    return false;
  },
};

const res = async () => {
  const res = await fetch("https://elaws.e-gov.go.jp/api/{Version}/lawdata/406AC0000000009", {
    cache: "no-cache",
  });
  const xs = new XMLParser(options);
  const json = xs.parse(await res.text());
  return json;
};

export type ModalSearchParams = { describe: "main" | "toc"; nav: "open" | "close" };

const page = async ({ searchParams }: { searchParams: ModalSearchParams }) => {
  const lawDataRoot: LawDataRoot = await res();

  return (
    <div className="relative h-full w-full">
      <div className="absolute -left-8 top-0 flex flex-col gap-2">
        <Badge text={"刑事"} className="border-2 border-orange-300/70 bg-white" />
        <Badge text={"省令"} className="border-2 border-red/70 bg-white" />
      </div>
      <Card className="relative m-2 flex h-full w-full flex-1 shadow-2xl">
        <div
          className={clsx("flex transition-all", searchParams.nav === "close" ? "w-0" : "w-[27%]")}
        >
          <div className={clsx("relative top-0 h-full flex-1")}></div>
        </div>
        <Link
          className="relative left-0 flex w-6 items-center justify-center"
          href={{
            query: {
              ...searchParams,
              nav: searchParams.nav === "close" ? "open" : "close",
            } as ModalSearchParams,
          }}
          replace
        >
          {searchParams.nav === "close" ? ">" : "<"}
        </Link>
        <div className="relative flex flex-1">
          <DescribeSwitcher searchParams={searchParams} />
          {searchParams.describe !== "toc" && <LawDescribe lawDataRoot={lawDataRoot} />}
          {searchParams.describe === "toc" && (
            <TocDescribe lawDataRoot={lawDataRoot} searchParams={searchParams} />
          )}
        </div>
      </Card>
    </div>
  );
};

export default page;
