"use server";
import { law } from "@/108DF0000000103_20150801_000000000000000";
import { adminClient } from "@/api/adminClient";
import {
  MyMutationDocument,
  MyMutationMutation,
  MyMutationMutationVariables,
} from "@/graphql/type";

const lawRevisionVariables: MyMutationMutationVariables = {
  api_law_id: "108DF0000000103aabaaaaaa",
  law_revisions: {
    data: [
      {
        api_law_revision_id: "108DF0000000109_20150801_000000000000000",
        era: law.attr.Era,
        year: law.attr.Year,
        num: law.attr.Num,
        category: law.attr.Category,
        type: law.attr.LawType,
        status: law.attr.Status,
        api_law_data_info: law.attr.DataInfo,
        api_law_type_num: law.attr.LawTypeNum,
        ad_year: law.attr.ADYear,
        promulgate_month: law.attr.PromulgateMonth,
        promulgate_day: law.attr.PromulgateDay,
        enforcement_date: law.attr.EnforcementDate,
        enforcement_comment: law.attr.EnforcementComment,
        repeal_type: law.attr.RepealType,
        remain_in_force: law.attr.RemainInForce,
        num_kanji: law.children[0].children[0],
        title_kana: law.children[1].children[0].attr.Kana,
        title_kana_seion: law.children[1].children[0].attr.KanaSeion,
        abbrev: law.children[1].children[0].attr.Abbrev,
        abbrev_kana: law.children[1].children[0].attr.AbbrevKana,
        abbrev_kana_seion: law.children[1].children[0].attr.AbbrKanaSeion,
        title: law.children[1].children[0].children[0],
        old_law_title: law.children[1].children[0].attr.OldLawTitle,
        old_law_title_kana: law.children[1].children[0].attr.OldLawTitleKana,
        old_law_title_kana_seion: law.children[1].children[0].attr.OldLawTitleKanaSeion,
        lang: law.attr.Lang,
        mission: law.attr.Mission,
        law_full_text: law,
      },
    ],
  },
};

export const createRawRevision = async (): Promise<MyMutationMutation> => {
  const res = await adminClient()
    .mutate({
      mutation: MyMutationDocument,
      variables: lawRevisionVariables,
    })
    .catch((e) => {
      throw e;
    });
  console.log(res, "mutation done");
  return res.data;
};
