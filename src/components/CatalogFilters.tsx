"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n";
import { siteContent } from "@/content/site";
import { brandCopy, brandIds, categoryCopy, categoryIds } from "@/content/products";

export type FilterState = {
  q: string;
  brand: string;
  category: string;
};

type CatalogFiltersProps = {
  locale: Locale;
  basePath: string;
  value: FilterState;
  resultCount: number;
  hideBrand?: boolean;
  hideCategory?: boolean;
};

export function CatalogFilters({
  locale,
  basePath,
  value,
  resultCount,
  hideBrand = false,
  hideCategory = false,
}: CatalogFiltersProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const copy = siteContent.catalog;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
        <p className="text-sm text-moss">{copy.results[locale](resultCount)}</p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center border border-forest px-4 text-sm font-medium text-forest"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          {copy.openFilters[locale]}
        </button>
      </div>

      <aside className="hidden lg:block">
        <FilterForm
          locale={locale}
          basePath={basePath}
          value={value}
          hideBrand={hideBrand}
          hideCategory={hideCategory}
        />
      </aside>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-[60] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label={copy.filters[locale]}
      >
        <button
          type="button"
          className="absolute inset-0 bg-charcoal/40"
          aria-label={copy.closeFilters[locale]}
          onClick={() => setOpen(false)}
        />
        <div className="absolute inset-y-0 start-0 w-[min(100%,20rem)] overflow-y-auto bg-white p-5 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{copy.filters[locale]}</h2>
            <button
              type="button"
              className="min-h-11 px-2 text-sm font-medium text-forest"
              onClick={() => setOpen(false)}
            >
              {copy.closeFilters[locale]}
            </button>
          </div>
          <FilterForm
            locale={locale}
            basePath={basePath}
            value={value}
            hideBrand={hideBrand}
            hideCategory={hideCategory}
            onSubmitted={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

type FilterFormProps = Omit<CatalogFiltersProps, "resultCount"> & {
  onSubmitted?: () => void;
};

function FilterForm({
  locale,
  basePath,
  value,
  hideBrand,
  hideCategory,
  onSubmitted,
}: FilterFormProps) {
  const router = useRouter();
  const copy = siteContent.catalog;
  const [q, setQ] = useState(value.q);
  const [brand, setBrand] = useState(value.brand);
  const [category, setCategory] = useState(value.category);

  useEffect(() => {
    setQ(value.q);
    setBrand(value.brand);
    setCategory(value.category);
  }, [value.q, value.brand, value.category]);

  function apply(next: FilterState) {
    const params = new URLSearchParams();
    if (next.q) params.set("q", next.q);
    if (next.brand) params.set("brand", next.brand);
    if (next.category) params.set("category", next.category);
    const qs = params.toString();
    router.push(qs ? `${basePath}?${qs}` : basePath);
    onSubmitted?.();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    apply({ q, brand, category });
  }

  const hasActive = Boolean(value.q || value.brand || value.category);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-charcoal">
          {siteContent.header[locale].searchLabel}
        </legend>
        <input
          type="search"
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder={siteContent.header[locale].searchPlaceholder}
          className="min-h-11 w-full border border-line bg-white px-3 text-sm outline-none focus:border-forest"
        />
      </fieldset>

      {hideBrand ? null : (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-charcoal">{copy.brand[locale]}</legend>
          <div className="space-y-2">
            <FilterRadio
              name="brand"
              checked={brand === ""}
              onChange={() => setBrand("")}
              label={copy.allBrands[locale]}
            />
            {brandIds.map((id) => (
              <FilterRadio
                key={id}
                name="brand"
                checked={brand === id}
                onChange={() => setBrand(id)}
                label={brandCopy[id].name}
              />
            ))}
          </div>
        </fieldset>
      )}

      {hideCategory ? null : (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-charcoal">{copy.category[locale]}</legend>
          <div className="space-y-2">
            <FilterRadio
              name="category"
              checked={category === ""}
              onChange={() => setCategory("")}
              label={copy.allCategories[locale]}
            />
            {categoryIds.map((id) => (
              <FilterRadio
                key={id}
                name="category"
                checked={category === id}
                onChange={() => setCategory(id)}
                label={categoryCopy[id].name[locale]}
              />
            ))}
          </div>
        </fieldset>
      )}

      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center bg-forest text-sm font-semibold text-cream hover:bg-forest-deep"
        >
          {copy.filters[locale]}
        </button>
        {hasActive ? (
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center border border-line text-sm font-medium text-charcoal hover:border-forest"
            onClick={() => {
              setQ("");
              setBrand("");
              setCategory("");
              apply({ q: "", brand: "", category: "" });
            }}
          >
            {copy.clear[locale]}
          </button>
        ) : null}
      </div>
    </form>
  );
}

function FilterRadio({
  name,
  checked,
  onChange,
  label,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-charcoal">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="size-4 accent-forest"
      />
      {label}
    </label>
  );
}
