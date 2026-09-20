import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { getFeaturedProducts, getProductsByBrand } from "@/content/products";
import { BrandSection } from "@/components/BrandSection";
import { CampaignBanner } from "@/components/CampaignBanner";
import { CategoryTiles } from "@/components/CategoryTiles";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductGrid";
import { StoreIdentity } from "@/components/StoreIdentity";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteContent.storeName.en,
    alternateName: siteContent.storeName.ar,
    telephone: "+9613719756",
    hasMap: siteContent.maps.url,
    sameAs: [siteContent.instagram.url],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saida",
      addressCountry: "LB",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CampaignBanner locale={locale} />
      <Container>
        <CategoryTiles locale={locale} />
        <section className="pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {siteContent.featured.eyebrow[locale]}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-charcoal">
            {siteContent.featured.heading[locale]}
          </h2>
          <p className="mt-3 mb-6 max-w-2xl text-sm text-moss md:text-base">
            {siteContent.featured.intro[locale]}
          </p>
          <ProductGrid products={getFeaturedProducts()} locale={locale} priorityCount={4} />
        </section>
        <div id="brands">
          <BrandSection locale={locale} brand="radikal" products={getProductsByBrand("radikal")} />
          <BrandSection locale={locale} brand="aselkon" products={getProductsByBrand("aselkon")} />
          <BrandSection locale={locale} brand="bme" products={getProductsByBrand("bme")} />
          <BrandSection locale={locale} brand="saga" products={getProductsByBrand("saga")} />
        </div>
        <StoreIdentity locale={locale} />
      </Container>
    </>
  );
}
