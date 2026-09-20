import Link from "next/link";
import type { Locale } from "@/i18n";
import { navHref, navItems, siteContent } from "@/content/site";
import { Container } from "@/components/Container";
import { InstagramLink } from "@/components/InstagramLink";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { MapsLink } from "@/components/MapsLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const footer = siteContent.footer[locale];
  const nav = siteContent.nav[locale];

  return (
    <footer className="mt-auto border-t border-[#e8d48b]/20 bg-forest-deep text-cream">
      <Container className="py-5 md:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2.5">
            <Logo locale={locale} variant="light" compact showName={false} />
            <span className="text-sm font-semibold tracking-tight">{siteContent.storeName[locale]}</span>
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={navHref(item.key, locale)}
                className="text-xs text-cream/75 transition-colors hover:text-white"
              >
                {nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <MapsLink locale={locale} variant="light" dense />
            <WhatsAppLink locale={locale} variant="light" compact />
            <InstagramLink locale={locale} variant="light" compact />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-cream/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] tracking-wide text-cream/50">
            {footer.copyright}
            <span className="mx-2 text-cream/20" aria-hidden>
              ·
            </span>
            {siteContent.location[locale]}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href="https://roytech.solutions"
              target="_blank"
              rel="noopener"
              className="text-[11px] tracking-wide text-cream/50 transition-colors hover:text-[#e8d48b]"
            >
              {footer.credit}
            </a>
            <LanguageSwitch locale={locale} variant="plain" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
