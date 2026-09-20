import { siteContent } from "@/content/site";
import type { Locale } from "@/i18n";

type MapsLinkProps = {
  locale: Locale;
  variant?: "light" | "dark";
  dense?: boolean;
};

export function MapsLink({ locale, variant = "dark", dense = false }: MapsLinkProps) {
  const light = variant === "light";

  return (
    <a
      href={siteContent.maps.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center transition-colors ${
        dense
          ? "h-8 gap-1.5 px-1 text-xs"
          : "min-h-11 gap-3 py-1 text-sm"
      } ${light ? "text-cream/80 hover:text-white" : "text-charcoal hover:text-forest"}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <path
          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span>{siteContent.location[locale]}</span>
    </a>
  );
}
