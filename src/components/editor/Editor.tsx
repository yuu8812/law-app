"use client";

import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import { useMemo, useState } from "react";

import { Button } from "@/components/Button";
import { useUploadImage } from "@/hooks/useUploadImage";

import { BLOCK_TEMPLATE } from "../../editorTemplate/worldTemplate";

const Editor = ({
  defaultValue = [],
  editable = false,
  onChange,
  minHeight,
  template,
}: {
  defaultValue?: [];
  editable?: boolean;
  onChange?: (value: string) => void;
  minHeight?: string;
  template?: "law" | "world";
}) => {
  const { uploadImage } = useUploadImage();
  const [contentLength, setContentLength] = useState(0);
  const editor = useBlockNote({
    onEditorContentChange: async (editor) => {
      editor.topLevelBlocks.forEach((block) => {
        if (block.type === "image" && block.props.url === "") {
          block.props.url = "/no-image.png";
        }
      });
      onChange && onChange(JSON.stringify(editor.topLevelBlocks));
      setContentLength(editor.topLevelBlocks.length);
    },
    initialContent: defaultValue,
    editable: editable,
    uploadFile: async (file) => {
      console.log(file);
      const res = await uploadImage(file, "editor");
      return res;
    },
    onEditorReady: () => {
      console.log("editor ready");
    },
  });

  const memoedEditor = useMemo(() => editor, [editor]);

  const onClickTemplate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editor.replaceBlocks(editor.topLevelBlocks, BLOCK_TEMPLATE as any);
  };

  console.log(contentLength);

  return (
    <div className="flex min-h-[100%] w-full flex-1 flex-col">
      {template && (
        <div className="my-2 h-fit w-fit">
          <Button
            onClick={onClickTemplate}
            text="テンプレートを使う"
            width="w-40"
            disabled={contentLength > 2}
          />
        </div>
      )}
      <BlockNoteView
        editor={memoedEditor}
        className={`relative flex w-full flex-1 rounded bg-[#ffffff] py-10 ${minHeight ? minHeight : "h-full"}`}
      />
    </div>
  );
};

export default Editor;
