import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  ariaLabel?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error,
  ariaLabel,
}: Props) {
  return (
    <div className="w-full">
      {label && (
        <label className="text-xs text-gray-500 mb-1 block">{label}</label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-label={ariaLabel ?? label}
          className={`w-full appearance-none border rounded-xl px-4 py-3 text-sm text-gray-700 outline-none bg-white transition-colors pr-10 disabled:opacity-50 ${
            error
              ? "border-red-400 focus:border-red-400"
              : "border-gray-200 focus:border-green-500"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
