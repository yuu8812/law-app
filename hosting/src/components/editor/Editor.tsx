"use client";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useMemo } from "react";

import { useUploadImage } from "@/hooks/useUploadImage";

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
  const { uploadImage } = useUploadImage();
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
    uploadFile: async (file) => {
      console.log(file);
      const res = await uploadImage(file, "editor");
      return res;
    },
    onEditorReady: () => {
      console.log("");
    },
  });

  const memoedEditor = useMemo(() => editor, [editor]);

  return (
    <BlockNoteView
      editor={memoedEditor}
      className={`relative flex w-full rounded bg-[#ffffff] py-10 ${minHeight ? minHeight : "h-full"}`}
    />
  );
};

export default Editor;
