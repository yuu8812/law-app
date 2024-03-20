"use client";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

import ButtonWrap from "@/app/(header)/world/[id]/description/_component/ButtonWrap";
import CitizensDrawer from "@/app/(header)/world/[id]/description/_component/CitizensDrawer";
import DescriptionArea from "@/app/(header)/world/[id]/description/_component/DescriptionArea";
import Reactions from "@/app/(header)/world/_component/Reactions";
import Editor from "@/components/editor/Editor";
import InterCeptModal from "@/components/InterCeptModal";
import PieChart from "@/components/PieChart";
import { language } from "@/constants/language";
import { securityLevel } from "@/constants/securityLevel";
import {
  FindWorldQuery,
  useCreateWorldHistoriesMutation,
  useFindWorldReactionQuery,
} from "@/graphql/type";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUser } from "@/hooks/useUser";
import { removeStorage } from "@/utils/editorStorage";

const TAB_SETTING: { name: "INFO" | "BREAKDOWN"; text: string }[] = [
  { name: "INFO", text: "タイトル" },
  { name: "BREAKDOWN", text: "情報" },
];

const Container = ({ data, id }: { data: FindWorldQuery; id: string }) => {
  const markup = data.worlds_by_pk?.world_histories[0]?.block_json;

  const parse = markup ? JSON.parse(markup) : [];

  const { state } = useUser();

  const { data: worldReactions, refetch } = useFindWorldReactionQuery({
    variables: { world_id: id, user_id: state?.id, like: 0, star: 1 },
  });

  const [tab, setTab] = useState<"INFO" | "BREAKDOWN">(TAB_SETTING[0].name);

  const { addTimeline, removeModal } = useTimelineModal();

  const [edit, setEdit] = useState(false);

  const [editorKey, setEditorKey] = useState<"default" | "editing">("default");

  const [updateWorld] = useCreateWorldHistoriesMutation();

  const [editor, setEditor] = useState<string>("");

  const handleSubmitHistories = async () => {
    const res = await updateWorld({
      variables: {
        object: {
          block_json: editor,
          description: data.worlds_by_pk?.world_histories[0].description,
          title: data.worlds_by_pk?.world_histories[0].title,
          world_id: id,
          official_language: data.worlds_by_pk?.world_histories[0].official_language,
          public_security: data.worlds_by_pk?.world_histories[0].public_security,
          world_image_url: data.worlds_by_pk?.world_histories[0].world_image_url,
        },
      },
    });
    if (res) {
      toast.success("更新しました");
      setEdit(false);
      removeStorage("editWorld");
      revalidatePath(`/world/${id}/description`);
      setEditorKey("default");
    }
  };

  const handleSetEdit = () => {
    setEdit(true);
    setEditorKey("editing");
    toast.info("編集モードになりました");
  };

  const handleExitEdit = () => {
    removeModal();
    setEdit(false);
    setEditorKey("default");
  };

  const handleCancel = () => {
    addTimeline({
      child: <InterCeptModal negative={removeModal} positive={handleExitEdit} />,
      key: "intercept",
    });
  };

  return (
    <div className="flex flex-1 gap-1">
      {!edit && (
        <div className="fixed bottom-2 z-20 lg:hidden">
          <CitizensDrawer id={id} refetch={refetch} />
        </div>
      )}
      <div className="relative top-0 hidden w-80 shrink-0 overflow-scroll lg:flex">
        <div className="fixed top-0 flex h-fit w-80 flex-1 bg-white p-2">
          <div className="relative top-0 flex w-full flex-1 flex-col gap-2">
            <div className="relative top-0 flex h-full w-full flex-1 flex-col overflow-scroll">
              <div className="sticky top-2 z-10 flex min-h-[40px] rounded bg-[#ffffff] text-sm">
                <div className="flex flex-1 items-center justify-between gap-2 px-1 ">
                  {TAB_SETTING.map((setting, i) => {
                    return (
                      <button
                        className={`flex flex-1 items-center justify-center rounded py-1 ${setting.name === tab ? "bg-so_se_ji text-white" : "bg-gray-200"}`}
                        onClick={() => setTab(setting.name)}
                        key={i}
                      >
                        {setting.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {tab === "INFO" && (
              <>
                <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded">
                  <Image
                    src={`${data.worlds_by_pk?.world_histories[0].world_image_url ? data.worlds_by_pk?.world_histories[0].world_image_url : "/dummy.avif"}`}
                    alt="world"
                    className="object-cover"
                    width={310}
                    height={160}
                    priority
                  />
                </div>
                <div className="text-xl">{data.worlds_by_pk?.world_histories[0].title}</div>
                <div className="text text-sm">
                  {data.worlds_by_pk?.world_histories[0].description}
                </div>
                <div className="flex flex-1 flex-col gap-1 px-2 pt-6 text-sm">
                  <div className="flex h-8 items-center">
                    <p className="w-28">指定公用語</p>
                    <div className="pl-4 font-bold">
                      {
                        language.find(
                          (i) => i.en === data.worlds_by_pk?.world_histories[0].official_language,
                        )?.ja
                      }
                    </div>
                  </div>
                  <div className="flex h-8 items-center">
                    <p className="w-28">治安レベル</p>
                    <div className="pl-4 font-bold">
                      {securityLevel[data.worlds_by_pk?.world_histories[0].public_security ?? 0]}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pt-4">
                  <div className="">
                    <div className="flex items-center gap-2">
                      <p className="">個体数</p>
                      <p className="text-xl font-bold">
                        {worldReactions?.worlds_by_pk?.world_citizens_aggregate.aggregate?.count ??
                          0}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="h-36 w-36">
                      {data.worlds_by_pk?.species_percentage && (
                        <PieChart
                          data={data.worlds_by_pk?.species_percentage.map((i) => ({
                            number: i.percentage ?? 0,
                            text: i.species_name ?? "",
                            type: Number(i.species_auto_incremental_id),
                          }))}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex h-10 items-center justify-center pt-10">
                  <CitizensDrawer id={id} refetch={refetch} />
                </div>
              </>
            )}
            {tab == "BREAKDOWN" && <DescriptionArea data={data} />}
          </div>
        </div>
      </div>
      <div className="relative top-0 m-2 flex flex-1 shrink-0 flex-col rounded border bg-[#ffffff] shadow-inner">
        <div className="flex flex-col gap-2 p-2 lg:hidden">
          <div className="text-2xl">{data.worlds_by_pk?.world_histories[0].title}</div>
          <div className="text text-sm">{data.worlds_by_pk?.world_histories[0].description}</div>
        </div>
        <div className="relative flex h-fit w-full flex-1 pb-10">
          <Editor
            defaultValue={parse}
            editorKey="editWorld"
            key={editorKey}
            onChange={(v) => setEditor(v)}
            editable={edit}
          />
        </div>
      </div>
      <div className="absolute flex w-12 flex-col items-center justify-between md:relative">
        <Reactions
          world_id={id}
          setEdit={handleSetEdit}
          edit={edit}
          isAuthor={
            !!(
              data.worlds_by_pk?.author_id &&
              state?.id &&
              data.worlds_by_pk?.author_id === state?.id
            )
          }
        />
      </div>
      {edit && <ButtonWrap onCancel={handleCancel} onSubmit={handleSubmitHistories} />}
    </div>
  );
};

export default Container;
