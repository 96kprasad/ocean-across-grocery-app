import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, AlertCircle, RefreshCw, Leaf } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import { useAuthStore } from "../../store/authStore";
import { categories } from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductSkeleton from "../../components/common/ProductSkeleton";
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

      {/* Search bar */}
      <button
        onClick={() => navigate("/home/search")}
        aria-label="Search products"
        className="w-full flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3 mb-4 hover:bg-gray-200 transition-colors"
      >
        <Search size={18} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Search Store</span>
      </button>

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
      <Section title="Exclusive Offer" onSeeAll={() => navigate("/home/category/Fruits")}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {isLoading
            ? Array(4).fill(0).map((_, i) => <ProductSkeleton key={i} />)
            : exclusiveOffers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Best Selling */}
      <Section title="Best Selling" onSeeAll={() => navigate("/home/explore")}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {isLoading
            ? Array(4).fill(0).map((_, i) => <ProductSkeleton key={i} />)
            : bestSelling.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* Groceries */}
      <Section title="Groceries" onSeeAll={() => navigate("/home/explore")}>
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
      </Section>
    </div>
  );
}

function Section({
  title,
  onSeeAll,
  children,
}: {
  title: string;
  onSeeAll: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <button
          onClick={onSeeAll}
          aria-label={`See all ${title}`}
          className="text-green-500 text-sm font-medium hover:text-green-600 transition-colors"
        >
          See all
        </button>
      </div>
      {children}
    </div>
  );
}
