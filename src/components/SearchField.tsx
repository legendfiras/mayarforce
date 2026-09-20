import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { productsPath } from "@/lib/paths";

type SearchFieldProps = {
  locale: Locale;
  size?: "header" | "catalog";
  defaultValue?: string;
};

export function SearchField({ locale, size = "header", defaultValue = "" }: SearchFieldProps) {
  const copy = siteContent.header[locale];
  const wide = size === "header";

  return (
    <form action={productsPath(locale)} method="get" role="search" className="w-full">
      <label htmlFor={`search-${size}`} className="sr-only">
        {copy.searchLabel}
      </label>
      <div className="flex min-h-11 overflow-hidden rounded-full border border-line bg-white">
        <input
          id={`search-${size}`}
          type="search"
          name="q"
          defaultValue={defaultValue}
          placeholder={copy.searchPlaceholder}
          className={`min-w-0 flex-1 bg-transparent px-4 text-sm text-charcoal outline-none placeholder:text-moss/70 ${
            wide ? "sm:px-5" : ""
          }`}
        />
        <button
          type="submit"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-forest hover:text-accent"
        >
          <span className="sr-only">{copy.searchLabel}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
