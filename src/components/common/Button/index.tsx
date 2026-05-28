interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: "bg-green-500 text-white hover:bg-green-600 disabled:opacity-70",
  outline: "border border-green-500 text-green-500 hover:bg-green-50",
  ghost: "text-gray-500 hover:text-gray-700 hover:bg-gray-100",
  danger: "bg-red-50 text-red-500 hover:bg-red-100",
};

const sizeClasses: Record<string, string> = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-sm font-semibold",
  lg: "py-4 px-8 text-lg font-semibold",
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  type = "button",
  ariaLabel,
  className = "",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        rounded-2xl transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
