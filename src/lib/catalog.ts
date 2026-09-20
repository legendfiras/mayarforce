import {
  brandIds,
  categoryIds,
  products,
  type BrandId,
  type CategoryId,
  type Product,
} from "@/content/products";

export type CatalogQuery = {
  q?: string;
  brand?: string;
  category?: string;
};

export type CatalogResult = {
  items: Product[];
  query: {
    q: string;
    brand: BrandId | "store" | "";
    category: CategoryId | "";
  };
  activeCount: number;
};

function firstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export function parseCatalogQuery(
  searchParams: Record<string, string | string[] | undefined>,
): CatalogQuery {
  return {
    q: firstValue(searchParams.q).trim(),
    brand: firstValue(searchParams.brand).trim(),
    category: firstValue(searchParams.category).trim(),
  };
}

export function filterProducts(
  source: readonly Product[],
  query: CatalogQuery,
): CatalogResult {
  const q = (query.q ?? "").trim().toLowerCase();
  const brandRaw = query.brand ?? "";
  const categoryRaw = query.category ?? "";
  const brand =
    brandRaw === "store" || brandIds.includes(brandRaw as BrandId)
      ? (brandRaw as BrandId | "store")
      : "";
  const category = categoryIds.includes(categoryRaw as CategoryId)
    ? (categoryRaw as CategoryId)
    : "";

  const items = source.filter((product) => {
    if (brand === "store" && product.brand !== null) return false;
    if (brand && brand !== "store" && product.brand !== brand) return false;
    if (category && product.category !== category) return false;
    if (!q) return true;
    const haystack = [
      product.name.en,
      product.name.ar,
      product.brand ?? "",
      product.category,
      product.description.en,
      product.description.ar,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  return {
    items,
    query: { q: query.q ?? "", brand, category },
    activeCount: [q, brand, category].filter(Boolean).length,
  };
}

export function queryFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
) {
  return filterProducts(products, parseCatalogQuery(searchParams));
}
