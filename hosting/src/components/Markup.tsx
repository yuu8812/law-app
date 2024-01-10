"use client";

import ImageResize from "quill-image-resize-module-react";
import { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize", "Toolbar"],
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const Markup = () => {
  const [value, setValue] = useState("");

  const ref = useRef<ReactQuill>(null);

  const focus = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    ref.current?.focus();
    window.scrollTo(x, y);
  };

  return (
    <div className="" onClick={focus}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="sticky top-0 flex min-h-[600px] flex-1 flex-col pb-20"
        placeholder="世界の説明を追加しましょう"
        formats={formats}
        modules={modules}
        ref={ref}
      />
    </div>
  );
};

export default Markup;
