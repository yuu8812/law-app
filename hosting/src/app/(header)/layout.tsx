import { ReactNode } from "react";

import { Header } from "@/components/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="flex flex-1 flex-col px-4 pb-4">{children}</div>
    </div>
  );
}
