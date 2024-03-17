import { ReactNode, memo, useMemo, useState } from "react";
import { InView } from "react-intersection-observer";
import { DOMParser } from "xmldom";

import RevisionReaction from "@/app/(header)/law/_component/RevisionReaction";

const Strong = ({
  children,
  strong,
  title,
}: {
  children: ReactNode;
  strong?: boolean;
  title?: boolean;
  margin?: boolean;
}) => {
  if (title) return <div className={`text-2xl font-bold`}>{children}</div>;
  if (!strong) return <div className={`font-normal`}>{children}</div>;
  return <div className={`text-lg font-bold`}>{children}</div>;
};

const BOLD_TAGS = ["LawNum", "ArticleCaption", "ParagraphNum"];

const IGNORE_TAGS = ["LawId", "Code"];

type Add = { columnNumber?: number; lineNumber?: number };

type XmlNode = Add & Node;

const Render = memo(
  ({
    node,
    renderAllowed,
    lawRevisionId,
  }: {
    node: XmlNode;
    renderAllowed: number;
    lawRevisionId: string;
  }) => {
    if ((node?.lineNumber ?? 0) > renderAllowed) return null;
    if (typeof window === "undefined") return null;
    if (!node) return;
    if (IGNORE_TAGS.includes(node.nodeName)) return;
    if (node.nodeName === "ImageData") return null;
    if (node.nodeType === 3) {
      return node?.nodeValue?.trim() === "" ? null : (
        <>
          <div>{node.nodeValue}</div>
        </>
      );
    }

    if (node.nodeName === "TableColumn") {
      if (node.nodeType === 3) {
        return node?.nodeValue?.trim() === "" ? null : (
          <>
            <div>{node.nodeValue}</div>
          </>
        );
      }
    }

    if (node.nodeName.toLowerCase() === "table") {
      return (
        <table key={node.nodeName}>
          <tbody className="">
            {Array.from(node.childNodes).map((childNode, i) => {
              if (childNode.nodeValue?.trim() === "") return null;
              return (
                <tr key={childNode.nodeName + i} className={`border border-r-0`}>
                  {childNode.childNodes &&
                    Array.from(childNode.childNodes).map((cell, i2) => {
                      if (cell.nodeValue?.trim() === "") return null;
                      return (
                        <td
                          key={cell.nodeName + i2}
                          className={`${i2 % 2 !== 0 && i2 !== 6 && `w-[44%] border-r`} `}
                        >
                          {cell.childNodes[1]?.nodeValue?.trim() !== "" && (
                            <Render
                              node={cell}
                              renderAllowed={renderAllowed}
                              lawRevisionId={lawRevisionId}
                            />
                          )}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    return (
      <div key={String(node.columnNumber) + String(node.lineNumber)}>
        <Strong
          strong={BOLD_TAGS.includes(node.nodeName) || node.nodeName.includes("Title")}
          title={node.nodeName === "LawNum"}
        >
          <div className="flex flex-col" key={String(node.columnNumber) + String(node.lineNumber)}>
            {Array.from(node.childNodes).map((item, i) => (
              <>
                <Render
                  node={item}
                  key={i}
                  renderAllowed={renderAllowed}
                  lawRevisionId={lawRevisionId}
                />
              </>
            ))}
          </div>
          {node.nodeName === "Sentence" && node.parentNode?.nodeName !== "TableColumn" && (
            <div id={String(node.columnNumber) + String(node.lineNumber)} className="py-2">
              <RevisionReaction
                columnId={node.lineNumber ?? 0}
                lawRevisionId={lawRevisionId}
                text={node.childNodes[0].nodeValue ?? ""}
                renderAllowed={renderAllowed}
              />
            </div>
          )}
          {BOLD_TAGS.includes(node.nodeName) && <div className="pb-2"></div>}
        </Strong>
      </div>
    );
  },
);

Render.displayName = "Render";

const RenderXml = ({ xml, lawRevisionId }: { xml: string; lawRevisionId: string }) => {
  const parser = useMemo(() => new DOMParser(), []);
  const xmlDoc = useMemo(() => parser.parseFromString(xml, "text/xml"), [xml, parser]);

  const [renderAllowed, setRenderAllowed] = useState(400);

  const handleChange = (inView: boolean) => {
    if (!inView) return;
    setTimeout(() => {
      setRenderAllowed((prev) => prev + 400);
    }, 10);
  };

  return (
    <div className="relative overflow-hidden break-all">
      <Render
        node={xmlDoc.documentElement}
        renderAllowed={renderAllowed}
        lawRevisionId={lawRevisionId}
      />
      <InView onChange={handleChange} rootMargin="800px" />
    </div>
  );
};

export default RenderXml;
