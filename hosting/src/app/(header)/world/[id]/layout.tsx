import { ReactNode } from "react";

import { findWorld } from "@/api/server";
import SwitchType from "@/app/(header)/world/_component/SwitchType";
import { BreadCrumb } from "@/components/BreadCrumb";

export default async function Layout({
  params: { id },
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  const res = await findWorld({ id: id });

  return (
    <div className="flex flex-1 flex-col">
      <div className="relative left-0 flex h-10 items-center">
        <BreadCrumb
          leftText="世界"
          rightText={res.worlds_by_pk?.world_histories[0].title ?? ""}
          href="/world"
        />
      </div>
      <SwitchType />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
