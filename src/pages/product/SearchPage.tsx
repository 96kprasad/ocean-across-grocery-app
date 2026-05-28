import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, AlertCircle, X } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import ProductCard from "../../components/product/ProductCard";
import ProductSkeleton from "../../components/common/ProductSkeleton";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function SearchPage() {
  const navigate = useNavigate();
  const { products, isLoading, error, fetchProducts } = useProductsStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!products.length) fetchProducts();
  }, [fetchProducts, products.length]);

  const results = debouncedQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
    : products;

  return (
    <div className="px-4 pt-4 md:px-8">
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3 mb-6">
        <Search size={18} className="text-gray-400" />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Store"
          aria-label="Search products"
          className="flex-1 bg-transparent outline-none text-gray-900 text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="text-gray-400"
          >
            <X size={16} />
          </button>
        )}
        <button
          onClick={() => navigate(-1)}
          aria-label="Close search"
          className="text-gray-400 ml-1"
        >
          <X size={16} />
        </button>
      </div>

      {/* Error state */}
      {error && (
        <div className="flex flex-col items-center justify-center py-20 text-red-400">
          <AlertCircle size={48} className="mb-3" />
          <p className="font-medium">{error}</p>
          <button onClick={fetchProducts} className="mt-3 text-green-500 underline text-sm">
            Try again
          </button>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array(8).fill(0).map((_, i) => <ProductSkeleton key={i} />)}
        </div>
      )}

      {/* Empty state */}
      {!isLoading && !error && results.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Search size={48} className="mb-3" />
          <p className="text-lg font-medium">No results found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      )}

      {/* Results */}
      {!isLoading && !error && results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
