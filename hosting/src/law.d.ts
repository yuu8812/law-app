export interface LawDataRoot {
  DataRoot: DataRoot;
}
export interface DataRoot {
  Result: Result;
  ApplData: ApplData;
}
export interface Result {
  Code: number;
  Message: string;
}
export interface ApplData {
  LawId: string;
  LawNum: string;
  LawFullText: LawFullText;
}
export interface LawFullText {
  Law: Law;
}
export interface Law {
  LawNum: string;
  LawBody: LawBody;
  attr_Era: string;
  attr_Lang: string;
  attr_LawType: string;
  attr_Num: string;
  attr_Year: string;
  attr_DataInfo: string;
  attr_LawTypeNum: string;
  attr_ADYear: string;
  attr_PromulgateMonth: string;
  attr_PromulgateDay: string;
  attr_Category: string;
  attr_EnforcementDate: string;
  attr_EnforcementComment: string;
  attr_Mission: string;
  attr_RepealType: string;
  attr_RemainInForce: string;
  attr_Status: string;
  attr_AmendmentPromulgateDate: string;
  attr_ScheduledEnforcementDate: string;
  attr_LawId: string;
  attr_OriginalPromulgateDate: string;
}
export interface LawBody {
  LawTitle: LawTitle;
  TOC: TOC;
  MainProvision: MainProvision;
  SupplProvision?: SupplProvisionEntity[] | null;
}
export interface LawTitle {
  text: string;
  attr_Kana: string;
  attr_KanaSeion: string;
  attr_Abbrev: string;
  attr_AbbrevKana: string;
  attr_AbbrKanaSeion: string;
  attr_OldLawTitle: string;
  attr_OldLawTitleKana: string;
  attr_OldLawTitleKanaSeion: string;
}
export interface TOC {
  TOCLabel: string;
  TOCChapter?: TOCChapterEntity[] | null;
  TOCSupplProvision: TOCSupplProvision;
}
export interface TOCChapterEntity {
  ChapterTitle: string;
  ArticleRange?: string | null;
  attr_Num: string;
  TOCSection?: TOCSectionEntity[] | null;
}
export interface TOCSectionEntity {
  SectionTitle: string;
  ArticleRange: string;
  attr_Num: string;
}
export interface TOCSupplProvision {
  SupplProvisionLabel: string;
}
export interface MainProvision {
  Chapter?: ChapterEntity[] | null;
}
export interface ChapterEntity {
  ChapterTitle: string;
  Article?: ArticleEntity[] | null;
  attr_Num: string;
  Section?: SectionEntity[] | null;
}
export interface ArticleEntity {
  ArticleCaption?: string | null;
  ArticleTitle: string;
  Paragraph?: ParagraphEntity[] | null;
  attr_Num: string;
}
export interface ParagraphEntity {
  ParagraphNum: string;
  ParagraphSentence: ParagraphSentenceOrItemSentence;
  Item?: ItemEntity[] | null;
  attr_Num: string;
}
export interface ParagraphSentenceOrItemSentence {
  Sentence?: SentenceEntity[] | null;
}
export interface SentenceEntity {
  text: string;
  attr_Num: string;
  attr_WritingMode: string;
}
export interface ItemEntity {
  ItemTitle: string;
  ItemSentence: ParagraphSentenceOrItemSentence;
  attr_Num: string;
}
export interface SectionEntity {
  SectionTitle: string;
  Article?: ArticleEntity1[] | null;
  attr_Num: string;
}
export interface ArticleEntity1 {
  ArticleCaption: string;
  ArticleTitle: string;
  Paragraph?: ParagraphEntity1[] | null;
  attr_Num: string;
}
export interface ParagraphEntity1 {
  ParagraphNum: string;
  ParagraphSentence: ParagraphSentence;
  Item?: ItemEntity[] | null;
  attr_Num: string;
}
export interface ParagraphSentence {
  Sentence?: SentenceEntity1[] | null;
}
export interface SentenceEntity1 {
  text: string;
  attr_Num: string;
  attr_WritingMode: string;
  attr_Function?: string | null;
}
export interface SupplProvisionEntity {
  SupplProvisionLabel: string;
  Article?: ArticleEntity2[] | null;
  attr_Extract: string;
  attr_AmendLawNum?: string | null;
  Paragraph?: ParagraphEntity2[] | null;
}
export interface ArticleEntity2 {
  ArticleCaption?: string | null;
  ArticleTitle: string;
  Paragraph?: ParagraphEntity3[] | null;
  attr_Num: string;
}
export interface ParagraphEntity3 {
  ParagraphNum: string;
  ParagraphSentence: ParagraphSentence;
  Item?: ItemEntity1[] | null;
  attr_Num: string;
}
export interface ItemEntity1 {
  ItemTitle: string;
  ItemSentence: ItemSentence;
  attr_Num: string;
}
export interface ItemSentence {
  Column?: ColumnEntity[] | null;
}
export interface ColumnEntity {
  Sentence?: SentenceEntity[] | null;
  attr_Num: string;
}
export interface ParagraphEntity2 {
  ParagraphCaption: string;
  ParagraphNum: string;
  ParagraphSentence: ParagraphSentence1;
  Item?: ItemEntity1[] | null;
  attr_Num: string;
}
export interface ParagraphSentence1 {
  Sentence?: SentenceEntity2[] | null;
}
export interface SentenceEntity2 {
  text: string;
  attr_Function: string;
  attr_Num: string;
  attr_WritingMode: string;
}
