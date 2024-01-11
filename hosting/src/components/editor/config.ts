import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import Marker from "@editorjs/marker";
import NestedList from "@editorjs/nested-list";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";

export const EDITOR_JS_TOOLS = {
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        facebook: true,
        instagram: true,
        twitter: true,
      },
    },
  },
  Heading: {
    class: Header,
    config: {
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 1,
      placeholder: "見出し",
    },
  },
  table: Table,
  marker: Marker,
  list: {
    class: NestedList,
    inlineToolbar: true,
    config: {
      defaultStyle: "unordered",
    },
  },
  warning: Warning,
  code: Code,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "http://localhost:3000", // Your backend endpoint for url data fetching
    },
  },
  image: Image,
  raw: Raw,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

export const i18n = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "クリックして調整",
          "or drag to move": "ドラッグして移動",
        },
      },
      inlineToolbar: {
        converter: {
          "Convert to": "変換",
        },
      },
      toolbar: {
        toolbox: {
          Add: "追加",
        },
      },
    },
    toolNames: {
      Text: "テキスト",
      Heading: "タイトル",
      Checklist: "チェックリスト",
      List: "リスト",
      Marker: "マーカー",
      Delimiter: "直線",
      Table: "表",
      Link: "リンク",
      Bold: "太字",
      Italic: "斜体",
      Image: "画像",
    },
    blockTunes: {
      delete: {
        Delete: "削除",
      },
      moveUp: {
        "Move up": "上に移動",
      },
      moveDown: {
        "Move down": "下に移動",
      },
    },
  },
};
