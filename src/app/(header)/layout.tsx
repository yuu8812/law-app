import { ReactNode } from "react";

import Header from "@/components/Header";
import RefreshWrapper from "@/components/RefreshWrapper";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      <Sidebar />
      <Header />
      <div className="flex flex-1 flex-col pl-0 pt-12 md:ml-14 md:pt-0">
        <RefreshWrapper>{children}</RefreshWrapper>
      </div>
    </div>
  );
}
