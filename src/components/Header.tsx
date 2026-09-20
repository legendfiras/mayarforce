"use client";

import Link from "next/link";
import { Suspense, useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n";
import { navHref, navItems, siteContent } from "@/content/site";
import { aboutPath } from "@/lib/paths";
import { Container } from "@/components/Container";
import { InstagramLink } from "@/components/InstagramLink";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { SearchField } from "@/components/SearchField";
import { WhatsAppLink } from "@/components/WhatsAppLink";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  return (
    <Suspense fallback={<HeaderShell locale={locale} />}>
      <HeaderInner locale={locale} />
    </Suspense>
  );
}

function HeaderShell({ locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo locale={locale} compact />
      </Container>
    </header>
  );
}

function HeaderInner({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname() || `/${locale}`;
  const copy = siteContent.header[locale];
  const nav = siteContent.nav[locale];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <Container className="flex flex-col gap-3 py-3 lg:py-3">
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href={`/${locale}`} className="min-w-0 shrink-0">
            <Logo locale={locale} compact priority />
          </Link>
          <div className="hidden min-w-0 flex-1 lg:block">
            <SearchField locale={locale} />
          </div>
          <div className="ms-auto flex items-center gap-2 sm:gap-3">
            <Link
              href={aboutPath(locale)}
              className="hidden min-h-10 items-center text-sm font-medium text-forest hover:text-accent sm:inline-flex"
            >
              {copy.contact}
            </Link>
            <WhatsAppLink locale={locale} compact />
            <InstagramLink locale={locale} compact />
            <LanguageSwitch locale={locale} />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-charcoal transition-colors hover:border-forest hover:text-forest lg:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? copy.closeMenu : copy.openMenu}</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="block h-px w-full bg-charcoal" />
                <span className="block h-px w-full bg-charcoal" />
                <span className="block h-px w-full bg-charcoal" />
              </span>
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <SearchField locale={locale} />
        </div>
      </Container>

      <nav className="hidden bg-forest text-cream lg:block" aria-label="Primary">
        <Container className="flex flex-wrap items-center gap-x-6 gap-y-1 py-2.5">
          {navItems.map((item) => {
            const active = item.match(pathname, locale);
            return (
              <Link
                key={item.key}
                href={navHref(item.key, locale)}
                className={`py-1 text-sm font-medium ${
                  active ? "text-white underline decoration-accent decoration-2 underline-offset-4" : "text-cream/90 hover:text-white"
                }`}
              >
                {nav[item.key]}
              </Link>
            );
          })}
        </Container>
      </nav>

      <div id={panelId} hidden={!open} className="border-t border-line bg-white lg:hidden">
        <Container className="flex flex-col py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{copy.menu}</p>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={navHref(item.key, locale)}
              className="min-h-12 py-3 text-base text-charcoal"
            >
              {nav[item.key]}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
