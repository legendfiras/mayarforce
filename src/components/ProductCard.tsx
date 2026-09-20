import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandLabel, categoryCopy, type Product } from "@/content/products";
import { productPath } from "@/lib/paths";
import { DemoBadge } from "@/components/DemoBadge";
import { ProductImage } from "@/components/ProductImage";

type ProductCardProps = {
  product: Product;
  locale: Locale;
  priority?: boolean;
};

export function ProductCard({ product, locale, priority = false }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col border border-line bg-white transition-colors duration-200 hover:border-forest/40">
      <Link href={productPath(locale, product.slug)} className="block">
        <ProductImage product={product} priority={priority} className="aspect-[4/5]" />
      </Link>
      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {brandLabel(product.brand, locale)}
          </p>
          {product.isDemo ? <DemoBadge locale={locale} /> : null}
        </div>
        <h3 className="mt-2 text-base font-semibold leading-snug text-charcoal">
          <Link href={productPath(locale, product.slug)} className="hover:text-forest">
            {product.name[locale]}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-moss">{categoryCopy[product.category].name[locale]}</p>
        <Link
          href={productPath(locale, product.slug)}
          className="mt-4 inline-flex min-h-10 w-fit items-center text-sm font-medium text-forest hover:text-accent"
        >
          {siteContent.catalog.viewDetails[locale]}
        </Link>
      </div>
    </article>
  );
}
