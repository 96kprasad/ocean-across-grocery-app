interface Props {
  label?: string;
  type?: "text" | "email" | "password" | "tel" | "search";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  rightElement?: React.ReactNode;
  ariaLabel?: string;
}

export default function TextInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  rightElement,
  ariaLabel,
}: Props) {
  return (
    <div className="w-full">
      {label && (
        <label className="text-xs text-gray-500 mb-1 block">{label}</label>
      )}
      <div
        className={`flex items-center border-b pb-2 transition-colors ${
          error ? "border-red-400" : "border-gray-200 focus-within:border-green-500"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel ?? label}
          className="flex-1 outline-none text-gray-900 text-sm bg-transparent disabled:opacity-50"
        />
        {rightElement && <div className="ml-2">{rightElement}</div>}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
