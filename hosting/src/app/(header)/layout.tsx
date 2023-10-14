import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col bg-white bg-opacity-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
