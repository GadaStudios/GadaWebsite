import type { Metadata } from "next";

import "./globals.css";
import { siteConfig } from "@/site.config";
import { fontVariables } from "@/lib/font";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.title }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    siteName: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image.png"],
  },
  icons: [
    {
      url: "/metadata/favicon_16px.png",
      sizes: "16x16",
    },
    {
      url: "/metadata/favicon_32px.png",
      sizes: "32x32",
    },
    {
      url: "/metadata/favicon_64px.png",
      sizes: "64x64",
    },
    {
      url: "/metadata/favicon_128px.png",
      sizes: "128x128",
    },
    {
      url: "/metadata/favicon_180px.png",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    creator: {
      "@type": "Organization",
      name: siteConfig.title,
      url: siteConfig.url,
    },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  console.log(
    `${new Date().toLocaleString("en-US")} (UTC${
      -new Date().getTimezoneOffset() / 60
    })`,
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en" href={siteConfig.url.toString()} />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title={siteConfig.title}
          href="/opensearch.xml"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={siteConfig.title} />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={fontVariables("antialiased")}>{children}</body>
    </html>
  );
}
