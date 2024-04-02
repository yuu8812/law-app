import { Parser } from "html-to-react";
import React from "react";

const RenderHtml = ({ html }: { html: string }) => {
  const reactElement = Parser().parse(html);
  return <>{reactElement}</>;
};

export default RenderHtml;
