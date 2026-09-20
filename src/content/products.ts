import type { Locale } from "@/i18n";

export const brandIds = ["radikal", "aselkon", "bme", "saga"] as const;
export type BrandId = (typeof brandIds)[number];

export const categoryIds = ["rifles", "cartridges"] as const;
export type CategoryId = (typeof categoryIds)[number];

export type PlaceholderKind = "shotgun" | "cartridge";

export type ProductSpec = {
  label: Record<Locale, string>;
  value: Record<Locale, string>;
};

export type Product = {
  id: string;
  slug: string;
  name: Record<Locale, string>;
  brand: BrandId | null;
  category: CategoryId;
  images: string[];
  placeholder: PlaceholderKind;
  description: Record<Locale, string>;
  specifications: ProductSpec[];
  featured: boolean;
  isDemo: boolean;
};

export const brandCopy: Record<
  BrandId,
  {
    name: string;
    intro: Record<Locale, string>;
  }
> = {
  radikal: {
    name: "Radikal",
    intro: {
      en: "Radikal hunting shotguns presented at Issawi Hunting Store in Saida. Availability is confirmed in the shop or on Instagram.",
      ar: "بنادق صيد راديكال المعروضة في متجر العيسوي للصيد في صيدا. تأكيد التوفّر في المتجر أو على إنستغرام.",
    },
  },
  aselkon: {
    name: "Aselkon",
    intro: {
      en: "Aselkon hunting shotguns presented at Issawi Hunting Store in Saida. Availability is confirmed in the shop or on Instagram.",
      ar: "بنادق صيد أسلكون المعروضة في متجر العيسوي للصيد في صيدا. تأكيد التوفّر في المتجر أو على إنستغرام.",
    },
  },
  bme: {
    name: "BME",
    intro: {
      en: "BME hunting cartridges from Brescia Middle East, made in Lebanon. Presented at Issawi Hunting Store. Ask in Saida or on Instagram for what is on the floor.",
      ar: "خراطيش صيد BME من Brescia Middle East، مصنوعة في لبنان. معروضة في متجر العيسوي للصيد. اسأل في صيدا أو على إنستغرام عما هو موجود.",
    },
  },
  saga: {
    name: "Saga",
    intro: {
      en: "Saga hunting cartridges from Spain, presented at Issawi Hunting Store. Ask in the Saida shop or on Instagram for loads on the floor.",
      ar: "خراطيش صيد ساغا الإسبانية، معروضة في متجر العيسوي للصيد. اسأل في متجر صيدا أو على إنستغرام عن الأحمال الموجودة.",
    },
  },
};

export const categoryCopy: Record<
  CategoryId,
  {
    name: Record<Locale, string>;
    intro: Record<Locale, string>;
    isDemo: boolean;
  }
> = {
  rifles: {
    name: { en: "Rifles", ar: "بنادق" },
    intro: {
      en: "Hunting shotguns from Radikal and Aselkon presented in the Saida shop.",
      ar: "بنادق صيد من راديكال وأسلكون معروضة في متجر صيدا.",
    },
    isDemo: false,
  },
  cartridges: {
    name: { en: "Cartridges", ar: "خراطيش" },
    intro: {
      en: "Hunting cartridges from BME and Saga presented at Issawi Hunting Store. Confirm load and shot size in the shop.",
      ar: "خراطيش صيد من BME وSaga معروضة في متجر العيسوي للصيد. أكّد الحمل ورقم الخرطوش في المتجر.",
    },
    isDemo: false,
  },
};

