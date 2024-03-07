"use client";

import {
  BlockNoteSchema,
  defaultProps,
  filterSuggestionItems,
  defaultBlockSpecs,
} from "@blocknote/core";
import {
  BlockNoteView,
  DefaultReactSuggestionItem,
  HyperlinkToolbarController,
  SuggestionMenuController,
  createReactBlockSpec,
  getDefaultReactSlashMenuItems,
  useCreateBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import LawsDrawer from "@/components/LawDrawer";
import LoadEditingModal from "@/components/LoadEditingModal";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUploadImage } from "@/hooks/useUploadImage";
import { Key, loadFromStorage, removeStorage, saveToStorage } from "@/utils/editorStorage";
import { translateBlockNoteMenu } from "@/utils/translateBlockNoteMenu";

export const LawBlock = createReactBlockSpec(
  {
    type: "law",
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      lawId: {
        default: "",
      },
      lawImageUrl: {
        default: "",
      },
      lawTitle: {
        default: "",
      },
      lawDescription: {
        default: "",
      },
    },
    content: "inline",
  },
  {
    render: (props) => {
      return (
        <Link
          href={`/law/${props.block.props.lawId}`}
          className="flex w-full flex-1 rounded border shadow transition-all hover:bg-slate-100"
          target="_blank"
        >
          <div className="flex flex-1 gap-2 p-2">
            <div className="h-[120px] w-[200px] overflow-hidden">
              <Image
                alt="law-image"
                src={props.block.props.lawImageUrl}
                width={200}
                height={120}
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <div className="">
              <div className="text-lg font-bold">{props.block.props.lawTitle}</div>
              <div className="text-sm text-gray-600">{props.block.props.lawDescription}</div>
            </div>
            <div className={"inline-content"} ref={props.contentRef} contentEditable={false} />
          </div>
        </Link>
      );
    },
  },
);

const Editor = ({
  defaultValue = [],
  editable = false,
  onChange,
  minHeight,
  template,
  templateBlock,
  editorKey,
}: {
  defaultValue?: [];
  editable?: boolean;
  onChange?: (value: string) => void;
  minHeight?: string;
  template?: "law" | "world";
  editorKey: Key;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateBlock?: any;
}) => {
  const { uploadImage } = useUploadImage();
  const [contentLength, setContentLength] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const schema = BlockNoteSchema.create({
    blockSpecs: {
      // Adds all default blocks.
      ...defaultBlockSpecs,
      // Adds the Alert block.
      law: LawBlock,
    },
  });

  const { addTimeline, removeModal } = useTimelineModal();

  const handleNegative = useCallback(() => {
    removeModal();
    removeStorage(editorKey);
  }, [editorKey, removeModal]);

  const editor = useCreateBlockNote({
    schema,
    uploadFile: async (file) => {
      const res = await uploadImage(file, "editor");
      return res;
    },
    initialContent: defaultValue.length === 0 ? undefined : defaultValue,
    defaultStyles: true,
  });

  const handlePositive = useCallback(async () => {
    editor.replaceBlocks(
      editor.document,
      (await loadFromStorage(editorKey)) as (typeof schema.Block)[],
    );
    removeModal();
  }, [editorKey, removeModal, schema, editor]);

  const onReady = (func: () => Promise<void>) => {
    func();
  };

  useLayoutEffect(() => {
    if (!editable) return;
    onReady(async () => {
      const st = await loadFromStorage(editorKey);
      console.log(st, "editorKey");
      if (st?.length ?? 0 > 2) {
        addTimeline({
          child: <LoadEditingModal negative={handleNegative} positive={handlePositive} />,
          key: "loadEditingModal",
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openDrawer = () => {
    ref.current?.click();
  };
  const insertLaw = (editor: typeof schema.BlockNoteEditor, laws: InputType["laws"]) => {
    const currentBlock = editor.getTextCursorPosition().block;
    const lawBlocks: (typeof schema.PartialBlock)[] = laws.map((law) => ({
      type: "law",
      props: {
        lawId: law.law_id,
        lawImageUrl: law.law_image_url ?? "",
        lawTitle: law.text,
        lawDescription: law.description,
      },
    }));
    console.log(editor, laws);
    editor.insertBlocks(lawBlocks, currentBlock, "before");
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const insertLawItem = (editor?: typeof schema.BlockNoteEditor) => ({
    title: "決まりを挿入",
    onItemClick: () => openDrawer(),
    group: "so-se-ji",
    icon: <HiOutlineGlobeAlt size={18} />,
    subtext: "決まりを選んでください",
  });
  const slashMenuItemTranslate = (
    editor: typeof schema.BlockNoteEditor,
  ): DefaultReactSuggestionItem[] =>
    getDefaultReactSlashMenuItems(editor).map((item) => {
      return translateBlockNoteMenu(item);
    });

  const getCustomSlashMenuItems = (
    editor: typeof schema.BlockNoteEditor,
  ): DefaultReactSuggestionItem[] => [insertLawItem(editor), ...slashMenuItemTranslate(editor)];

  const handleChange = (editor: typeof schema.BlockNoteEditor) => {
    if (!editor) return;
    if (editor.document.length < 2) return;
    if (JSON.stringify(editor.document) !== JSON.stringify(defaultValue)) {
      saveToStorage<(typeof schema.Block)[]>(editor.document, editorKey);
    }
    onChange && onChange(JSON.stringify(editor.document));
    setContentLength(editor.document.length);
  };

  const memoedEditor = useMemo(() => editor, [editor]);

  const onClickTemplate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editor.replaceBlocks(editor.document, templateBlock as any);
  };

  return (
    <div className="relative flex min-h-[100%] min-w-[100%] flex-1 flex-col">
      <LawsDrawer
        laws={[]}
        handleSubmitLaw={(laws) => {
          insertLaw(editor, laws);
        }}
        buttonText="挿入する"
        description="決まりを挿入"
        title="決まりを選択してください"
      >
        <div role="button" ref={ref} hidden />
      </LawsDrawer>
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
        className={`relative flex min-w-[100%] flex-1 shrink-0 rounded bg-[#ffffff] py-10 ${minHeight ? minHeight : "h-full"}`}
        onClick={(e) => !editable && e.preventDefault()}
        onChange={() => handleChange(editor)}
        editable={editable}
        slashMenu={false}
        placeholder="ここに入力してください"
        hyperlinkToolbar={false}
      >
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) => filterSuggestionItems(getCustomSlashMenuItems(editor), query)}
        />
        <HyperlinkToolbarController></HyperlinkToolbarController>
      </BlockNoteView>
    </div>
  );
};

export default Editor;
