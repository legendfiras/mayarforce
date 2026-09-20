import Image from "next/image";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";

type LogoProps = {
  locale: Locale;
  variant?: "light" | "dark";
  compact?: boolean;
  priority?: boolean;
  showName?: boolean;
};

export function Logo({
  locale,
  variant = "dark",
  compact = false,
  priority = false,
  showName = true,
}: LogoProps) {
  const name = siteContent.storeName[locale];
  const word = variant === "light" ? "text-cream" : "text-forest-deep";
  const heightClass = showName ? "h-11" : compact ? "h-9" : "h-12";

  return (
    <span className={`flex items-center ${showName ? "gap-3" : ""}`}>
      <Image
        src="/images/brand/issawi-logo.png"
        alt=""
        width={424}
        height={532}
        priority={priority}
        className={`w-auto shrink-0 ${heightClass}`}
      />
      {showName ? (
        <span className={`truncate font-semibold tracking-tight ${compact ? "text-[0.95rem] sm:text-base" : "text-lg"} ${word}`}>
          {name}
        </span>
      ) : null}
    </span>
  );
}
