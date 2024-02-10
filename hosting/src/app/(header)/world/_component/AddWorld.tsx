"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { createPortal } from "react-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { TbWorldUp } from "react-icons/tb";
import { toast } from "sonner";
import * as z from "zod";

import SearchCitizens from "@/app/(header)/world/create/_component/SearchCitizensModal";
import CustomModal from "@/components/CustomModal";
import { useCreateWorldCitizensMutation } from "@/graphql/type";
import { useCustomModal } from "@/hooks/useCustomModal";
import { useUser } from "@/hooks/useUser";

const schema = z.object({
  citizens: z
    .array(
      z.object({
        citizen_id: z.string(),
        name: z.string(),
        url: z.string().nullable(),
      }),
    )
    .min(1),
});

type Citizens = z.infer<typeof schema>;

const AddWorld = ({ worldId }: { worldId: string }) => {
  const { openModal } = useCustomModal();
  const { control, formState, handleSubmit, reset } = useForm<Citizens>({
    resolver: zodResolver(schema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "citizens" });

  const onClick = () => {
    openModal();
  };

  const [mutate] = useCreateWorldCitizensMutation();

  const { closeModal } = useCustomModal();

  const { state } = useUser();

  const router = useRouter();

  const createWorldCitizens = async (data: Citizens) => {
    const citizens = data.citizens.map((item) => ({
      citizen_id: item.citizen_id,
      world_id: worldId,
      user_id: state?.id,
    }));
    const res = await mutate({ variables: { objects: citizens } }).catch(() => {
      toast.error("送信に失敗しました");
      return undefined;
    });
    if (res) {
      toast.success("個体を追加しました");
      reset({ citizens: [] });
      closeModal();
      router.refresh();
    }
  };

  return (
    <>
      <CustomModal>
        {
          <SearchCitizens
            append={append}
            fields={fields}
            remove={remove}
            submit={handleSubmit(createWorldCitizens)}
            buttonDisabled={!formState.isValid || formState.isSubmitting}
          />
        }
      </CustomModal>
      {createPortal(
        <div
          className="fixed bottom-4 right-4 flex cursor-pointer items-center gap-1"
          onClick={onClick}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffffff] shadow-lg">
            <TbWorldUp size={32} className="transition-all hover:scale-125" color={"#03658c"} />
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};

export default AddWorld;
