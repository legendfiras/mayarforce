"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/i18n";
import type { Product } from "@/content/products";
import { siteContent } from "@/content/site";
import { PlaceholderArt } from "@/components/PlaceholderArt";

type ProductGalleryProps = {
  product: Product;
  locale: Locale;
};

export function ProductGallery({ product, locale }: ProductGalleryProps) {
  const images = product.images.length > 0 ? product.images : [""];
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div
        className="relative aspect-square border border-line bg-[#f6f3ec]"
        role="img"
        aria-label={siteContent.product.gallery[locale]}
      >
        {current ? (
          <Image
            src={current}
            alt={product.name[locale]}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain p-6"
          />
        ) : (
          <div className="flex h-full flex-col">
            <PlaceholderArt kind={product.placeholder} />
            <p className="sr-only">{siteContent.product.placeholderPhoto[locale]}</p>
          </div>
        )}
      </div>
      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2">
          {images.map((src, index) => (
            <li key={`${src}-${index}`}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-current={index === active}
                className={`relative aspect-square w-full border bg-[#f6f3ec] ${
                  index === active ? "border-forest" : "border-line"
                }`}
              >
                <span className="sr-only">{`${product.name[locale]} ${index + 1}`}</span>
                {src ? (
                  <Image src={src} alt="" fill sizes="120px" className="object-contain p-2" />
                ) : (
                  <PlaceholderArt kind={product.placeholder} />
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
