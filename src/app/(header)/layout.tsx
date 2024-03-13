import { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1">
      <Sidebar />
      <div className="ml-6 flex flex-1 shrink-0 flex-col">{children}</div>
    </div>
  );
}
