import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Check } from "lucide-react";
import { categories } from "../../data/products";

const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"];

export default function FiltersPage() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["Cocola"]);

  const toggleItem = (
    item: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-4 bg-white">
        <button onClick={() => navigate(-1)} aria-label="Close filters" className="text-gray-500">
          <X size={22} />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Filters</h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 px-4 pt-6 overflow-y-auto">
        {/* Categories */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
        <div className="space-y-3 mb-8">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                  selectedCategories.includes(cat.name)
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
                onClick={() =>
                  toggleItem(cat.name, selectedCategories, setSelectedCategories)
                }
              >
                {selectedCategories.includes(cat.name) && (
                  <Check size={12} className="text-white" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  selectedCategories.includes(cat.name)
                    ? "text-green-500"
                    : "text-gray-700"
                }`}
              >
                {cat.name}
              </span>
            </label>
          ))}
        </div>

        {/* Brand */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">Brand</h2>
        <div className="space-y-3 mb-8">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer">
              <div
                className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
                  selectedBrands.includes(brand)
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
                onClick={() =>
                  toggleItem(brand, selectedBrands, setSelectedBrands)
                }
              >
                {selectedBrands.includes(brand) && (
                  <Check size={12} className="text-white" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  selectedBrands.includes(brand)
                    ? "text-green-500"
                    : "text-gray-700"
                }`}
              >
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filter */}
      <div className="px-4 pb-24 md:pb-8 pt-4 bg-gray-50">
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
