import { getDefaultReactSlashMenuItems } from "@blocknote/react";

const groups = [
  { en: "Headings", ja: "見出し" },
  { en: "Basic blocks", ja: "基本ブロック" },
  { en: "Advanced", ja: "高度なブロック" },
  { en: "Media", ja: "メディア" },
];

const blocks = [
  { key: "Paragraph", title: { en: "Paragraph", ja: "段落" } },
  { key: "Heading 1", title: { en: "Heading", ja: "見出し" } },
  { key: "Heading 2", title: { en: "Heading 2", ja: "見出し2" } },
  { key: "Heading 3", title: { en: "Heading 3", ja: "見出し3" } },
  {
    key: "Bullet List",
    title: { en: "Bullet List", ja: "箇条書きリスト" },
  },
  {
    key: "Numbered List",
    title: { en: "Numbered List", ja: "番号付きリスト" },
  },
  {
    key: "Table",
    title: { en: "Numbered List", ja: "テーブル" },
  },
  {
    key: "Image",
    title: { en: "Numbered List", ja: "画像" },
  },
];

export const translateBlockNoteMenu = (
  block: ReturnType<typeof getDefaultReactSlashMenuItems>[number],
): ReturnType<typeof getDefaultReactSlashMenuItems>[number] => {
  block.group = groups.find((group) => group.en === block.group)?.ja ?? "";
  blocks.map((item) => {
    if (item.key === block.title) {
      block.title = item.title.ja;
      block.subtext = "";
    }
  });
  return block;
};
