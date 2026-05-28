import type { Product } from "../../../types";
import ProductCard from "../../product/ProductCard";
import ProductSkeleton from "../ProductSkeleton";

interface Props {
  products: Product[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export default function ProductGrid({ products, isLoading = false, skeletonCount = 4 }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {isLoading
        ? Array(skeletonCount).fill(0).map((_, i) => <ProductSkeleton key={i} />)
        : products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
