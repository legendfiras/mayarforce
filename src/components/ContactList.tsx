import { siteContent } from "@/content/site";
import type { Locale } from "@/i18n";
import { InstagramLink } from "@/components/InstagramLink";
import { MapsLink } from "@/components/MapsLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";

type ContactListProps = {
  locale: Locale;
  variant?: "light" | "dark";
};

export function ContactList({ locale, variant = "dark" }: ContactListProps) {
  return (
    <ul className="flex flex-col">
      <li>
        <MapsLink locale={locale} variant={variant} />
      </li>
      <li>
        <WhatsAppLink locale={locale} variant={variant} />
      </li>
      <li>
        <InstagramLink locale={locale} variant={variant} />
      </li>
    </ul>
  );
}

export function ContactPanel({ locale }: { locale: Locale }) {
  return (
    <aside className="border border-line bg-white px-6 py-7">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
        {siteContent.footer[locale].visit}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-moss">{siteContent.footer[locale].visitHint}</p>
      <div className="mt-5 border-t border-line pt-2">
        <ContactList locale={locale} />
      </div>
    </aside>
  );
}
