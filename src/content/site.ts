import type { Locale } from "@/i18n";
import { business } from "@/content/business";
import type { CategoryId } from "@/content/products";

export type NavKey = "home" | "products" | "about" | "contact";

export const siteContent = {
  brand: business.brand,
  legalName: business.legalName,
  tagline: business.tagline,
  storeName: {
    en: business.legalName.en,
    ar: business.legalName.ar,
  },
  location: business.location,
  tiktok: {
    handle: business.tiktok.handle,
    url: business.tiktok.url,
    label: { en: "TikTok", ar: "تيك توك" },
  },
  meta: {
    en: {
      title: "MAYAR FORCE | Hunt & Honey",
      description:
        "Demonstration site for Mayar Force in Akkar: hunting clothing, camping accessories, and honey. Sample prices, no payment.",
    },
    ar: {
      title: "مؤسسة ميار فورس | هانت آند هاني",
      description:
        "نسخة عرض لمؤسسة ميار فورس في عكار: ملابس صيد، لوازم تخييم وعسل. أسعار عيّنة، ومن دون دفع.",
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
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    ar: {
      home: "الرئيسية",
      products: "المنتجات",
      about: "عن المؤسسة",
      contact: "تواصل",
    },
  },
  header: {
    en: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menu: "Menu",
      contact: "Contact us",
      contactShort: "Contact",
      searchLabel: "Search products",
      searchPlaceholder: "Search clothing, camping, honey",
    },
    ar: {
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      menu: "القائمة",
      contact: "تواصل معنا",
      contactShort: "تواصل",
      searchLabel: "البحث في المنتجات",
      searchPlaceholder: "ابحث في الملابس والتخييم والعسل",
    },
  },
  banner: {
    heading: {
      en: "Ready for every outing",
      ar: "جاهز لكل طلعة",
    },
    text: {
      en: "Hunting clothing, camping gear, and honey — explore the Mayar Force range.",
      ar: "ملابس صيد، لوازم تخييم وعسل — اكتشف مجموعة ميار فورس.",
    },
    exploreProducts: {
      en: "Browse products",
      ar: "تصفّح المنتجات",
    },
    contact: {
      en: "Contact us",
      ar: "تواصل معنا",
    },
    imageAlt: {
      en: "Mayar Force banner with the circular logo and the owner in hunting clothing, in the mountains",
      ar: "لافتة ميار فورس مع الشعار الدائري وصاحب المؤسسة بملابس الصيد في الجبال",
    },
  },
  categories: {
    eyebrow: { en: "The range", ar: "المجموعة" },
    heading: { en: "Shop by category", ar: "تسوق حسب القسم" },
    items: [
      { id: "clothing" as CategoryId },
      { id: "camping" as CategoryId },
      { id: "lighting" as CategoryId },
      { id: "optics" as CategoryId },
      { id: "rifles" as CategoryId },
      { id: "cartridges" as CategoryId },
    ],
  },
  featured: {
    eyebrow: { en: "Selection", ar: "مختارات" },
    heading: { en: "Featured products", ar: "منتجات مختارة" },
    intro: {
      en: "Hunting shotguns and cartridges, with sample prices you can add to the cart.",
      ar: "بنادق صيد وخراطيش، بأسعار عيّنة يمكن إضافتها إلى السلة.",
    },
    moreHeading: { en: "More products", ar: "منتجات أخرى" },
    moreIntro: {
      en: "Clothing, camping, lighting, and optics from the sample catalog.",
      ar: "ملابس وتخييم وإضاءة وبصريات من كتالوج العيّنات.",
    },
    ask: { en: "Ask for the price", ar: "استفسر عن السعر" },
  },
  identity: {
    eyebrow: { en: "The business", ar: "المؤسسة" },
    heading: {
      en: "A local range for the outdoors, and for honey",
      ar: "مجموعة محلية للطلعات والعسل",
    },
    paragraphs: {
      en: [
        "Mayar Force is a local business in Akkar, on the Halba–Qobayat road in Al-Dawsa. The range brings together hunting clothing, camping accessories, lighting, and honey.",
        "The owner appears in the TikTok page, alongside the outings and the products. This website is a demonstration of that range.",
      ],
      ar: [
        "مؤسسة ميار فورس تعمل من عكار، في الدوسة على طريق عام حلبا–القبيات. تجمع المجموعة ملابس الصيد مع لوازم التخييم والإضاءة والعسل.",
        "صاحب المؤسسة يظهر في صفحة تيك توك إلى جانب الطلعات والمنتجات. هذا الموقع نسخة عرض لتلك المجموعة.",
      ],
    },
    ownerAlt: {
      en: "Portrait placeholder for the person behind Mayar Force",
      ar: "موضع صورة صاحب مؤسسة ميار فورس",
    },
    ownerPending: {
      en: "The owner appears on the TikTok page.",
      ar: "صاحب المؤسسة يظهر في صفحة تيك توك.",
    },
  },
  social: {
    eyebrow: { en: "TikTok", ar: "تيك توك" },
    heading: { en: "From our page", ar: "من صفحتنا" },
    intro: {
      en: "Notes from the Mayar Force page. Each card opens the TikTok profile.",
      ar: "إشارات من صفحة ميار فورس. كل بطاقة تفتح حساب تيك توك.",
    },
    open: { en: "Open the TikTok page", ar: "افتح الصفحة على تيك توك" },
    cards: [
      {
        id: "clothing",
        image: "/images/products/sea-to-summit-ultra-sil-nano-poncho-lime.webp",
        title: { en: "Hunting clothing", ar: "ملابس الصيد" },
        text: {
          en: "Camouflage clothing and outdoor wear, as shared on the page.",
          ar: "ملابس التمويه والملابس الخارجية كما تُعرض في الصفحة.",
        },
      },
      {
        id: "camping",
        image: "/images/covers/camping-chair.jpg",
        title: { en: "Camping and light", ar: "التخييم والإضاءة" },
        text: {
          en: "Camping accessories and lighting from the outings on the page.",
          ar: "لوازم التخييم والإضاءة من طلعات الصفحة.",
        },
      },
      {
        id: "honey",
        image: "/images/covers/honey-jar.jpg",
        title: { en: "Honey", ar: "العسل" },
        text: {
          en: "Honey, shown alongside the outdoor range on the page.",
          ar: "العسل، إلى جانب مجموعة الطلعات في الصفحة.",
        },
        credit: {
          en: "Photograph by Davide Vizzini, CC BY 2.0",
          ar: "صورة Davide Vizzini، ترخيص CC BY 2.0",
        },
      },
    ],
  },
  contact: {
    eyebrow: { en: "Visit", ar: "الزيارة" },
    heading: { en: "Find Mayar Force", ar: "عنوان ميار فورس" },
    locationLabel: { en: "Location", ar: "الموقع" },
    reach: {
      en: "Reach the business on TikTok, or visit the address above.",
      ar: "للتواصل، افتحوا صفحة تيك توك أو زوروا العنوان أعلاه.",
    },
    inquiryAbout: { en: "Asking about", ar: "الاستفسار عن" },
    mapLabel: { en: "Open the map", ar: "افتح الخريطة" },
  },
  catalog: {
    allHeading: { en: "Products", ar: "المنتجات" },
    allIntro: {
      en: "Search the demonstration catalog and filter by category. Prices below are sample figures.",
      ar: "ابحث في كتالوج العرض وصفِّ حسب القسم. الأسعار أدناه أرقام عيّنة.",
    },
    priceNote: {
      en: "Sample prices for this demonstration. They are not Mayar Force prices.",
      ar: "أسعار عيّنة لهذا العرض. ليست أسعار ميار فورس.",
    },
    filters: { en: "Filter", ar: "تصفية" },
    category: { en: "Category", ar: "القسم" },
    allCategories: { en: "All categories", ar: "كل الأقسام" },
    clear: { en: "Clear all", ar: "مسح الكل" },
    results: {
      en: (count: number) => (count === 1 ? "1 product" : `${count} products`),
      ar: (count: number) => {
        if (count === 0) return "لا توجد منتجات";
        if (count === 1) return "منتج واحد";
        if (count === 2) return "منتجان";
        if (count <= 10) return `${count} منتجات`;
        return `${count} منتجًا`;
      },
    },
    empty: {
      en: "No products match this search. Try another category or a different word.",
      ar: "لا توجد منتجات مطابقة. جرّب قسمًا آخر أو كلمة مختلفة.",
    },
    viewDetails: { en: "View details", ar: "عرض التفاصيل" },
    demo: { en: "Demo", ar: "عيّنة" },
    related: { en: "More from the range", ar: "من المجموعة أيضًا" },
    ask: { en: "Ask for the price", ar: "استفسر عن السعر" },
    sampleNotice: {
      en: "Sample catalog — not Mayar Force stock.",
      ar: "كتالوج عيّنات — ليست من مخزون ميار فورس.",
    },
    brand: { en: "Brand", ar: "العلامة" },
    specifications: { en: "Specifications", ar: "المواصفات" },
    source: { en: "Manufacturer page", ar: "صفحة الشركة المصنّعة" },
    photoCredit: {
      en: "Product photograph from the manufacturer page. Permission to reuse it has not been verified.",
      ar: "صورة المنتج من صفحة الشركة المصنّعة. لم يُؤكَّد إذن إعادة الاستخدام.",
    },
    openFilters: { en: "Filter and search", ar: "تصفية وبحث" },
    closeFilters: { en: "Close", ar: "إغلاق" },
  },
  product: {
    breadcrumbHome: { en: "Home", ar: "الرئيسية" },
    breadcrumbProducts: { en: "Products", ar: "المنتجات" },
    gallery: { en: "Product image", ar: "صورة المنتج" },
    imageUnavailable: {
      en: "Image unavailable",
      ar: "الصورة غير متوفرة",
    },
  },
  cart: {
    label: { en: "Cart", ar: "السلة" },
    open: { en: "Open cart", ar: "افتح السلة" },
    close: { en: "Close", ar: "إغلاق" },
    add: { en: "Add to cart", ar: "أضف إلى السلة" },
    inCart: { en: "In cart", ar: "في السلة" },
    empty: { en: "Your cart is empty.", ar: "السلة فارغة." },
    continue: { en: "Continue browsing", ar: "متابعة التصفح" },
    remove: { en: "Remove", ar: "إزالة" },
    decrease: { en: "Decrease quantity", ar: "أنقص الكمية" },
    increase: { en: "Increase quantity", ar: "زِد الكمية" },
    subtotal: { en: "Subtotal", ar: "المجموع" },
    note: {
      en: "Demonstration cart. Nothing is charged and no order is sent.",
      ar: "سلة للعرض. لا يوجد دفع ولا يُرسَل طلب.",
    },
  },
  aboutPage: {
    eyebrow: { en: "About", ar: "عن المؤسسة" },
    heading: {
      en: "Mayar Force, hunt and honey",
      ar: "مؤسسة ميار فورس، للصيد والعسل",
    },
    paragraphs: {
      en: [
        "Mayar Force offers hunting clothing, camping accessories, lighting, and honey from Akkar, at Al-Dawsa on the Halba–Qobayat road.",
        "The person behind the business appears on the TikTok page. This site is a demonstration catalog: the prices are sample figures, and the cart does not take payment.",
      ],
      ar: [
        "تقدّم مؤسسة ميار فورس ملابس الصيد ولوازم التخييم والإضاءة والعسل من عكار، في الدوسة على طريق عام حلبا–القبيات.",
        "صاحب المؤسسة يظهر في صفحة تيك توك. هذا الموقع كتالوج للعرض: الأسعار أرقام عيّنة، والسلة لا تستلم دفعًا.",
      ],
    },
  },
  footer: {
    en: {
      blurb: "Hunting clothing, camping accessories, and honey from Akkar.",
      copyright: "© 2026 Mayar Force",
      categories: "Categories",
      explore: "Explore",
      visit: "Visit",
      demo: "Demonstration website",
    },
    ar: {
      blurb: "ملابس صيد، لوازم تخييم وعسل من عكار.",
      copyright: "© 2026 مؤسسة ميار فورس",
      categories: "الأقسام",
      explore: "تصفّح",
      visit: "الزيارة",
      demo: "موقع عرض تجريبي",
    },
  },
} as const;

export const navItems: { key: NavKey; match: (pathname: string, locale: Locale, hash: string) => boolean }[] = [
  {
    key: "home",
    match: (pathname, locale) => pathname === `/${locale}` || pathname === `/${locale}/`,
  },
  {
    key: "products",
    match: (pathname, locale) =>
      pathname.startsWith(`/${locale}/products`) || pathname.startsWith(`/${locale}/categories`),
  },
  {
    key: "about",
    match: (pathname, locale, hash) => pathname.startsWith(`/${locale}/about`) && hash !== "#contact",
  },
  {
    key: "contact",
    match: (pathname, locale, hash) => pathname.startsWith(`/${locale}/about`) && hash === "#contact",
  },
];

export function navHref(key: NavKey, locale: Locale) {
  switch (key) {
    case "home":
      return `/${locale}`;
    case "products":
      return `/${locale}/products`;
    case "about":
      return `/${locale}/about`;
    case "contact":
      return `/${locale}/about#contact`;
  }
}
