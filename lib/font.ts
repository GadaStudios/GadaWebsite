import { cn } from "./utils";
import localFont from "next/font/local";

const fontSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../public/fonts/Nekst/Nekst-Thin.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../public/fonts/Nekst/Nekst-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../public/fonts/Nekst/Nekst-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/fonts/Nekst/Nekst-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/Nekst/Nekst-SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../public/fonts/Nekst/Nekst-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/Nekst/Nekst-Black.otf",
      style: "normal",
      weight: "900",
    },
  ],
  style: "normal",
});

const fontMono = localFont({
  variable: "--font-mono",
  src: "../public/fonts/SpaceGrotesk/SpaceGrotesk-VariableFont_wght.ttf",
  style: "normal",
});

export const fontVariables = (className?: string) =>
  cn(className, fontSans.variable, fontMono.variable);
