import CheckBox from "rc-checkbox";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { InView } from "react-intersection-observer";

import { InputType } from "@/app/(header)/world/create/_component/InputContainer";
import { Button } from "@/components/Button";
import MyDrawer from "@/components/Drawer";
import { Input } from "@/components/Input";
import {
  FindLawsForCreateWorldQuery,
  FindLawsForCreateWorldQueryVariables,
  useFindLawsForCreateWorldQuery,
} from "@/graphql/type";
import { useDebounce } from "@/hooks/useDebounce";
import { useUser } from "@/hooks/useUser";

const LawsDrawer = ({
  children,
  laws,
  handleSubmitLaw,
  buttonText,
  description,
  title,
}: {
  children: ReactNode;
  laws: InputType["laws"];
  handleSubmitLaw: (laws: InputType["laws"]) => void;
  title: string;
  description: string;
  buttonText: string;
}) => {
  const { state } = useUser();
  const [selectedLaws, setSelectedLaws] = useState<InputType["laws"]>([]);

  const [search, setSearch] = useState<string>("");

  const [options, setOptions] = useState<
    "japan_law" | "user_law" | "like" | "bookmark" | "my_law" | ""
  >("");

  useEffect(() => setSelectedLaws(laws), [laws]);

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
      where: {
        ...optionDef(),
        law_revisions: search ? { title: { _like: `%${search}%` } } : undefined,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const handleClickCheckBox = (
    law: FindLawsForCreateWorldQuery["laws"][number],
    selected: boolean,
  ) => {
    selected
      ? setSelectedLaws((prev) => [
          ...prev,
          {
            law_id: law.id,
            description: law.law_revisions[0].description ?? "",
            law_image_url: law.law_revisions[0].law_image_url ?? "",
            text: law.law_revisions[0].title,
          },
        ])
      : setSelectedLaws((prev) => prev.filter((i) => i.law_id !== law.id));
  };

  const ref = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    if (!lawsData) return;
    handleSubmitLaw(selectedLaws);
    ref.current?.click();
  };

  const handleFetchMore = async () => {
    await fetchMore({
      variables: {
        offset: lawsData?.laws.length,
        order_by: { created_at: "desc" },
        limit: 40,
        where: {
          ...optionDef(),
          law_revisions: search ? { title: { _like: `%${search}%` } } : undefined,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          laws: [...prev.laws, ...fetchMoreResult.laws],
        };
      },
    });
  };

  const { debounce } = useDebounce(500);

  const { register, getValues } = useForm<{ text: string }>();

  return (
    <MyDrawer
      width="w-[90%] md:w-[60%]"
      button={
        <div role="button" ref={ref}>
          {children}
        </div>
      }
    >
      <div className="p-4">
        <div className="text-lg">{title}</div>
        <div className="pt-4 text-sm text-gray-500">{description}</div>
        <div className="pt-2 text-sm">{selectedLaws.length}つ選択中</div>
        <div className="py-2">
          <Button
            text={buttonText}
            width="w-40"
            disabled={selectedLaws.length === 0}
            onClick={handleSubmit}
          />
        </div>
        <button className="w-84 flex flex-1">
          <div
            className={`flex w-80 ${search.length > 0 ? "bg-so_se_ji text-white" : "bg-white"} flex items-center rounded border px-2 py-1 shadow transition-all duration-200`}
          >
            <IoSearchOutline size={20} />
            <div className={`w-full px-2`}>
              <Input
                register={register}
                inputName="text"
                type="text"
                width="w-[270px]"
                height="h-8 text-black"
                border={false}
                onChange={() => debounce(() => setSearch(getValues("text")))}
              />
            </div>
          </div>
        </button>
        <div className="flex flex-wrap gap-2 pt-2 text-xs md:flex-row">
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
        <div className="flex flex-col gap-4 overflow-scroll pt-6">
          {lawsData?.laws?.map((law, i) => {
            return (
              <div className="flex items-center gap-4" key={i}>
                <CheckBox
                  color="red"
                  className="top mt-2 self-baseline"
                  onChange={(v) => handleClickCheckBox(law, v.target.checked)}
                  checked={!!selectedLaws.find((i) => i.law_id === law.id)}
                />
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2 text-sm text-gray-500">
                    <p className="text-base">{law.law_revisions[0]?.title}</p>
                    <div className="flex flex-col gap-4 md:flex-row">
                      <div className="flex gap-2">
                        <p className="">作成者 :</p>
                        <div className="text-gray-700">
                          {law.type === 1 ? "国" : law.user?.name}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <p className="whitespace-nowrap">カテゴリー:</p>
                        <div className="text-gray-700">{law.law_revisions[0]?.description}</div>
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
  );
};

export default LawsDrawer;
