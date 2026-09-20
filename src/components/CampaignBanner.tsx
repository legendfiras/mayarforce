import { getImageProps } from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { productsPath } from "@/lib/paths";

type CampaignBannerProps = {
  locale: Locale;
};

export function CampaignBanner({ locale }: CampaignBannerProps) {
  const banner = siteContent.banner;
  const common = {
    alt: banner.imageAlt[locale],
    sizes: "100vw",
    priority: true,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1024,
    height: 576,
    src: "/images/hero/hunter-desktop.jpg",
  });
  const {
    props: { srcSet: mobile, ...image },
  } = getImageProps({
    ...common,
    width: 576,
    height: 1024,
    src: "/images/hero/hunter-mobile.jpg",
  });

  return (
    <section className="relative isolate overflow-hidden bg-forest text-cream">
      <div className="relative min-h-[78svh] md:min-h-[560px] lg:min-h-[680px]">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img
            {...image}
            srcSet={mobile}
            className="absolute inset-0 h-full w-full object-cover object-[center_18%] md:object-[70%_18%]"
            style={{ width: "100%", height: "100%" }}
          />
        </picture>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 via-[42%] to-black/15 md:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/70 from-0% via-black/40 via-[34%] to-transparent to-[64%] md:block"
        />
        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1200px] flex-col justify-end px-4 pb-10 pt-16 sm:px-6 md:min-h-[560px] md:justify-center md:pb-16 lg:min-h-[680px] lg:px-8">
          <div className="max-w-xl md:mr-auto md:max-w-[28rem] lg:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d48b]">
              {siteContent.location[locale]}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.6rem]">
              {banner.heading[locale]}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream/90 sm:text-lg">
              {banner.text[locale]}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={productsPath(locale)}
                className="inline-flex min-h-11 items-center bg-white px-5 text-sm font-semibold text-forest transition-colors hover:bg-ivory"
              >
                {banner.exploreProducts[locale]}
              </Link>
              <Link
                href={`/${locale}#brands`}
                className="inline-flex min-h-11 items-center border border-cream/40 px-5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-white/10"
              >
                {banner.exploreBrands[locale]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
