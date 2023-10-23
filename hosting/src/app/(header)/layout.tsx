import { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      {modal}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
