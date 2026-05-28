import { useNavigate } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import type { Product } from "../../types";
import { useCartStore } from "../../store/cartStore";
import { useFavoritesStore } from "../../store/favoritesStore";

interface Props {
  product: Product;
  layout?: "grid" | "list";
}

export default function ProductCard({ product, layout = "grid" }: Props) {
  const navigate = useNavigate();
  const addToCart = useCartStore((s) => s.addToCart);
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(product.id);

  if (layout === "list") {
    return (
      <div className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-xl cursor-pointer"
          onClick={() => navigate(`/home/product/${product.id}`)}
        />
        <div className="flex-1 cursor-pointer" onClick={() => navigate(`/home/product/${product.id}`)}>
          <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
          <p className="text-gray-400 text-xs">{product.unit}, Price</p>
          <p className="text-gray-900 font-bold mt-1">${product.price.toFixed(2)}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm relative">
      <button
        onClick={() => toggleFavorite(product)}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute top-2 right-2 z-10"
      >
        <Heart
          size={20}
          className={favorite ? "fill-red-500 text-red-500" : "text-gray-300"}
        />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-28 object-cover rounded-xl mb-2 cursor-pointer"
        onClick={() => navigate(`/home/product/${product.id}`)}
      />
      <p className="font-semibold text-gray-900 text-sm truncate">{product.name}</p>
      <p className="text-gray-400 text-xs">{product.unit}, Price</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
          className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}
