import { env } from "./lib/env";

export const siteConfig = {
  title: "Gada",
  description:
    "We are a specialized creative agency focused on brand design, product design, 3D visualization, and marketing communication, aimed at bridging the gap between business models and user needs.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : env.NEXT_PUBLIC_SITE_URL,
};
