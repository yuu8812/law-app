import { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 ">
      {/* <Header /> */}
      <Sidebar />
      <div className="flex flex-1 flex-col px-4 pb-4">{children}</div>
    </div>
  );
}
