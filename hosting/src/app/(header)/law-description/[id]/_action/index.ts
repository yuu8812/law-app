import { ColumnCommentState } from "@/app/(header)/law-description/[id]/_components/ColumnCommentInput";
import { createCommentForLawColumn } from "@/client/law";
import { basicCommentSchema } from "@/constants/form/schema";

export const createCommentAction = async (
  state: ColumnCommentState,
  formData: FormData,
): Promise<ColumnCommentState> => {
  const comment = formData.get("comment") as string;

  const parseSucceed = basicCommentSchema.safeParse(comment).success;

  if (!parseSucceed) {
    return {
      ...state,
      error: "コメントの投稿に失敗しました",
      return: null,
    };
  }

  const variables = state.variables;

  const res = await createCommentForLawColumn({
    column_id: variables.law_revision_column_identify_id,
    law_revision_id: variables.law_revision_id,
    text: comment,
  });

  return {
    ...state,
    error: null,
    return: res.insert_law_revision_columns_one?.id ?? "",
  };
};
