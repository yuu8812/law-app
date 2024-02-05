"use client";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useMemo } from "react";
const Editor = ({
  defaultValue = [],
  editable = false,
  onChange,
  minHeight,
}: {
  defaultValue?: [];
  editable?: boolean;
  onChange?: (value: string) => void;
  minHeight?: string;
}) => {
  const editor = useBlockNote({
    onEditorContentChange: async (editor) => {
      editor.topLevelBlocks.forEach((block) => {
        if (block.type === "image" && block.props.url === "") {
          block.props.url = "/no-image.png";
        }
      });
      onChange && onChange(JSON.stringify(editor.topLevelBlocks));
    },
    initialContent: defaultValue,
    editable: editable,
    uploadFile: async () => {
      return await "https://www.zukan-bouz.com/public_image/Fish/103/Thumb630/suzuki_1.jpg";
    },
    onEditorReady: () => {},
  });

  const memoedEditor = useMemo(() => editor, [editor]);

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={memoedEditor}
      className={`relative flex w-full rounded bg-[#ffffff] py-10 ${minHeight ? minHeight : "h-full"}`}
      onClick={(e) => {
        e.preventDefault();
      }}
    />
  );
};

export default Editor;
