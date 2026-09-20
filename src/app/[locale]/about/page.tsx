import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { homePath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactPanel } from "@/components/ContactList";
import { Container } from "@/components/Container";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  return {
    title: siteContent.nav[locale].about,
    description: siteContent.aboutPage.paragraphs[locale][0],
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const page = siteContent.aboutPage;

  return (
    <Container className="py-10 md:py-14">
      <Breadcrumbs
        items={[
          { href: homePath(locale), label: siteContent.product.breadcrumbHome[locale] },
          { label: siteContent.nav[locale].about },
        ]}
      />
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {page.eyebrow[locale]}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-charcoal md:text-4xl">
            {page.heading[locale]}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-moss">
            {page.paragraphs[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ContactPanel locale={locale} />
      </div>
    </Container>
  );
}
