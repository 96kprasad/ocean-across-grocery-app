import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Share2, Heart, ChevronDown, ChevronUp, ChevronRight, Star } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import { useCartStore } from "../../store/cartStore";
import { useFavoritesStore } from "../../store/favoritesStore";
import NumberInput from "../../components/common/input/NumberInput";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, fetchProducts, getById } = useProductsStore();
  const addToCart = useCartStore((s) => s.addToCart);
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const [qty, setQty] = useState(1);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (!products.length) fetchProducts();
  }, [fetchProducts, products.length]);

  const product = getById(id ?? "");
  if (!product) return <div className="p-8 text-center text-gray-400">Product not found</div>;

  const favorite = isFavorite(product.id);

  return (
    <div className="min-h-screen bg-white flex flex-col md:max-w-2xl md:mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="text-gray-500">
          <ChevronLeft size={24} />
        </button>
        <button aria-label="Share product" className="text-gray-500">
          <Share2 size={20} />
        </button>
      </div>

      {/* Product Image */}
      <div className="px-8 py-4">
        <img src={product.image} alt={product.name} className="w-full h-64 object-contain" />
      </div>

      {/* Details */}
      <div className="flex-1 bg-white rounded-t-3xl px-6 pt-6 pb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-400 text-sm">{product.unit}, Price</p>
          </div>
          <button
            onClick={() => toggleFavorite(product)}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart size={24} className={favorite ? "fill-red-500 text-red-500" : "text-gray-300"} />
          </button>
        </div>

        {/* Qty + Price */}
        <div className="flex items-center justify-between mb-6">
          <NumberInput value={qty} onChange={setQty} min={1} ariaLabel="Product quantity" />
          <span className="text-2xl font-bold text-gray-900">
            ${(product.price * qty).toFixed(2)}
          </span>
        </div>

        {/* Product Detail Accordion */}
        <div className="border-t border-gray-100 py-4">
          <button
            onClick={() => setDetailOpen(!detailOpen)}
            aria-expanded={detailOpen}
            className="flex items-center justify-between w-full"
          >
            <span className="font-semibold text-gray-900">Product Detail</span>
            {detailOpen
              ? <ChevronUp size={18} className="text-gray-400" />
              : <ChevronDown size={18} className="text-gray-400" />}
          </button>
          {detailOpen && (
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">{product.description}</p>
          )}
        </div>

        {/* Nutritions */}
        <div className="border-t border-gray-100 py-4 flex items-center justify-between">
          <span className="font-semibold text-gray-900">Nutritions</span>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">100g</span>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Review */}
        <div className="border-t border-gray-100 py-4 flex items-center justify-between">
          <span className="font-semibold text-gray-900">Review</span>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array(Math.round(product.rating)).fill(0).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Add to Basket */}
        <button
          onClick={() => {
            for (let i = 0; i < qty; i++) addToCart(product);
            navigate("/home/cart");
          }}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors mt-4"
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}
