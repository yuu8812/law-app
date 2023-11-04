export interface Weather {
  law_full_text: LawFullText;
  attached_files_info: AttachedFilesInfo;
  law_info: LawInfo;
  revision_info: RevisionInfo;
}
export interface LawFullText {
  tag: string;
  attr: Attributes;
  children?: ChildrenBaseEntity1[] | null;
}
export interface Attr {
  DataInfo: string;
  Era: string;
  Lang: string;
  LawType: string;
  Num: string;
  Year: string;
  LawTypeNum: string;
  ADYear: string;
  PromulgateMonth: string;
  PromulgateDay: string;
  Category: string;
  EnforcementDate: string;
  EnforcementComment: string;
  Mission: string;
  RepealType: string;
  RemainInForce: string;
  Status: string;
}
export interface ChildrenBaseEntity1 {
  tag: string;
  attr: Attributes;
  children?: (string | ChildrenEntity2)[] | null;
}

export interface ChildrenBaseEntity2 {
  tag: string;
  attr: Attributes;
  children?: (string | ChildrenBaseEntity1)[] | null;
}

export interface Attr2 {
  Kana?: string | null;
  KanaSeion?: string | null;
  Abbrev?: string | null;
  AbbrevKana?: string | null;
  AbbrKanaSeion?: string | null;
  OldLawTitle?: string | null;
  OldLawTitleKana?: string | null;
  OldLawTitleKanaSeion?: string | null;
  AmendLawId?: string | null;
  AmendLawNum?: string | null;
  Extract?: string | null;
  Id?: string | null;
}

export interface Attributes {
  Delete?: string | null;
  Hide?: string | null;
  Num?: string | null;
  OldStyle?: string | null;
  WritingMode?: string | null;
  Function?: string | null;
}

export interface AttachedFilesInfo {
  image_data: string;
  attached_files?: null[] | null;
}
export interface LawInfo {
  law_type: string;
  law_id: string;
  law_num: string;
  law_num_era: string;
  law_num_year: number;
  law_num_type: string;
  law_num_num: string;
  promulgation_date: string;
}
export interface RevisionInfo {
  law_revision_id: string;
  law_type: string;
  law_title: string;
  law_title_kana: string;
  law_title_kanaseion: string;
  abbrev: string;
  abbrev_kana: string;
  category: string;
  revision_index: number;
  subrevision_index: number;
  updated: string;
  previus_revision_id?: null;
  amendment_promulgate_date?: null;
  amendment_enforcement_date: string;
  amendment_enforcement_end_date: string;
  amendment_enforcement_comment: string;
  amendment_scheduled_enforcement_date?: null;
  amendment_law_id?: null;
  amendment_law_title: string;
  amendment_law_title_kana: string;
  amendment_law_title_kanaseion: string;
  amendment_law_num?: null;
  repeal_status?: null;
  remain_in_force: boolean;
  mission: string;
  status: string;
  is_last: boolean;
}
