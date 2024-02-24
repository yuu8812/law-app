import { ReactNode } from "react";

export default async function Layout({
  children,
}: {
  params: { id: string };
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
