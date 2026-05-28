import { Outlet, NavLink } from "react-router-dom";
import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import { useCartStore } from "../store/cartStore";

const navItems = [
  { to: "/home", icon: Home, label: "Shop" },
  { to: "/home/explore", icon: Search, label: "Explore" },
  { to: "/home/cart", icon: ShoppingCart, label: "Cart" },
  { to: "/home/favorites", icon: Heart, label: "Favourite" },
  { to: "/home/account", icon: User, label: "Account" },
];

export default function MainLayout() {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Top Nav */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-green-500" size={24} />
            <span className="text-green-500 font-bold text-2xl tracking-tight">nectar</span>
          </div>
          <div className="flex gap-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/home"}
                aria-label={label}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-medium transition-colors relative ${
                    isActive ? "text-green-500" : "text-gray-500 hover:text-green-500"
                  }`
                }
              >
                <Icon size={18} />
                <span>{label}</span>
                {label === "Cart" && totalItems > 0 && (
                  <span className="bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="md:pt-16 pb-20 md:pb-0">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 md:hidden z-50"
        aria-label="Main navigation"
      >
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/home"}
            aria-label={label}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 text-xs px-3 py-1 relative transition-colors ${
                isActive ? "text-green-500" : "text-gray-400"
              }`
            }
          >
            <span className="relative">
              <Icon size={22} />
              {label === "Cart" && totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
