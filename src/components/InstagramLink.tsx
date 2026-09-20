import { siteContent } from "@/content/site";
import type { Locale } from "@/i18n";

type InstagramLinkProps = {
  locale: Locale;
  variant?: "light" | "dark";
  compact?: boolean;
};

export function InstagramLink({ locale, variant = "dark", compact = false }: InstagramLinkProps) {
  const light = variant === "light";

  return (
    <a
      href={siteContent.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        compact
          ? `inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              light ? "text-cream hover:bg-white/10 hover:text-white" : "text-forest hover:bg-forest/10 hover:text-accent"
            }`
          : `inline-flex min-h-11 items-center gap-3 py-1 text-sm transition-colors ${
              light ? "text-cream/80 hover:text-white" : "text-charcoal hover:text-forest"
            }`
      }
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
      {compact ? (
        <span className="sr-only">
          {siteContent.instagram.label[locale]} {siteContent.instagram.handle}
        </span>
      ) : (
        <span>
          {siteContent.instagram.label[locale]}{" "}
          <span dir="ltr">{siteContent.instagram.handle}</span>
        </span>
      )}
    </a>
  );
}
