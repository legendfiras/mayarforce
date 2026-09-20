import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";

type DemoBadgeProps = {
  locale: Locale;
  className?: string;
};

export function DemoBadge({ locale, className = "" }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-sm bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent ${className}`}
    >
      {siteContent.catalog.demo[locale]}
    </span>
  );
}
