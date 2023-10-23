import "./globals.css";
import { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const inter = Zen_Kaku_Gothic_New({
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "総政治",
  description: "authentic_law",
  icons: "/random.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <main className="flex min-h-screen w-screen flex-1 flex-col bg-zinc-100 font-400">
          <div className="flex flex-1 flex-col">{children}</div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
