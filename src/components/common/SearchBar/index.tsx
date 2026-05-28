import { Search, X } from "lucide-react";

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  readOnly?: boolean;
}

export default function SearchBar({
  value = "",
  onChange,
  onFocus,
  placeholder = "Search Store",
  readOnly = false,
}: Props) {
  return (
    <div
      className="flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-3 hover:bg-gray-200 transition-colors cursor-pointer"
      onClick={readOnly ? onFocus : undefined}
    >
      <Search size={18} className="text-gray-400 flex-shrink-0" />
      {readOnly ? (
        <span className="text-gray-400 text-sm flex-1">{placeholder}</span>
      ) : (
        <input
          autoFocus
          type="search"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={onFocus}
          placeholder={placeholder}
          aria-label="Search products"
          className="flex-1 bg-transparent outline-none text-gray-900 text-sm"
        />
      )}
      {!readOnly && value && (
        <button
          onClick={() => onChange?.("")}
          aria-label="Clear search"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
