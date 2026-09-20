import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandLabel, categoryCopy, type Product } from "@/content/products";
import { aboutPath, brandPath, categoryPath, homePath, productsPath } from "@/lib/paths";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoBadge } from "@/components/DemoBadge";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGrid } from "@/components/ProductGrid";

type ProductDetailsProps = {
  locale: Locale;
  product: Product;
  related: Product[];
};

export function ProductDetails({ locale, product, related }: ProductDetailsProps) {
  const copy = siteContent.catalog;
  const crumbs = [
    { href: homePath(locale), label: siteContent.product.breadcrumbHome[locale] },
    { href: productsPath(locale), label: siteContent.product.breadcrumbProducts[locale] },
    product.brand
      ? { href: brandPath(locale, product.brand), label: brandLabel(product.brand, locale) }
      : { href: categoryPath(locale, product.category), label: categoryCopy[product.category].name[locale] },
    { label: product.name[locale] },
  ];

  return (
    <div className="py-8 md:py-10">
      <Breadcrumbs items={crumbs} />
      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <ProductGallery product={product} locale={locale} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {brandLabel(product.brand, locale)}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold text-charcoal">{product.name[locale]}</h1>
            {product.isDemo ? <DemoBadge locale={locale} /> : null}
          </div>
          <p className="mt-2 text-sm text-moss">{categoryCopy[product.category].name[locale]}</p>
          <p className="mt-5 text-base leading-relaxed text-charcoal">{product.description[locale]}</p>
          {product.specifications.length > 0 ? (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-moss">
                {copy.specifications[locale]}
              </h2>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {product.specifications.map((spec) => (
                  <div key={spec.label.en} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-moss">{spec.label[locale]}</dt>
                    <dd className="font-medium text-charcoal">{spec.value[locale]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          <p className="mt-8 text-sm text-moss">{copy.ask[locale]}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={siteContent.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center bg-forest px-5 text-sm font-semibold text-cream hover:bg-forest-deep"
            >
              <span>
                {siteContent.whatsapp.label[locale]}{" "}
                <span dir="ltr">{siteContent.whatsapp.display}</span>
              </span>
            </a>
            <a
              href={siteContent.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border border-forest px-5 text-sm font-semibold text-forest hover:bg-forest hover:text-cream"
            >
              {siteContent.instagram.label[locale]}
            </a>
            <a
              href={aboutPath(locale)}
              className="inline-flex min-h-11 items-center border border-forest px-5 text-sm font-semibold text-forest hover:bg-forest hover:text-cream"
            >
              {siteContent.nav[locale].about}
            </a>
          </div>
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold text-charcoal">{copy.related[locale]}</h2>
          <ProductGrid products={related} locale={locale} />
        </section>
      ) : null}
    </div>
  );
}
