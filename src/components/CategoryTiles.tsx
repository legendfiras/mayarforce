import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandPath, categoryPath } from "@/lib/paths";
import { DemoBadge } from "@/components/DemoBadge";

type CategoryVisual = {
  src: string;
  alt: Record<Locale, string>;
  fit: "cover" | "contain";
  position: string;
  background: string;
};

const visuals: Record<string, CategoryVisual> = {
  radikal: {
    src: "/images/categories/radikal-sax-2.jpg",
    alt: {
      en: "Radikal SAX-2 hunting shotgun",
      ar: "بندقية صيد راديكال SAX-2",
    },
    fit: "contain",
    position: "center",
    background: "#111111",
  },
  aselkon: {
    src: "/images/categories/aselkon-x3-complete.jpg",
    alt: {
      en: "Aselkon X3 Dark Black hunting shotgun",
      ar: "بندقية صيد أسلكون X3 Dark Black",
    },
    fit: "contain",
    position: "center",
    background: "#111111",
  },
  bme: {
    src: "/images/categories/bme-cartridges.jpg",
    alt: {
      en: "BME Super 12 gauge hunting cartridge box",
      ar: "علبة خراطيش صيد BME Super عيار 12",
    },
    fit: "contain",
    position: "center",
    background: "#f6f3ec",
  },
  saga: {
    src: "/images/categories/saga-cartridges.jpg",
    alt: {
      en: "Saga Field 12 gauge hunting cartridge box",
      ar: "علبة خراطيش صيد Saga Field عيار 12",
    },
    fit: "contain",
    position: "center",
    background: "#f6f3ec",
  },
};

type CategoryTilesProps = {
  locale: Locale;
};

export function CategoryTiles({ locale }: CategoryTilesProps) {
  const section = siteContent.categories;

  return (
    <section className="py-10 md:py-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {section.eyebrow[locale]}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-charcoal">{section.heading[locale]}</h2>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {section.items.map((item) => {
          const href =
            item.kind === "brand"
              ? brandPath(locale, item.hrefKey)
              : categoryPath(locale, item.hrefKey);
          const visual = visuals[item.id];
          if (!visual) return null;
          return (
            <li key={item.id}>
              <Link
                href={href}
                className="group flex h-full flex-col border border-line bg-white transition-colors duration-200 hover:border-forest/40"
              >
                <div
                  className="relative aspect-[5/4] overflow-hidden"
                  style={{ backgroundColor: visual.background }}
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt[locale]}
                    fill
                    sizes="(min-width: 640px) 22vw, 50vw"
                    priority
                    className={`transition-transform duration-300 ease-out group-hover:scale-105 ${
                      visual.fit === "contain" ? "object-contain p-2 sm:p-2.5" : "object-cover"
                    }`}
                    style={{ objectPosition: visual.position }}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-3 py-3">
                  <span className="text-sm font-semibold leading-snug text-charcoal group-hover:text-forest">
                    {item.name[locale]}
                  </span>
                  {item.isDemo ? <DemoBadge locale={locale} /> : null}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
