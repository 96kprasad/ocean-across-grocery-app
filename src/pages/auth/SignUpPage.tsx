import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, ShoppingBasket } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuthStore();
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [showPass, setShowPass] = useState(false);

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) return;
    await signup(form.name, form.email, form.password, form.phone);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex">
      {/* Desktop Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-green-500 flex-col items-center justify-center p-12">
        <ShoppingBasket size={80} className="text-white mb-6" />
        <h1 className="text-white text-5xl font-bold tracking-wide mb-3">nectar</h1>
        <p className="text-green-100 text-lg text-center">
          Fresh groceries delivered to your door
        </p>
      </div>

      {/* Right / Mobile Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 md:px-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile logo */}
          <div className="flex justify-center mb-8 md:hidden">
            <ShoppingBasket size={56} className="text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Sign Up</h1>
          <p className="text-gray-500 text-sm mb-8">Enter your credentials to continue</p>

          <div className="space-y-6 mb-8">
            {[
              { label: "Username", key: "name", type: "text", placeholder: "Afsar Hossen Shuvo" },
              { label: "Email", key: "email", type: "email", placeholder: "imshuvo97@gmail.com" },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} className="border-b border-gray-200 pb-2">
                <label className="text-xs text-gray-500">{label}</label>
                <input
                  type={type}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => update(key, e.target.value)}
                  placeholder={placeholder}
                  aria-label={label}
                  className="w-full outline-none text-gray-900 mt-1 text-sm"
                />
              </div>
            ))}

            <div className="border-b border-gray-200 pb-2">
              <label className="text-xs text-gray-500">Password</label>
              <div className="flex items-center">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  aria-label="Password"
                  className="flex-1 outline-none text-gray-900 mt-1 text-sm"
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? "Hide password" : "Show password"}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            By continuing you agree to our{" "}
            <span className="text-green-500 cursor-pointer hover:underline">Terms of Service</span>{" "}
            and{" "}
            <span className="text-green-500 cursor-pointer hover:underline">Privacy Policy</span>.
          </p>

          <button
            onClick={handleSignup}
            disabled={isLoading}
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-70 mb-4"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 font-medium hover:text-green-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
