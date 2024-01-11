import React from "react";

import EditorInstance from "@/components/editor/EditorInstance";

const Editor = () => {
  const onChange = () => {
    console.log("");
  };
  const onReady = () => {
    console.log("");
  };
  const onSave = () => {
    console.log("first");
  };
  return (
    <EditorInstance
      placeholder="入力しましょう"
      minHeight={500}
      onChange={onChange}
      onReady={onReady}
      onSave={onSave}
    />
  );
};

export default Editor;
