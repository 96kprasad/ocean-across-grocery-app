import { Minus, Plus } from "lucide-react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  ariaLabel?: string;
}

export default function NumberInput({
  value,
  onChange,
  min = 1,
  max,
  ariaLabel = "Quantity",
}: Props) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (max === undefined || value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-3" aria-label={ariaLabel}>
      <button
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease"
        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-green-500 transition-colors disabled:opacity-40"
      >
        <Minus size={14} />
      </button>
      <span className="text-base font-semibold w-6 text-center">{value}</span>
      <button
        onClick={increment}
        disabled={max !== undefined && value >= max}
        aria-label="Increase"
        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-green-500 transition-colors disabled:opacity-40"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
