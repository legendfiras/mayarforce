/**
 * Editable Mayar Force details.
 *
 * Fill only values you have verified. Leave a field as an empty string when
 * it is still unknown. The site hides WhatsApp, the map, and photographs
 * until a value is present here.
 *
 * Image paths are relative to `public`, for example `/images/mayar/hero.jpg`.
 */

export type BusinessConfig = {
  brand: { en: string; ar: string };
  legalName: { en: string; ar: string };
  tagline: string;
  tiktok: { handle: string; url: string };
  /** Written location from the TikTok bio. Arabic is the source of truth. */
  location: { ar: string; en: string };
  /**
   * International number, digits only, no plus sign.
   * Example: "9613XXXXXXX". Leave empty until the number is verified.
   */
  whatsappE164: string;
  /** Readable local format, for example "03 000 000". */
  whatsappDisplay: string;
  /** Do not guess. Leave empty until confirmed. */
  ownerName: string;
  /** Do not guess. Leave empty until confirmed. */
  hours: string;
  email: string;
  /** Leave empty. Do not paste an unverified map pin. */
  mapUrl: string;
  images: {
    logo: string;
    hero: string;
    owner: string;
    categories: {
      clothing: string;
      camping: string;
      lighting: string;
      honey: string;
    };
    products: {
      "camo-jacket": string;
      "camo-set": string;
      "olive-fleece": string;
      "outdoor-vest": string;
      flashlight: string;
      "camping-chair": string;
      honey: string;
    };
  };
};

export const business: BusinessConfig = {
  brand: {
    en: "MAYAR FORCE",
    ar: "ميار فورس",
  },
  legalName: {
    en: "Mayar Force",
    ar: "مؤسسة ميار فورس",
  },
  tagline: "HUNT & HONEY",
  tiktok: {
    handle: "@mayarforce_hunt_honey",
    url: "https://www.tiktok.com/@mayarforce_hunt_honey",
  },
  location: {
    ar: "عكار، الدوسة، طريق عام حلبا–القبيات",
    // Transliteration for the English layout. Edit the spelling if needed.
    en: "Akkar, Al-Dawsa, Halba–Qobayat road",
  },
  whatsappE164: "",
  whatsappDisplay: "",
  ownerName: "",
  hours: "",
  email: "",
  mapUrl: "",
  images: {
    logo: "/images/mayar/logo.png",
    hero: "/images/mayar/hero-banner.jpg",
    owner: "",
    categories: {
      clothing: "/images/products/sea-to-summit-ultra-sil-nano-poncho-lime.webp",
      camping: "/images/covers/camping-chair.jpg",
      lighting: "/images/products/biolite-alpenglow-500.png",
      honey: "/images/covers/honey-jar.jpg",
    },
    products: {
      "camo-jacket": "",
      "camo-set": "",
      "olive-fleece": "",
      "outdoor-vest": "",
      flashlight: "",
      "camping-chair": "",
      honey: "",
    },
  },
};

export function optionalImage(src: string) {
  const value = src.trim();
  return value.length > 0 ? value : null;
}

export function whatsappDigits() {
  return business.whatsappE164.replace(/\D/g, "");
}

export function isWhatsAppConfigured() {
  return whatsappDigits().length >= 8;
}
