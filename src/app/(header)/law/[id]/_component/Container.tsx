"use client";
import { revalidatePath } from "next/cache";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

import ButtonWrap from "@/app/(header)/law/[id]/_component/ButtonWrap";
import Reactions from "@/app/(header)/law/_component/Reactions";
import DefaultLoading from "@/components/DefaultLoading";
import InterCeptModal from "@/components/InterCeptModal";
import NewnessTag from "@/components/NewnessTag";
import World from "@/components/World";
import { FindLawQuery, useCreateLawRevisionMutation } from "@/graphql/type";
import { useTimelineModal } from "@/hooks/useTimelineModal";
import { useUser } from "@/hooks/useUser";
import { removeStorage } from "@/utils/editorStorage";

const Editor = dynamic(() => import("@/components/editor/Editor"), {
  loading: () => <DefaultLoading />,
});

const RenderXml = dynamic(() => import("@/app/(header)/law/_component/RenderXml"), {
  loading: () => <DefaultLoading />,
});

const TAB_SETTING: { name: "INFO" | "BREAKDOWN"; text: string }[] = [
  { name: "INFO", text: "タイトル" },
  { name: "BREAKDOWN", text: "情報" },
];

const Container = ({ data }: { data: FindLawQuery }) => {
  const [tab, setTab] = useState<"INFO" | "BREAKDOWN">("INFO");
  const [edit, setEdit] = useState(false);

  const { state } = useUser();

  const parse = data.laws_by_pk?.law_revisions[0].block_json
    ? JSON.parse(data.laws_by_pk?.law_revisions[0].block_json)
    : [];

  const { addTimeline, removeModal } = useTimelineModal();

  const [editorKey, setEditorKey] = useState<"default" | "editing">("default");

  const [mutate] = useCreateLawRevisionMutation();

  const [editor, setEditor] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async () => {
    const res = await mutate({
      variables: {
        object: {
          description: data.laws_by_pk?.law_revisions[0].description,
          title: data.laws_by_pk?.law_revisions[0].title,
          law_category: data.laws_by_pk?.law_revisions[0].law_category,
          law_status: data.laws_by_pk?.law_revisions[0].law_status,
          law_image_url: data.laws_by_pk?.law_revisions[0].law_image_url,
          law_id: data.laws_by_pk?.id,
          law_type: data.laws_by_pk?.law_revisions[0].law_type,
          block_json: editor,
        },
      },
    });
    if (res) {
      toast.success("更新しました");
      setEdit(false);
      removeStorage("editLaw");
      revalidatePath(`/world/${data.laws_by_pk?.id}/description`);
      setEditorKey("default");
      router.refresh();
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
    <>
      <div className="relative hidden w-80 lg:flex">
        <div className="fixed h-full w-80 flex-1 bg-white pt-2 text-sm ">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-between gap-2 px-1 ">
              {TAB_SETTING.map((setting, i) => {
                return (
                  <button
                    className={`flex flex-1 items-center justify-center rounded py-1 ${setting.name === tab ? "bg-so_se_ji text-white" : "bg-gray-200"}`}
                    key={i}
                    onClick={() => setTab(setting.name)}
                  >
                    {setting.text}
                  </button>
                );
              })}
            </div>
          </div>
          {tab === "BREAKDOWN" && (
            <div className="flex flex-col gap-1 pt-2">
              <div className="my-1">採用されている地域</div>
              {(data.laws_by_pk?.world_laws.length ?? 0) > 0 ? (
                data.laws_by_pk?.world_laws.map((world, i) => (
                  <World
                    id={world.world.id}
                    title={world.world.world_histories[0].title}
                    description={world.world.world_histories[0].description}
                    key={i}
                  />
                ))
              ) : (
                <div className="text-gray-400">採用されている地域がまだありません</div>
              )}
            </div>
          )}
          {tab === "INFO" && (
            <div className="flex flex-1 flex-col gap-2 break-all p-2">
              {data.laws_by_pk?.type === 1 ? (
                <>
                  <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded">
                    <Image
                      src={`/hinomaru.webp`}
                      alt="world"
                      className="object-cover"
                      width={304}
                      height={160}
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-4 pl-2">
                    <div className="text-lg">{data.laws_by_pk?.law_revisions[0].title}</div>
                    <div className="pb-4 text-sm text-gray-600">
                      {data.laws_by_pk?.law_revisions[0].description}
                    </div>
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">カテゴリ</div>
                      <div className="">
                        {data.laws_by_pk.law_revisions[0]?.law_category ?? "なし"}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">作成者</div>
                      <div className="">{"日本国"}</div>
                    </div>
                    <div className="flex items-center gap-4 pt-1 text-gray-600">
                      <div className="">決まりがある場所</div>
                      <div className="">{"日本国"}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <>
                    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded">
                      <Image
                        src={data.laws_by_pk?.law_revisions[0].law_image_url ?? "/dummy.avif"}
                        alt="world"
                        className="object-cover"
                        width={304}
                        height={160}
                      />
                    </div>
                    <div className="text-lg">{data.laws_by_pk?.law_revisions[0].title}</div>
                    <div className="pb-4 text-sm text-gray-600">
                      {data.laws_by_pk?.law_revisions[0].description}
                    </div>
                    <div className="w-fit">
                      <NewnessTag newness={data.laws_by_pk?.newness as 0 | 1} />
                    </div>
                    <div className="flex flex-col gap-4 pl-2">
                      <div className="flex items-center gap-4 pt-1 text-gray-600">
                        <div className="">カテゴリ</div>
                        <div className="">
                          {data.laws_by_pk?.law_revisions[0]?.law_category ?? "なし"}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-1 text-gray-600">
                        <div className="">作成者</div>
                        <div className="">{`${data.laws_by_pk?.type === 1 ? "日本国" : data.laws_by_pk?.user?.name ?? ""}`}</div>
                      </div>
                      <div className="flex items-center gap-4 pt-1 text-gray-600">
                        <div className="">決まりがある場所</div>
                        <div className="">
                          {data.laws_by_pk?.type === 1
                            ? "日本国"
                            : data.laws_by_pk?.place
                              ? data.laws_by_pk?.place
                              : "未設定"}
                        </div>
                      </div>
                    </div>
                  </>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="relative top-0 my-2 mb-10 flex flex-1 flex-col overflow-y-scroll border bg-[#ffffff] shadow-inner md:mb-4">
        {data.laws_by_pk?.type === 0 && (
          <div className="flex flex-col gap-2 p-4 md:hidden">
            <div className="text-xl">{data.laws_by_pk?.law_revisions[0].title}</div>
            <div className="pb-4 text-sm text-gray-600">
              {data.laws_by_pk?.law_revisions[0].description}
            </div>
          </div>
        )}
        <div className="relative flex h-fit w-full flex-1 p-4">
          {data.laws_by_pk?.type === 0 ? (
            <Editor
              defaultValue={parse}
              editable={edit}
              editorKey="editLaw"
              key={editorKey}
              onChange={(v) => setEditor(v)}
              type="law"
              identifyId={data.laws_by_pk.law_revisions[0].id ?? ""}
            />
          ) : (
            <RenderXml
              xml={data.laws_by_pk?.law_revisions[0].data_xml ?? ""}
              lawRevisionId={data.laws_by_pk?.law_revisions[0].id ?? ""}
            />
          )}
        </div>
      </div>
      <div className="absolute mr-1 flex w-12 md:relative">
        <Reactions
          id={data.laws_by_pk?.id ?? ""}
          setEdit={handleSetEdit}
          edit={edit}
          isAuthor={
            !!(data.laws_by_pk?.author_id && state?.id && data.laws_by_pk?.author_id === state?.id)
          }
        />
      </div>
      {edit && <ButtonWrap onCancel={handleCancel} onSubmit={handleSubmit} />}
    </>
  );
};

export default Container;
