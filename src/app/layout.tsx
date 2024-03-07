import "./globals.css";
import { Zen_Maru_Gothic } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";

import WithApollo from "@/providers/ApolloProvider";
import RecoilProvider from "@/providers/RecoilProvider";
import TokenProvider from "@/providers/TokenProvider";
import { UserProvider } from "@/providers/UserProvider";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "総政治",
    template: "%s | 総政治",
  },
  description: "authentic_law",
  icons: "/icon.svg",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.className} bg-[#f8f8f8]`}>
        <RecoilProvider>
          <main className="relative flex min-h-screen w-screen flex-1 flex-col  bg-gradient-to-r font-400 text-slate-700">
            <TokenProvider>
              <WithApollo>
                <UserProvider>
                  <>
                    <div className="flex flex-1 flex-col">{children}</div>
                    <Toaster
                      position="top-right"
                      duration={1500}
                      className="bg-so_se_ji"
                      toastOptions={{
                        className: "bg-so_se_ji",
                        descriptionClassName: "bg-so_se_ji",
                        style: {
                          backgroundColor: "rgb(225, 151, 5,0.8)",
                          border: "none",
                          color: "white",
                        },
                      }}
                    />
                  </>
                </UserProvider>
              </WithApollo>
            </TokenProvider>
          </main>
        </RecoilProvider>
      </body>
    </html>
  );
}
