import type { Locale } from "@/i18n";
import type { BrandId, CategoryId } from "@/content/products";

export type NavKey =
  | "home"
  | "products"
  | "radikal"
  | "aselkon"
  | "bme"
  | "saga"
  | "about";

export const siteContent = {
  storeName: {
    en: "Issawi Hunting Store",
    ar: "متجر العيسوي للصيد",
  },
  location: {
    en: "Saida, Lebanon",
    ar: "صيدا، لبنان",
  },
  instagram: {
    handle: "@issawihuntingstores",
    url: "https://www.instagram.com/issawihuntingstores/",
    label: {
      en: "Instagram",
      ar: "إنستغرام",
    },
  },
  whatsapp: {
    display: "03 719 756",
    url: "https://wa.me/9613719756",
    label: {
      en: "WhatsApp",
      ar: "واتساب",
    },
  },
  maps: {
    url: "https://maps.app.goo.gl/oM9GtK57o4m41CWK8",
    label: {
      en: "Open in Google Maps",
      ar: "افتح في خرائط Google",
    },
  },
  meta: {
    en: {
      title: "Issawi Hunting Store | Hunting & Outdoor, Saida",
      description:
        "Issawi Hunting Store in Saida, Lebanon. Browse Radikal, Aselkon, BME and Saga cartridges. Ask in store or on Instagram.",
    },
    ar: {
      title: "متجر العيسوي للصيد | صيد ومعدات برّ، صيدا",
      description:
        "متجر العيسوي للصيد في صيدا، لبنان. تصفّح راديكال وأسلكون وخراطيش BME وSaga. اسأل في المتجر أو على إنستغرام.",
    },
  },
  skipToContent: {
    en: "Skip to content",
    ar: "الانتقال إلى المحتوى",
  },
  language: {
    en: { switchTo: "العربية", switchToLocale: "ar" as Locale, current: "English" },
    ar: { switchTo: "English", switchToLocale: "en" as Locale, current: "العربية" },
  },
  nav: {
    en: {
      home: "Home",
      products: "All Products",
      radikal: "Radikal",
      aselkon: "Aselkon",
      bme: "BME",
      saga: "Saga",
      about: "About & Contact",
    },
    ar: {
      home: "الرئيسية",
      products: "كل المنتجات",
      radikal: "راديكال",
      aselkon: "أسلكون",
      bme: "BME",
      saga: "Saga",
      about: "عن المتجر والتواصل",
    },
  },
  header: {
    en: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menu: "Menu",
      contact: "Contact",
      searchLabel: "Search",
      searchPlaceholder: "Search products, brands, and cartridges",
    },
    ar: {
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      menu: "القائمة",
      contact: "تواصل",
      searchLabel: "بحث",
      searchPlaceholder: "ابحث عن منتجات، علامات، وخراطيش",
    },
  },
  banner: {
    heading: {
      en: "Hunting & Outdoor Essentials",
      ar: "أساسيات الصيد والبرّ",
    },
    text: {
      en: "Explore Radikal and Aselkon shotguns, plus BME and Saga hunting cartridges.",
      ar: "استكشف بنادق راديكال وأسلكون، وخراطيش صيد BME وSaga.",
    },
    exploreProducts: {
      en: "Explore Products",
      ar: "استكشف المنتجات",
    },
    exploreBrands: {
      en: "Explore Brands",
      ar: "استكشف العلامات",
    },
    imageAlt: {
      en: "Hunter on a Lebanese hillside at sunset, overlooking the coast with the Lebanese flag",
      ar: "صياد على تلة لبنانية عند الغروب يطل على الساحل مع العلم اللبناني",
    },
  },
  categories: {
    eyebrow: { en: "Browse", ar: "تصفّح" },
    heading: { en: "Shop by category", ar: "تسوق حسب القسم" },
    items: [
      {
        id: "radikal",
        kind: "brand" as const,
        hrefKey: "radikal" as const,
        name: { en: "Radikal Collection", ar: "مجموعة راديكال" },
        isDemo: false,
      },
      {
        id: "aselkon",
        kind: "brand" as const,
        hrefKey: "aselkon" as const,
        name: { en: "Aselkon Collection", ar: "مجموعة أسلكون" },
        isDemo: false,
      },
      {
        id: "bme",
        kind: "brand" as const,
        hrefKey: "bme" as const,
        name: { en: "BME Cartridges", ar: "خراطيش BME" },
        isDemo: false,
      },
      {
        id: "saga",
        kind: "brand" as const,
        hrefKey: "saga" as const,
        name: { en: "Saga Cartridges", ar: "خراطيش Saga" },
        isDemo: false,
      },
    ],
  },
  featured: {
    eyebrow: { en: "Catalog", ar: "الكتالوج" },
    heading: { en: "Featured products", ar: "منتجات مختارة" },
    intro: {
      en: "A short selection of shotguns and hunting cartridges from the shop floor.",
      ar: "مجموعة قصيرة من البنادق وخراطيش الصيد من أرضية المتجر.",
    },
  },
  identity: {
    eyebrow: { en: "The store", ar: "المتجر" },
    heading: { en: "Issawi Hunting Store", ar: "متجر العيسوي للصيد" },
    paragraphs: {
      en: [
        "Issawi Hunting Store is a hunting shop in Saida, Lebanon. We present Radikal and Aselkon hunting shotguns, and BME and Saga cartridges, from the shop floor.",
        "This website is a product showcase — not an online checkout. Message us on WhatsApp or Instagram, or visit the shop in Saida to ask what is available.",
      ],
      ar: [
        "متجر العيسوي للصيد محل صيد في صيدا، لبنان. نقدّم بنادق صيد راديكال وأسلكون، وخراطيش BME وSaga، والبيع من أرضية المتجر.",
        "هذا الموقع واجهة للمنتجات وليس دفعًا عبر الإنترنت. راسلنا على واتساب أو إنستغرام، أو زر المتجر في صيدا للسؤال عما هو متوفر.",
      ],
    },
  },
  catalog: {
    allHeading: { en: "All products", ar: "كل المنتجات" },
    allIntro: {
      en: "Search the showcase and filter by brand or category.",
      ar: "ابحث في الواجهة وصفِّ حسب العلامة أو القسم.",
    },
    filters: { en: "Filters", ar: "تصفية" },
    brand: { en: "Brand", ar: "العلامة" },
    category: { en: "Category", ar: "القسم" },
    allBrands: { en: "All brands", ar: "كل العلامات" },
    allCategories: { en: "All categories", ar: "كل الأقسام" },
    storeSelection: { en: "Store selection", ar: "اختيار المتجر" },
    clear: { en: "Clear all", ar: "مسح الكل" },
    results: {
      en: (count: number) => (count === 1 ? "1 product" : `${count} products`),
      ar: (count: number) => (count === 1 ? "منتج واحد" : `${count} منتجات`),
    },
    empty: {
      en: "No products match these filters. Try another brand, category, or search term.",
      ar: "لا توجد منتجات مطابقة. جرّب علامة أو قسمًا أو كلمة بحث أخرى.",
    },
    viewDetails: { en: "View Details", ar: "عرض التفاصيل" },
    demo: { en: "Demonstration", ar: "توضيحي" },
    explore: { en: "Explore", ar: "استكشف" },
    related: { en: "Related products", ar: "منتجات ذات صلة" },
    specifications: { en: "Specifications", ar: "المواصفات" },
    ask: { en: "Ask in store, on WhatsApp, or on Instagram", ar: "اسأل في المتجر أو على واتساب أو إنستغرام" },
    openFilters: { en: "Open filters", ar: "فتح التصفية" },
    closeFilters: { en: "Close filters", ar: "إغلاق التصفية" },
  },
  product: {
    breadcrumbHome: { en: "Home", ar: "الرئيسية" },
    breadcrumbProducts: { en: "All Products", ar: "كل المنتجات" },
    gallery: { en: "Product images", ar: "صور المنتج" },
    placeholderPhoto: {
      en: "Photograph not supplied",
      ar: "الصورة غير متوفرة",
    },
  },
  aboutPage: {
    eyebrow: { en: "About & contact", ar: "عن المتجر والتواصل" },
    heading: { en: "Visit the shop, WhatsApp, or Instagram", ar: "زر المتجر أو راسلنا على واتساب وإنستغرام" },
    paragraphs: {
      en: [
        "Issawi Hunting Store is in Saida, Lebanon. We present Radikal and Aselkon hunting shotguns and BME and Saga cartridges from the shop floor.",
        "Message us on WhatsApp at 03 719 756, follow the shop on Instagram, or open the location in Google Maps.",
      ],
      ar: [
        "متجر العيسوي للصيد في صيدا، لبنان. نقدّم بنادق صيد راديكال وأسلكون وخراطيش BME وSaga من أرضية المتجر.",
        "راسلنا على واتساب على 03 719 756، تابع المتجر على إنستغرام، أو افتح الموقع في خرائط Google.",
      ],
    },
  },
  footer: {
    en: {
      blurb: "A hunting shop in Saida. Radikal and Aselkon shotguns, BME and Saga cartridges, from the floor of the store.",
      copyright: "© 2026 Issawi Hunting Store",
      explore: "Explore",
      visit: "Visit",
      visitHint: "Ask on WhatsApp, follow the shop on Instagram, or open the map in Saida.",
      credit: "Built by Roytech",
    },
    ar: {
      blurb: "محل صيد في صيدا. بنادق راديكال وأسلكون، وخراطيش BME وSaga، من أرضية المتجر.",
      copyright: "© 2026 متجر العيسوي للصيد",
      explore: "استكشف",
      visit: "زورونا",
      visitHint: "اسأل على واتساب، تابع المتجر على إنستغرام، أو افتح الموقع في صيدا.",
      credit: "من تنفيذ Roytech",
    },
  },
} as const;

