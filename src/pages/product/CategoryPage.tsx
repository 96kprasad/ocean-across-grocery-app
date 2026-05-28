import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, SlidersHorizontal, AlertCircle, ShoppingCart } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import { categories } from "../../data/products";
import ProductGrid from "../../components/common/ProductGrid";
import CategoryIcon from "../../components/common/CategoryIcon";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const { products, isLoading, error, fetchProducts } = useProductsStore();
  const [selectedCat, setSelectedCat] = useState(categoryName ?? "");

  useEffect(() => {
    if (!products.length) fetchProducts();
  }, [fetchProducts, products.length]);

  useEffect(() => {
    setSelectedCat(categoryName ?? "");
  }, [categoryName]);

  const filtered = products.filter((p) => p.category === selectedCat);

  const content = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-red-400">
          <AlertCircle size={48} className="mb-3" />
          <p className="font-medium">{error}</p>
          <button onClick={fetchProducts} className="mt-3 text-green-500 underline text-sm">
            Try again
          </button>
        </div>
      );
    }
    if (!isLoading && filtered.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <ShoppingCart size={48} className="mb-3" />
          <p className="text-lg font-medium">No products found</p>
          <p className="text-sm">Try a different category</p>
        </div>
      );
    }
    return <ProductGrid products={filtered} isLoading={isLoading} skeletonCount={8} />;
  };

  return (
    <div className="px-4 pt-4 md:px-8">
      {/* Mobile Header */}
      <div className="flex items-center justify-between mb-6 md:hidden">
        <button onClick={() => navigate(-1)} aria-label="Go back" className="text-gray-500">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">{selectedCat}</h1>
        <button onClick={() => navigate("/home/filters")} aria-label="Open filters" className="text-gray-500">
          <SlidersHorizontal size={22} />
        </button>
      </div>

      {/* Desktop Layout: Sidebar + Grid */}
      <div className="hidden md:flex gap-8">
        <aside className="w-56 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCat(cat.name);
                  navigate(`/home/category/${cat.name}`);
                }}
                aria-label={`Filter by ${cat.name}`}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  selectedCat === cat.name
                    ? "bg-green-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <CategoryIcon
                  name={cat.icon}
                  size={18}
                  className={selectedCat === cat.name ? "text-white" : ""}
                />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{selectedCat}</h1>
          {content()}
        </div>
      </div>

      {/* Mobile Products */}
      <div className="md:hidden">{content()}</div>
    </div>
  );
}