export const products: Product[] = [
  {
    id: "aselkon-x3-dark-black",
    slug: "aselkon-x3-dark-black",
    name: { en: "X3 Dark Black", ar: "X3 Dark Black" },
    brand: "aselkon",
    category: "rifles",
    images: ["https://aselkonarms.com/wp-content/uploads/2022/10/X3-Dark-Black.png"],
    placeholder: "shotgun",
    description: {
      en: "Aselkon X3 Dark Black hunting shotgun, presented at Issawi Hunting Store. Ask in the Saida shop or on Instagram for what is on the floor.",
      ar: "بندقية صيد أسلكون X3 Dark Black، معروضة في متجر العيسوي للصيد. اسأل في متجر صيدا أو على إنستغرام عما هو موجود.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "System", ar: "النظام" }, value: { en: "Inertia", ar: "عطالة" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "aselkon-x5-bronze-pure",
    slug: "aselkon-x5-bronze-pure",
    name: { en: "X5 Bronze Pure", ar: "X5 Bronze Pure" },
    brand: "aselkon",
    category: "rifles",
    images: ["https://aselkonarms.com/wp-content/uploads/2022/10/X5-BronzePure-01.1.jpg"],
    placeholder: "shotgun",
    description: {
      en: "Aselkon X5 Bronze Pure hunting shotgun, presented at Issawi Hunting Store. Ask in the Saida shop or on Instagram for what is on the floor.",
      ar: "بندقية صيد أسلكون X5 Bronze Pure، معروضة في متجر العيسوي للصيد. اسأل في متجر صيدا أو على إنستغرام عما هو موجود.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "System", ar: "النظام" }, value: { en: "Inertia", ar: "عطالة" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "radikal-sax-2",
    slug: "radikal-sax-2",
    name: { en: "SAX-2", ar: "SAX-2" },
    brand: "radikal",
    category: "rifles",
    images: ["https://radikalarms.com/wp-content/uploads/2025/08/SAX-2-Radikal-Arms-2-scaled.webp"],
    placeholder: "shotgun",
    description: {
      en: "Radikal SAX-2 hunting shotgun, presented at Issawi Hunting Store. Ask in the Saida shop or on Instagram for what is on the floor.",
      ar: "بندقية صيد راديكال SAX-2، معروضة في متجر العيسوي للصيد. اسأل في متجر صيدا أو على إنستغرام عما هو موجود.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "System", ar: "النظام" }, value: { en: "Inertia", ar: "عطالة" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "radikal-sax-2-limited",
    slug: "radikal-sax-2-limited",
    name: { en: "SAX-2 Limited Edition", ar: "SAX-2 Limited Edition" },
    brand: "radikal",
    category: "rifles",
    images: [
      "https://radikalarms.com/wp-content/uploads/2025/08/SAX-2-Limited-Edition-Radikal-Arms-2-scaled.webp",
    ],
    placeholder: "shotgun",
    description: {
      en: "Radikal SAX-2 Limited Edition hunting shotgun, presented at Issawi Hunting Store. Ask in the Saida shop or on Instagram for what is on the floor.",
      ar: "بندقية صيد راديكال SAX-2 Limited Edition، معروضة في متجر العيسوي للصيد. اسأل في متجر صيدا أو على إنستغرام عما هو موجود.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "System", ar: "النظام" }, value: { en: "Inertia", ar: "عطالة" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "bme-express-c12-28",
    slug: "bme-express-c12-28",
    name: { en: "Express C12 28g", ar: "Express C12 28غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/express-c12-28.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Express 12 gauge 28 gram hunting cartridges, made in Lebanon. Presented at Issawi Hunting Store. Confirm shot size in the shop.",
      ar: "خراطيش صيد BME Express عيار 12 ووزن 28 غرام، مصنوعة في لبنان. معروضة في متجر العيسوي للصيد. أكّد رقم الخرطوش في المتجر.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "28 g", ar: "28 غ" } },
      { label: { en: "Maker", ar: "الصانع" }, value: { en: "BME / Brescia Middle East", ar: "BME / Brescia Middle East" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "bme-super-c12-32",
    slug: "bme-super-c12-32",
    name: { en: "Super C12 32g", ar: "Super C12 32غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/super-c12-32.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Super 12 gauge 32 gram hunting cartridges. A heavier hunting load from the Lebanese BME factory. Ask in Saida for available shot sizes.",
      ar: "خراطيش صيد BME Super عيار 12 ووزن 32 غرام. حمل أصيد أثقل من مصنع BME اللبناني. اسأل في صيدا عن أرقام الخرطوش المتوفرة.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "32 g", ar: "32 غ" } },
      { label: { en: "Maker", ar: "الصانع" }, value: { en: "BME / Brescia Middle East", ar: "BME / Brescia Middle East" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "bme-standard-c12-28",
    slug: "bme-standard-c12-28",
    name: { en: "Standard C12 28g", ar: "Standard C12 28غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/standard-c12-28.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Standard 12 gauge 28 gram cartridges for hunting. Made in Lebanon. Availability is confirmed in the shop or on Instagram.",
      ar: "خراطيش BME Standard عيار 12 ووزن 28 غرام للصيد. مصنوعة في لبنان. التوفّر يُؤكَّد في المتجر أو على إنستغرام.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "28 g", ar: "28 غ" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "bme-oro-c12-29",
    slug: "bme-oro-c12-29",
    name: { en: "Oro C12 29g", ar: "Oro C12 29غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/oro-c12-29.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Oro 12 gauge 29 gram hunting cartridges. Ask in the Saida shop which shot sizes are on the floor.",
      ar: "خراطيش صيد BME Oro عيار 12 ووزن 29 غرام. اسأل في متجر صيدا عن أرقام الخرطوش الموجودة.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "29 g", ar: "29 غ" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "bme-slug-c12",
    slug: "bme-slug-c12",
    name: { en: "Slug C12", ar: "Slug C12" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/slug-c12.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME 12 gauge slug cartridges. Confirm stock in the Saida shop or on Instagram.",
      ar: "خراطيش سلاق BME عيار 12. أكّد التوفّر في متجر صيدا أو على إنستغرام.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Type", ar: "النوع" }, value: { en: "Slug", ar: "سلاق" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "bme-junior-c12-26",
    slug: "bme-junior-c12-26",
    name: { en: "Junior C12 26g", ar: "Junior C12 26غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/junior-c12-26.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Junior 12 gauge 26 gram cartridges. A lighter hunting load from the BME factory in Lebanon.",
      ar: "خراطيش BME Junior عيار 12 ووزن 26 غرام. حمل أصيد أخف من مصنع BME في لبنان.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "26 g", ar: "26 غ" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "bme-millionaire-c12-26",
    slug: "bme-millionaire-c12-26",
    name: { en: "Millionaire C12 26g", ar: "Millionaire C12 26غ" },
    brand: "bme",
    category: "cartridges",
    images: ["/images/products/bme/millionaire-c12-26.jpg"],
    placeholder: "cartridge",
    description: {
      en: "BME Millionaire 12 gauge 26 gram cartridges. Ask in store for the loads currently available.",
      ar: "خراطيش BME Millionaire عيار 12 ووزن 26 غرام. اسأل في المتجر عن الأحمال المتوفرة حاليًا.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "26 g", ar: "26 غ" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "saga-field",
    slug: "saga-field",
    name: { en: "Field 12 GA", ar: "Field عيار 12" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/field.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga Field 12 gauge hunting cartridges. A versatile Spanish hunting load presented at Issawi Hunting Store. Confirm 28 g or 32 g and shot size in the shop.",
      ar: "خراطيش صيد Saga Field عيار 12. حمل صيد إسباني متعدد الاستعمال، معروض في متجر العيسوي. أكّد 28 أو 32 غ ورقم الخرطوش في المتجر.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Line", ar: "السلسلة" }, value: { en: "Field", ar: "Field" } },
      { label: { en: "Maker", ar: "الصانع" }, value: { en: "Saga / Sofiam Ibérica", ar: "Saga / Sofiam Ibérica" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "saga-export",
    slug: "saga-export",
    name: { en: "Export 12 GA", ar: "Export عيار 12" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/export.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga Export 12 gauge hunting cartridges. Ask in Saida which loads and shot sizes are on the floor.",
      ar: "خراطيش صيد Saga Export عيار 12. اسأل في صيدا عن الأحمال وأرقام الخرطوش الموجودة.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Line", ar: "السلسلة" }, value: { en: "Export", ar: "Export" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "saga-high-speed",
    slug: "saga-high-speed",
    name: { en: "High Speed 12 GA", ar: "High Speed عيار 12" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/highspeed.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga High Speed 12 gauge hunting cartridges, typically a 36 gram load. Confirm availability in the shop or on Instagram.",
      ar: "خراطيش صيد Saga High Speed عيار 12، وعادة حمل 36 غرام. أكّد التوفّر في المتجر أو على إنستغرام.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Line", ar: "السلسلة" }, value: { en: "High Speed", ar: "High Speed" } },
    ],
    featured: true,
    isDemo: false,
  },
  {
    id: "saga-heavy-34",
    slug: "saga-heavy-34",
    name: { en: "Heavy 34", ar: "Heavy 34" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/heavy-34.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga Heavy 34 hunting cartridges. A heavier 12 gauge hunting load. Ask in store for shot sizes in stock.",
      ar: "خراطيش صيد Saga Heavy 34. حمل أصيد أثقل بعيار 12. اسأل في المتجر عن أرقام الخرطوش المتوفرة.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Load", ar: "الحمل" }, value: { en: "34 g", ar: "34 غ" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "saga-rabbit",
    slug: "saga-rabbit",
    name: { en: "Rabbit", ar: "Rabbit" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/rabbit.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga Rabbit hunting cartridges. Confirm gauge and load in the Saida shop.",
      ar: "خراطيش صيد Saga Rabbit. أكّد العيار والحمل في متجر صيدا.",
    },
    specifications: [
      { label: { en: "Line", ar: "السلسلة" }, value: { en: "Rabbit", ar: "Rabbit" } },
      { label: { en: "Maker", ar: "الصانع" }, value: { en: "Saga", ar: "Saga" } },
    ],
    featured: false,
    isDemo: false,
  },
  {
    id: "saga-buck",
    slug: "saga-buck",
    name: { en: "Buck 12 GA", ar: "Buck عيار 12" },
    brand: "saga",
    category: "cartridges",
    images: ["/images/products/saga/buck.jpg"],
    placeholder: "cartridge",
    description: {
      en: "Saga Buck 12 gauge buckshot hunting cartridges. Ask in the shop which pellet counts are available.",
      ar: "خراطيش Saga Buck عيار 12 (خرز كبير). اسأل في المتجر عن أعداد الخرز المتوفرة.",
    },
    specifications: [
      { label: { en: "Gauge", ar: "العيار" }, value: { en: "12", ar: "12" } },
      { label: { en: "Type", ar: "النوع" }, value: { en: "Buckshot", ar: "خرز كبير" } },
    ],
    featured: false,
    isDemo: false,
  },
];

export function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((item) => item.featured);
}

export function getProductsByBrand(brand: BrandId) {
  return products.filter((item) => item.brand === brand);
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter((item) => item.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.id !== product.id)
    .filter((item) => item.brand === product.brand || item.category === product.category)
    .slice(0, limit);
}

export function isBrandId(value: string): value is BrandId {
  return brandIds.includes(value as BrandId);
}

export function isCategoryId(value: string): value is CategoryId {
  return categoryIds.includes(value as CategoryId);
}

export function brandLabel(brand: BrandId | null, locale: Locale) {
  if (!brand) {
    return locale === "ar" ? "اختيار المتجر" : "Store selection";
  }
  return brandCopy[brand].name;
}
