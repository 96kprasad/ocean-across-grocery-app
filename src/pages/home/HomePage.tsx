import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, AlertCircle, RefreshCw, Leaf } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import { useAuthStore } from "../../store/authStore";
import { categories } from "../../data/products";
import SearchBar from "../../components/common/SearchBar";
import SectionHeader from "../../components/common/SectionHeader";
import ProductGrid from "../../components/common/ProductGrid";
import CategoryIcon from "../../components/common/CategoryIcon";

export default function HomePage() {
  const navigate = useNavigate();
  const { products, isLoading, error, fetchProducts } = useProductsStore();
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const exclusiveOffers = products.slice(0, 4);
  const bestSelling = products.slice(4, 8);
  const groceries = categories.slice(0, 6);

  return (
    <div className="px-4 pt-4 pb-4 md:pt-8 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-gray-700 text-sm font-medium">
          <MapPin size={16} className="text-green-500" />
          <span>{user?.location?.label ?? "Dhaka, Banasree"}</span>
        </div>
        <span className="text-green-500 font-bold text-lg">nectar</span>
      </div>

      {/* Search bar — readonly, navigates to search page */}
      <div className="mb-4" onClick={() => navigate("/home/search")}>
        <SearchBar readOnly placeholder="Search Store" />
      </div>

      {/* Banner */}
      <div className="bg-green-500 rounded-2xl p-4 mb-6 flex items-center justify-between overflow-hidden">
        <div>
          <p className="text-white/80 text-xs">Fresh Vegetables</p>
          <p className="text-white font-bold text-lg">Get Up To 40% Off</p>
        </div>
        <Leaf size={56} className="text-white/80" />
      </div>

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4 flex items-center gap-3">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
          <div>
            <p className="text-red-700 text-sm font-medium">{error}</p>
            <button
              onClick={fetchProducts}
              className="flex items-center gap-1 text-red-500 text-xs underline mt-1"
            >
              <RefreshCw size={12} /> Try again
            </button>
          </div>
        </div>
      )}

      {/* Exclusive Offers */}
      <div className="mb-6">
        <SectionHeader title="Exclusive Offer" onSeeAll={() => navigate("/home/category/Fruits")} />
        <ProductGrid products={exclusiveOffers} isLoading={isLoading} skeletonCount={4} />
      </div>

      {/* Best Selling */}
      <div className="mb-6">
        <SectionHeader title="Best Selling" onSeeAll={() => navigate("/home/explore")} />
        <ProductGrid products={bestSelling} isLoading={isLoading} skeletonCount={4} />
      </div>

      {/* Groceries */}
      <div className="mb-6">
        <SectionHeader title="Groceries" onSeeAll={() => navigate("/home/explore")} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {groceries.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/home/category/${cat.name}`)}
              aria-label={`Browse ${cat.name}`}
              className={`${cat.color} rounded-2xl p-4 flex flex-col items-center gap-2 hover:opacity-80 transition-opacity`}
            >
              <CategoryIcon name={cat.icon} size={32} />
              <span className="font-semibold text-gray-700 text-sm text-center">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
