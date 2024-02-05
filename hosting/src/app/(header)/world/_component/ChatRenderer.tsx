import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { TextArea } from "@/components/TextArea";
import TriangleSubmitButton from "@/components/TriangleSubmitButton";
import User from "@/components/User";
import {
  CreateChatForWorldMutationVariables,
  useCreateChatForWorldMutation,
  useFindChatsSubSubscription,
} from "@/graphql/type";
import { useUser } from "@/hooks/useUser";

const ChatRenderer = ({ boxId }: { boxId: string }) => {
  const { register, handleSubmit, reset, formState } = useForm<{ chat: string }>();

  const { data, loading } = useFindChatsSubSubscription({
    variables: { id: boxId },
  });

  const { state } = useUser();

  const [mutate] = useCreateChatForWorldMutation();

  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  };

  console.log(boxId, data);

  useEffect(() => {
    scrollToBottom();
  }, [data, loading]);

  const createChat = (data: { chat: string }) => {
    const variables: CreateChatForWorldMutationVariables = {
      author_id: state?.id,
      chat_box_id: boxId,
      text: data.chat,
    };
    mutate({ variables }).catch((e) => console.error(e));
    reset();
  };

  return (
    <form
      className="absolute ml-[20%] flex h-[90%] w-4/5 shrink-0 flex-col gap-10"
      onSubmit={handleSubmit(createChat)}
    >
      <div className="sticky top-0 z-10 flex h-[44px] w-full items-center border-b bg-[#ffffff]">
        <div className="w-full pl-4 font-semibold text-gray-500 underline">#ALL</div>
      </div>
      <div
        className="hide-scroll-bar relative -top-10 flex h-full flex-1 overflow-scroll"
        ref={ref}
      >
        <div className="relative top-0 h-full w-full shrink-0  flex-col ">
          <div className="relative flex flex-col gap-4 overflow-scroll p-2">
            {data?.world_chat_boxes_by_pk?.world_chats.map((item, i) => {
              return (
                <div
                  className={`${item.user.id === state?.id ? "self-end" : "self-start"} shrink-0items-center relative right-0 flex h-10 max-w-[400px] flex-1 flex-col gap-2 whitespace-break-spaces break-all`}
                  key={i}
                >
                  <div className={`${item.user.id === state?.id ? "self-end" : "self-start"}`}>
                    <User id="" style="text-xs" name={item.user.name} url={item.user.icon_url} />
                  </div>
                  <div className="w-fit rounded bg-white px-2 py-1 text-sm">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 z-20 flex h-10 max-h-40 w-full items-center">
        <div className="relative mx-2 flex flex-1 bg-[#ffffff]">
          <TextArea
            inputName="chat"
            register={register}
            width="w-full"
            height="min-h-32 h-24"
            Icon={<TriangleSubmitButton disabled={!formState.isValid || formState.isSubmitting} />}
          />
        </div>
      </div>
    </form>
  );
};

export default ChatRenderer;
