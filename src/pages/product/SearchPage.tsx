import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Search } from "lucide-react";
import { useProductsStore } from "../../store/productsStore";
import SearchBar from "../../components/common/SearchBar";
import ProductGrid from "../../components/common/ProductGrid";

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
      <div className="mb-6 flex items-center gap-2">
        <div className="flex-1">
          <SearchBar value={query} onChange={setQuery} placeholder="Search Store" />
        </div>
        <button
          onClick={() => navigate(-1)}
          aria-label="Close search"
          className="text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium"
        >
          Cancel
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

      {/* Empty state */}
      {!isLoading && !error && results.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Search size={48} className="mb-3" />
          <p className="text-lg font-medium">No results found</p>
          <p className="text-sm">Try a different search term</p>
        </div>
      )}

      {/* Results */}
      {!error && (
        <ProductGrid products={results} isLoading={isLoading} skeletonCount={8} />
      )}
    </div>
  );
}
