import { useNavigate } from "react-router-dom";
import { Package, MapPin, CreditCard, Bell, HelpCircle, Info, LogOut, ChevronRight, User } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

const menuItems = [
  { icon: Package, label: "My Orders" },
  { icon: MapPin, label: "Delivery Address" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help" },
  { icon: Info, label: "About" },
];

export default function AccountPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="px-4 pt-6 md:px-8 max-w-lg mx-auto">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
          <User size={40} className="text-green-500" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">{user?.name ?? "User"}</h1>
        <p className="text-gray-500 text-sm">{user?.email}</p>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-full flex items-center gap-4 bg-white rounded-2xl px-4 py-4 shadow-sm hover:bg-gray-50 transition-colors"
          >
            <Icon size={20} className="text-gray-500" />
            <span className="text-gray-700 font-medium">{label}</span>
            <ChevronRight size={18} className="ml-auto text-gray-400" />
          </button>
        ))}

        <button
          onClick={handleLogout}
          aria-label="Log out"
          className="w-full flex items-center gap-4 bg-red-50 rounded-2xl px-4 py-4 mt-4 hover:bg-red-100 transition-colors"
        >
          <LogOut size={20} className="text-red-500" />
          <span className="text-red-500 font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}
