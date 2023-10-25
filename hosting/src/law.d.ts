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
  attr_Year: string;
  attr_Num: string;
  attr_DataInfo: string;
  attr_LawType: string;
  attr_Lang: string;
  attr_LawId: string;
  attr_ADYear: string;
  attr_PromulgateMonth: string;
  attr_PromulgateDay: string;
  attr_ScheduledEnforcementDate: string;
  attr_EnforcementComment: string;
  attr_LawTypeNum: string;
  attr_Category: string;
  attr_OriginalPromulgateDate: string;
  attr_AmendmentPromulgateDate: string;
  attr_Mission: string;
  attr_Status: string;
  attr_Era: string;
  attr_EnforcementDate: string;
  attr_RepealType: string;
}
export interface LawBody {
  LawTitle: LawTitle;
  TOC: TOC;
  MainProvision: MainProvision;
  SupplProvision: SupplProvision;
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
}
export interface ArticleEntity {
  ArticleTitle: string;
  Paragraph?: ParagraphEntity[] | null;
  attr_Num: string;
  ArticleCaption?: string | null;
}
export interface ParagraphEntity {
  ParagraphNum: string;
  ParagraphSentence: ParagraphSentence;
  Item?: ItemEntity[] | null;
  attr_Num: string;
}
export interface ParagraphSentence {
  Sentence?: SentenceEntity[] | null;
}
export interface SentenceEntity {
  text: string;
  attr_Num: string;
  attr_WritingMode: string;
  attr_Function?: string | null;
}
export interface ItemEntity {
  ItemTitle: string;
  ItemSentence: ParagraphSentenceOrSubitem1SentenceOrItemSentence;
  Subitem1?: Subitem1Entity[] | null;
  attr_Num: string;
}
export interface ParagraphSentenceOrSubitem1SentenceOrItemSentence {
  Sentence?: SentenceEntity1[] | null;
}
export interface SentenceEntity1 {
  text: string;
  attr_Num: string;
  attr_WritingMode: string;
}
export interface Subitem1Entity {
  Subitem1Title: string;
  Subitem1Sentence: Subitem1Sentence;
  attr_Num: string;
}
export interface Subitem1Sentence {
  Sentence?: SentenceEntity2[] | null;
}
export interface SentenceEntity2 {
  Ruby?: RubyEntity[] | null;
  text: string;
  attr_Num: string;
  attr_WritingMode: string;
}
export interface RubyEntity {
  Rt: string;
  text: string;
}
export interface SupplProvision {
  SupplProvisionLabel: string;
  Article?: ArticleEntity1[] | null;
  attr_Extract: string;
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
  attr_Num: string;
}
