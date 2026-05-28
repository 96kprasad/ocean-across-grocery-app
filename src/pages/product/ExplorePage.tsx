import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { categories } from "../../data/products";
import CategoryIcon from "../../components/common/CategoryIcon";

export default function ExplorePage() {
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-6 md:px-8">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-4 md:text-left">
        Find Products
      </h1>

      {/* Search */}
      <button
        onClick={() => navigate("/home/search")}
        aria-label="Search products"
        className="w-full flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3 mb-6 hover:bg-gray-200 transition-colors"
      >
        <Search size={18} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Search Store</span>
      </button>

      {/* Mobile: 2-col grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(`/home/category/${cat.name}`)}
            aria-label={`Browse ${cat.name}`}
            className={`${cat.color} rounded-2xl p-6 flex flex-col items-center gap-3 hover:opacity-80 transition-opacity`}
          >
            <CategoryIcon name={cat.icon} size={40} />
            <span className="font-semibold text-gray-700 text-sm text-center">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Desktop: sidebar + grid */}
      <div className="hidden md:flex gap-8">
        {/* Sidebar */}
        <aside className="w-56 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/home/category/${cat.name}`)}
                aria-label={`Browse ${cat.name}`}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <CategoryIcon name={cat.icon} size={18} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Desktop: 4-col category grid */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/home/category/${cat.name}`)}
                aria-label={`Browse ${cat.name}`}
                className={`${cat.color} rounded-2xl p-6 flex flex-col items-center gap-3 hover:opacity-80 transition-opacity`}
              >
                <CategoryIcon name={cat.icon} size={40} />
                <span className="font-semibold text-gray-700 text-sm text-center">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
