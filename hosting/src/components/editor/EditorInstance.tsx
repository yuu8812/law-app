import EditorJS, { API, OutputData } from "@editorjs/editorjs";
import { useEffect, useMemo, useRef, useState } from "react";
import * as zod from "zod";

import { EDITOR_JS_TOOLS, i18n } from "@/components/editor/config";
import { useDebounce } from "@/hooks/useDebounce";

const url = zod.string().url();

type ArticleEditorProps = {
  defaultValue?: OutputData;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  onReady: () => void;
  onSave: (data: OutputData) => void;
  onChange: (api: API, events: CustomEvent | CustomEvent[]) => void;
};

const EditorInstance = ({
  defaultValue,
  placeholder,
  readOnly,
  minHeight,
  onReady,
  onChange,
  onSave,
}: ArticleEditorProps) => {
  const id = "a";
  const editorJS = useRef<EditorJS | null>(null);

  const [currentArticle, setCurrentArticle] = useState<OutputData | null>(null);

  const debouncedValue = useDebounce(currentArticle, 2000);

  useEffect(() => {
    debouncedValue && localStorage.setItem("article", JSON.stringify(debouncedValue));
  }, [debouncedValue]);

  const createHref = useMemo(() => {
    currentArticle?.blocks.map((item) => {
      const value: string = item.data?.text;
      const b = url.safeParse(value);
      if (b.success && value.length > 0 && !value.includes("<a href=") && item.id) {
        editorJS?.current?.blocks?.convert(item.id, "paragraph", {
          text: `<a target="_blank" href="${value}">${value}</a>`,
        });
      }
    });
  }, [currentArticle?.blocks]);
  useEffect(() => {
    if (editorJS.current === null) {
      const initial: OutputData = JSON.parse(localStorage.getItem("article") as string);
      editorJS.current = new EditorJS({
        placeholder,
        readOnly,
        minHeight,
        holder: id,
        data: initial || undefined,
        i18n: i18n,
        defaultBlock: "paragraph",
        hideToolbar: false,
        tools: EDITOR_JS_TOOLS,
        onChange(api: API, event: CustomEvent) {
          editorJS.current?.save().then((res) => {
            createHref;
            setCurrentArticle(res);
            onSave(res);
          });
          onChange(api, event);
        },
        onReady() {
          editorJS?.current?.isReady?.then(() => {
            !initial && editorJS.current?.blocks?.insert("Heading", { text: "" });
            onReady();
          });
        },
      });
    }
  }, [defaultValue, id, minHeight, onChange, onReady, onSave, placeholder, readOnly, createHref]);
  return <div id={id} />;
};

EditorInstance.defaultProps = {
  placeholder: "",
  readOnly: false,
  minHeight: 0,
};

export default EditorInstance;
