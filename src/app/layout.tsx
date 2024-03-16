import "./globals.css";
import { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import Script from "next/script";
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
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "総政治",
    template: "%s | 総政治",
  },
  metadataBase: new URL("https://so-se-ji.com"),
  description:
    "総政治は法令や決まりを制定し、それをもとに様々な世界を構築するプラットフォームです。",
  icons: [{ rel: "icon", url: "/icon.svg" }],
  openGraph: {
    title: "総政治",
    description:
      "総政治は法令や決まりを制定し、それをもとに様々な世界を構築するプラットフォームです。",
    images: ["/icon2.svg"],
  },
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <Script
        id="Absence-banner"
        async
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8449927685664502"
        crossOrigin="anonymous"
      />
      <body className={`${zenMaruGothic.className}`}>
        <RecoilProvider>
          <main className="relative flex min-h-screen w-screen flex-1 flex-col  bg-white bg-gradient-to-r font-400 text-slate-700">
            {/* <BotDetectProvider> */}
            <TokenProvider>
              <WithApollo>
                <UserProvider>
                  <>
                    <div className="flex flex-1 bg-[#f8f8f8]">{children}</div>
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
            {/* </BotDetectProvider> */}
          </main>
        </RecoilProvider>
      </body>
    </html>
  );
}
