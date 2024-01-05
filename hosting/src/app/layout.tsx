import "./globals.css";
import { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

import RecoilProvider from "@/providers/RecoilProvider";
import TokenProvider from "@/providers/TokenProvider";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "総政治",
  description: "authentic_law",
  icons: "/random.png",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang="jp">
      <body className={`${zenMaruGothic.className}`}>
        <RecoilProvider>
          <main className="relative flex min-h-screen w-screen flex-1 flex-col bg-indigo-50 bg-gradient-to-r font-400">
            <TokenProvider>
              {modal}
              <div className="flex flex-1 flex-col">{children}</div>
              <Toaster />
            </TokenProvider>
          </main>
        </RecoilProvider>
      </body>
    </html>
  );
}
