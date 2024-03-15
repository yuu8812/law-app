import { ReactNode } from "react";
import { DOMParser } from "xmldom";

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

const Render = (node: XmlNode) => {
  if (!node) return;
  if (IGNORE_TAGS.includes(node.nodeName)) return;
  if (node.nodeType === 3) {
    // テキストノードの場合
    return <div>{node.nodeValue}</div>;
  }

  if (node.nodeName.toLowerCase() === "table") {
    return (
      <table key={node.nodeName}>
        <tbody>
          {Array.from(node.childNodes).map((childNode, i) => (
            <tr key={childNode.nodeName + i} className="border">
              {childNode.childNodes &&
                Array.from(childNode.childNodes).map((cell, i2) => (
                  <td key={cell.nodeName + i2} className="border">
                    {Render(cell)}
                  </td>
                ))}
            </tr>
          ))}
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
          {Array.from(node.childNodes).map(Render)}
        </div>
        {node.nodeName === "Sentence" && (
          <div className="pt-2" id={String(node.columnNumber) + String(node.lineNumber)}>
            {/* <RevisionReaction /> */}
          </div>
        )}
        {BOLD_TAGS.includes(node.nodeName) && <div className="pb-2"></div>}
      </Strong>
    </div>
  );
};

const RenderXml = ({ xml }: { xml: string }) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");

  return <div className="overflow-hidden break-all">{Render(xmlDoc.documentElement)}</div>;
};

export default RenderXml;
