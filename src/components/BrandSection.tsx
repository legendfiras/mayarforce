import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandCopy, brandLabel, type BrandId, type Product } from "@/content/products";
import { brandPath } from "@/lib/paths";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";

type BrandSectionProps = {
  locale: Locale;
  brand: BrandId;
  products: readonly Product[];
};

export function BrandSection({ locale, brand, products }: BrandSectionProps) {
  const copy = brandCopy[brand];
  const feature = products[0];

  return (
    <section className="border-t border-line py-12 md:py-16">
      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col justify-center bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {brandLabel(brand, locale)}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-charcoal md:text-3xl">{copy.name}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-moss md:text-base">
            {copy.intro[locale]}
          </p>
          <Link
            href={brandPath(locale, brand)}
            className="mt-6 inline-flex min-h-11 w-fit items-center bg-forest px-5 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
          >
            {siteContent.catalog.explore[locale]} {copy.name}
          </Link>
        </div>
        {feature ? (
          <div className="border border-line bg-white">
            <ProductImage
              product={feature}
              className="aspect-[16/10] md:aspect-[2/1]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        ) : null}
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
