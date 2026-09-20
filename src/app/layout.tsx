import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Figtree, IBM_Plex_Sans_Arabic } from "next/font/google";
import { headers } from "next/headers";
import { dirFor, isLocale, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1e3d32",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: siteContent.meta.en.title,
  description: siteContent.meta.en.description,
  applicationName: "Issawi Hunting Store",
  authors: [{ name: "Issawi Hunting Store" }],
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headerList = await headers();
  const raw = headerList.get("x-locale") ?? "en";
  const locale: Locale = isLocale(raw) ? raw : "en";

  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      className={`${figtree.variable} ${ibmArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-charcoal">{children}</body>
    </html>
  );
}
