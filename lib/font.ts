import { cn } from "./utils";
import { Geist, Geist_Mono } from "next/font/google";

const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fontVariables = (className?: string) =>
  cn(className, fontSans.variable, fontMono.variable);
