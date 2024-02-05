import React from "react";

const RenderHtml = ({ json }: { json: string }) => {
  const html = json ? JSON.parse(json ?? "") : "";
  return <div className="dangerously_set_innerHTML" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RenderHtml;