export const navItems: { key: NavKey; match: (pathname: string, locale: Locale) => boolean }[] = [
  { key: "home", match: (pathname, locale) => pathname === `/${locale}` || pathname === `/${locale}/` },
  { key: "products", match: (pathname, locale) => pathname.startsWith(`/${locale}/products`) },
  { key: "radikal", match: (pathname, locale) => pathname.startsWith(`/${locale}/brands/radikal`) },
  { key: "aselkon", match: (pathname, locale) => pathname.startsWith(`/${locale}/brands/aselkon`) },
  { key: "bme", match: (pathname, locale) => pathname.startsWith(`/${locale}/brands/bme`) },
  { key: "saga", match: (pathname, locale) => pathname.startsWith(`/${locale}/brands/saga`) },
  { key: "about", match: (pathname, locale) => pathname.startsWith(`/${locale}/about`) },
];

export function navHref(key: NavKey, locale: Locale) {
  switch (key) {
    case "home":
      return `/${locale}`;
    case "products":
      return `/${locale}/products`;
    case "radikal":
      return `/${locale}/brands/radikal`;
    case "aselkon":
      return `/${locale}/brands/aselkon`;
    case "bme":
      return `/${locale}/brands/bme`;
    case "saga":
      return `/${locale}/brands/saga`;
    case "about":
      return `/${locale}/about`;
  }
}

export const editorNotes = {
  assets:
    "The Issawi shield mark is the store-supplied logo. Shotgun photos are manufacturer images. Cartridge photos are official BME and Saga product media downloaded locally.",
  contact: {
    phone: "03719756",
    whatsapp: "https://wa.me/9613719756",
    email: null,
    address: "https://maps.app.goo.gl/oM9GtK57o4m41CWK8",
    hours: null,
    instagram: "https://www.instagram.com/issawihuntingstores/",
  },
  brands:
    "Spellings are Aselkon, Radikal, BME, and Saga. Do not claim authorized dealership status. Confirm which models and cartridge loads are in stock before promising a specific piece.",
} as const;

export type HomeCategory = (typeof siteContent.categories.items)[number];
export type { BrandId, CategoryId };
