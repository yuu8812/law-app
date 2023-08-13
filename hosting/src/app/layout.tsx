"use client";
import "./globals.css";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import React from "react";

import Loading from "./loading";

import VHClient from "@/components/100vh/VHClient";
import Modal from "@/components/combineUi/modal/Modal";
import NavBar from "@/components/combineUi/navBar/NavBar";
import { useStaticUserSWR } from "@/hooks/useStaticSwr";

const inter = Zen_Kaku_Gothic_New({ subsets: ["cyrillic"], weight: ["400"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { user } = useStaticUserSWR();
  return (
    <html lang="en">
      <body className={inter.className}>
        <VHClient>
          <main className="flex flex-col w-full h-full relative">
            <Modal />
            <section className="sticky w-full top-0 z-20 opacity-100 bg-white">
              <NavBar />
            </section>
            <section className="flex flex-col flex-1">
              <div className="flex flex-col flex-1">{user.loaded ? children : <Loading />}</div>
            </section>
          </main>
        </VHClient>
      </body>
    </html>
  );
}
