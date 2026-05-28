import { useNavigate } from "react-router-dom";
import { Heart, ChevronRight } from "lucide-react";
import { useFavoritesStore } from "../../store/favoritesStore";
import { useCartStore } from "../../store/cartStore";

export default function FavoritesPage() {
  const { favorites } = useFavoritesStore();
  const addToCart = useCartStore((s) => s.addToCart);
  const navigate = useNavigate();

  const handleAddAll = () => {
    favorites.forEach((p) => addToCart(p));
    navigate("/home/cart");
  };

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 px-4">
        <Heart size={64} className="mb-4 text-gray-300" />
        <p className="text-xl font-semibold text-gray-700">No favorites yet</p>
        <p className="text-sm mb-6">Tap the heart on any product to save it</p>
        <button
          onClick={() => navigate("/home")}
          className="bg-green-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 px-4 pt-4 md:px-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4 underline decoration-green-500">
          Favourites
        </h1>

        <div className="divide-y divide-gray-100">
          {favorites.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/home/product/${product.id}`)}
              className="flex items-center gap-4 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{product.unit}, Price</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-16 md:bottom-0 px-4 pb-4 bg-white">
        <button
          onClick={handleAddAll}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors"
        >
          Add All To Cart
        </button>
      </div>
    </div>
  );
}
