"use client";

import "@/styles/globals.css";
import { AuthContextProvider } from "@/auth/AuthContextProvider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { fontSans, jap } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jap.className
        )}
      >
        <AuthContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col h-screen relative max-h-[100vh] overflow-hidden">
              <SiteHeader />
              <div className="flex-1 relative">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
