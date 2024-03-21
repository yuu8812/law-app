import { InputType } from "@/app/(header)/world/create/_component/InputContainer";

const createLawBlocks = (law: InputType["laws"]) => {
  const blocks = law.map((item) => {
    return {
      type: "law",
      props: {
        textColor: "default",
        textAlignment: "left",
        lawId: item.law_id,
        lawImageUrl: item.law_image_url,
        lawTitle: item.text,
        lawDescription: item.description,
      },
      content: [],
      children: [],
    };
  });
  return blocks;
};

export const WORLD_BLOCK_TEMPLATE = ({
  description,
  laws,
  title,
}: {
  title: string;
  description: string;
  laws: InputType["laws"];
}) => [
  {
    id: "initialBlockId",
    type: "heading",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 1 },
    content: [{ type: "text", text: title ? title : "テンプレートの地域", styles: {} }],
    children: [],
  },
  {
    id: "51fa15c8-3a44-4ec3-9069-6c9ef13367bc",
    type: "heading",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 3 },
    content: [
      {
        type: "text",
        text: description ? description : "テンプレートの地域の説明",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "50aa15c8-3a44-4ec3-9069-6c9ef13367bc",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [],
    children: [],
  },
  {
    id: "1fcf3d21-8657-4b7b-9f39-1f0eeea0d7f7",
    type: "heading",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 2 },
    content: [{ type: "text", text: "この地域を作成した理由", styles: {} }],
    children: [],
  },
  {
    id: "ad65c1dc-3475-4890-be89-7952383d4227",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
  {
    id: "50fa15c8-3a44-4ec3-9069-6c9ef13367bc",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [],
    children: [],
  },
  {
    id: "5e707e71-1572-4793-96cf-43b889213a51",
    type: "heading",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 2 },
    content: [{ type: "text", text: "この地域で実現したいこと", styles: {} }],
    children: [],
  },
  {
    id: "85b24113-244b-41c7-a650-40116fad7fd8",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
  {
    id: "4f4088b9-0288-4454-a4d7-f34dc98868dd",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [],
    children: [],
  },
  {
    id: "49c6223d-ef55-40b9-9c5d-f39d2c63df86",
    type: "heading",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left", level: 2 },
    content: [{ type: "text", text: "この地域の鍵となる決まり", styles: {} }],
    children: [],
  },

  {
    id: "95651f8f-15a4-4be8-96ba-cb21f20512b1",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
  ...createLawBlocks(laws),
  {
    id: "ad65c1dc-3475-4890-be89-7952383d4227",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
  {
    id: "ad65c1dc-3475-4890-be89-7952383d4227",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
  {
    id: "ad65c1dc-3475-4890-be89-7952383d4227",
    type: "paragraph",
    props: { textColor: "default", backgroundColor: "default", textAlignment: "left" },
    content: [{ type: "text", text: "", styles: {} }],
    children: [],
  },
];
