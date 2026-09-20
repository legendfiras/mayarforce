import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandCopy, brandIds, getProductsByBrand, isBrandId } from "@/content/products";
import { parseCatalogQuery } from "@/lib/catalog";
import { brandPath, homePath } from "@/lib/paths";
import { CatalogView } from "@/components/CatalogView";
import { Container } from "@/components/Container";

type PageProps = {
  params: Promise<{ locale: string; brand: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => brandIds.map((brand) => ({ locale, brand })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, brand } = await params;
  if (!isLocale(raw) || !isBrandId(brand)) return {};
  const locale: Locale = raw;
  return {
    title: brandCopy[brand].name,
    description: brandCopy[brand].intro[locale],
  };
}

export default async function BrandPage({ params, searchParams }: PageProps) {
  const { locale: raw, brand } = await params;
  if (!isLocale(raw) || !isBrandId(brand)) notFound();
  const locale: Locale = raw;
  const query = parseCatalogQuery(await searchParams);

  return (
    <Container>
      <CatalogView
        locale={locale}
        title={brandCopy[brand].name}
        intro={brandCopy[brand].intro[locale]}
        source={getProductsByBrand(brand)}
        query={{ ...query, brand: undefined }}
        basePath={brandPath(locale, brand)}
        hideBrand
        crumbs={[
          { href: homePath(locale), label: siteContent.product.breadcrumbHome[locale] },
          { label: brandCopy[brand].name },
        ]}
      />
    </Container>
  );
}
