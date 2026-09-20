import type { ReactNode } from "react";
import type { PlaceholderKind } from "@/content/products";

type PlaceholderArtProps = {
  kind: PlaceholderKind;
  className?: string;
};

export function PlaceholderArt({ kind, className = "h-full w-full" }: PlaceholderArtProps) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <rect width="160" height="160" fill="#f3f0e8" />
      <g fill="none" stroke="#1e3d32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {icons[kind]}
      </g>
    </svg>
  );
}

const icons: Record<PlaceholderKind, ReactNode> = {
  shotgun: (
    <>
      <path d="M18 92h78l22-10 24 4v8l-24 4-8 14H92l4-14H18z" />
      <path d="M30 92v14M48 78h18v14" />
    </>
  ),
  cartridge: (
    <>
      <rect x="42" y="48" width="76" height="64" rx="4" />
      <path d="M54 64h52M54 80h36" />
    </>
  ),
};
