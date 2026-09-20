import { ImageResponse } from "next/og";
import { isLocale } from "@/i18n";
import { siteContent } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const isArabic = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#13241e",
          color: "#f4f0e6",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: isArabic ? 0 : 8,
            textTransform: "uppercase",
            color: "#d4b45a",
            marginBottom: 20,
          }}
        >
          {siteContent.location[locale]}
        </div>
        <div
          style={{
            fontSize: isArabic ? 64 : 76,
            lineHeight: 1.1,
            fontWeight: 600,
            maxWidth: 900,
          }}
        >
          {siteContent.storeName[locale]}
        </div>
        <div
          style={{
            marginTop: 28,
            width: 96,
            height: 2,
            background: "#d4b45a",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
