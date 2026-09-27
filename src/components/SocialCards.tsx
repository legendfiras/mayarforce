import Image from "next/image";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { Container } from "@/components/Container";

type SocialCardsProps = {
  locale: Locale;
};

export function SocialCards({ locale }: SocialCardsProps) {
  const section = siteContent.social;

  return (
    <section className="bg-paper py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold rtl:normal-case rtl:tracking-normal">
            {section.eyebrow[locale]}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-charcoal md:text-4xl">{section.heading[locale]}</h2>
          <p className="mt-4 text-sm leading-relaxed text-moss md:text-base">{section.intro[locale]}</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {section.cards.map((card) => (
            <li key={card.id}>
              <a
                href={siteContent.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col bg-ivory"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute start-4 top-4 bg-forest-deep/80 px-2 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-gold" lang="en" dir="ltr">
                    TikTok
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-charcoal">{card.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-moss">{card.text[locale]}</p>
                  {"credit" in card && card.credit ? (
                    <p className="mt-2 text-xs leading-relaxed text-moss/80">{card.credit[locale]}</p>
                  ) : null}
                  <span className="mt-4 text-sm font-semibold text-forest group-hover:text-olive">
                    {section.open[locale]}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
