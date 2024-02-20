import CheckBox from "rc-checkbox";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import MyDrawer from "@/components/Drawer";
import {
  FindLawsForCreateWorldQueryVariables,
  useFindLawsForCreateWorldQuery,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const LawsDrawer = ({
  children,
  setValue,
  laws,
}: {
  children: ReactNode;
  setValue: ([{ law_id, text }]: { law_id: string; text: string }[]) => void;
  laws: InputType["laws"];
}) => {
  const { state } = useUser();
  const [lawIds, setLawIds] = useState<string[]>(laws.map((law) => law.law_id) ?? []);

  const [options, setOptions] = useState<
    "japan_law" | "user_law" | "like" | "bookmark" | "my_law" | ""
  >("");

  useEffect(() => setLawIds(laws.map((law) => law.law_id) ?? []), [laws]);

  const optionDef = (): FindLawsForCreateWorldQueryVariables["where"] => {
    if (options === "japan_law") return { type: { _eq: 1 } };
    if (options === "user_law") return { type: { _eq: 0 } };
    if (options === "like")
      return { law_reactions: { user_id: { _eq: state?.id }, type: { _eq: 0 } } };
    if (options === "bookmark")
      return { law_reactions: { user_id: { _eq: state?.id }, type: { _eq: 1 } } };
    if (options === "my_law")
      return {
        author_id: { _eq: state?.id },
      };
    else return {};
  };

  const { data: lawsData, fetchMore } = useFindLawsForCreateWorldQuery({
    variables: {
      order_by: { created_at: "desc" },
      limit: 40,
      where: optionDef(),
    },
    fetchPolicy: "cache-and-network",
  });

  const ref = useRef<HTMLDivElement>(null);

  const handleClickCheckBox = (id: string, selected: boolean) => {
    selected
      ? setLawIds((prev) => [...prev, id])
      : setLawIds((prev) => prev.filter((i) => i !== id));
  };

  const handleSubmit = () => {
    setValue(
      lawIds.map((law_id) => ({
        law_id,
        text: lawsData?.laws.find((law) => law.id === law_id)?.law_revisions[0].title ?? "",
      })),
    );
    if (!ref.current) return;
    ref.current.click();
  };

  const handleFetchMore = async () => {
    fetchMore({
      variables: {
        offset: lawsData?.laws.length,
        order_by: { created_at: "desc" },
        limit: 40,
        where: optionDef(),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          laws: [...prev.laws, ...fetchMoreResult.laws],
        };
      },
    });
  };

  return (
    <>
      <MyDrawer
        width="w-[60%]"
        button={
          <div role="button" ref={ref}>
            {children}
          </div>
        }
      >
        <div className="p-4">
          <div className="text-lg">あなたの世界に決まりを追加</div>
          <div className="pt-4 text-sm text-gray-500">追加する決まりを選択してください</div>
          <div className="pt-2 text-sm">{lawIds.length}つ選択中</div>
          <div className="py-2">
            <Button
              text="追加する"
              width="w-40"
              disabled={lawIds.length === 0}
              onClick={handleSubmit}
            />
          </div>
          <div className="flex gap-2 pt-2 text-xs">
            <button
              className={`rounded border px-3 py-1 shadow ${options === "" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("")}
            >
              全ての決まり
            </button>
            <button
              className={`rounded border px-3 py-1 shadow ${options === "japan_law" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("japan_law")}
            >
              国の決まり
            </button>
            <button
              className={`rounded border px-3 py-1 shadow ${options === "user_law" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("user_law")}
            >
              ユーザの作成した決まり
            </button>
            <button
              className={`rounded border px-3 py-1 shadow ${options === "my_law" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("my_law")}
            >
              あなたの決まり
            </button>
            <button
              className={`rounded border px-3 py-1 shadow ${options === "like" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("like")}
            >
              いいねした決まり
            </button>
            <button
              className={`rounded border px-3 py-1 shadow ${options === "bookmark" && "bg-so_se_ji text-white"}`}
              onClick={() => setOptions("bookmark")}
            >
              ブックマークした決まり
            </button>
          </div>
          <div className="flex flex-col gap-4 pt-6">
            {lawsData?.laws?.map((law, i) => {
              return (
                <div className="flex items-center gap-4" key={i}>
                  <CheckBox
                    color="red"
                    className="top mt-2 self-baseline"
                    onChange={(v) => handleClickCheckBox(law.id, v.target.checked)}
                    checked={lawIds.includes(law.id)}
                  />
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                      <p className="text-base">{law.law_revisions[0].title}</p>
                      <div className="flex gap-4">
                        <div className="flex gap-2">
                          <p className="">作成者 :</p>
                          <div className="text-gray-700">
                            {law.type === 1 ? "国" : law.user?.name}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <p className="">カテゴリー :</p>
                          <div className="text-gray-700">{law.law_revisions[0].category_ja}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <InView onChange={handleFetchMore} />
          </div>
        </div>
      </MyDrawer>
    </>
  );
};

export default LawsDrawer;
