import { Apple, Leaf, Beef, Croissant, Milk, GlassWater, Cookie, Snowflake } from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap: Record<string, React.FC<LucideProps>> = {
  Fruits: Apple,
  Vegetables: Leaf,
  Meat: Beef,
  Bakery: Croissant,
  Dairy: Milk,
  Beverages: GlassWater,
  Snacks: Cookie,
  Frozen: Snowflake,
};

const colorMap: Record<string, string> = {
  Fruits: "text-green-600",
  Vegetables: "text-lime-600",
  Meat: "text-red-600",
  Bakery: "text-yellow-600",
  Dairy: "text-blue-600",
  Beverages: "text-purple-600",
  Snacks: "text-orange-600",
  Frozen: "text-cyan-600",
};

interface Props {
  name: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ name, size = 32, className }: Props) {
  const Icon = iconMap[name] ?? Leaf;
  const defaultColor = colorMap[name] ?? "text-gray-500";
  return <Icon size={size} className={className ?? defaultColor} />;
}
