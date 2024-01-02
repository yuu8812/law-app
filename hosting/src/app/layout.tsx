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

export const revalidate = 0;

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang="jp">
      <body className={`${zenMaruGothic.className}`}>
        <RecoilProvider>
          <TokenProvider>
            <main className="relative flex min-h-screen w-screen flex-1 flex-col bg-zinc-100 font-400">
              {modal}
              <div className="flex flex-1 flex-col">{children}</div>
              <Toaster />
            </main>
          </TokenProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
