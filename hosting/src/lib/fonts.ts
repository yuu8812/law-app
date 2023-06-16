import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  M_PLUS_Rounded_1c as Jap,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const jap = Jap({
  subsets: ["latin"],
  weight: ["400"],
});
