import Image from "next/image";
import type { Product } from "@/content/products";
import { PlaceholderArt } from "@/components/PlaceholderArt";

type ProductImageProps = {
  product: Product;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductImage({
  product,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw",
}: ProductImageProps) {
  const src = product.images[0];

  return (
    <div className={`relative bg-[#f6f3ec] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain p-4"
        />
      ) : (
        <PlaceholderArt kind={product.placeholder} />
      )}
    </div>
  );
}
