import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { aboutPath } from "@/lib/paths";
import { ContactPanel } from "@/components/ContactList";

type StoreIdentityProps = {
  locale: Locale;
};

export function StoreIdentity({ locale }: StoreIdentityProps) {
  const identity = siteContent.identity;

  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {identity.eyebrow[locale]}
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-charcoal md:text-3xl">
            {identity.heading[locale]}
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-moss md:text-base">
            {identity.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={aboutPath(locale)}
            className="mt-7 inline-flex min-h-11 items-center bg-forest px-5 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
          >
            {siteContent.nav[locale].about}
          </Link>
        </div>
        <ContactPanel locale={locale} />
      </div>
    </section>
  );
}
