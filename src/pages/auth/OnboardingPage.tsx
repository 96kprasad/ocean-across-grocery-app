import { useNavigate } from "react-router-dom";
import { ShoppingBasket } from "lucide-react";

export default function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Mobile: full bg image */}
      <div className="md:hidden min-h-screen w-full relative flex flex-col items-center justify-end pb-16 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-8 w-full max-w-md">
          <ShoppingBasket size={40} className="text-white" />
          <h1 className="text-white text-4xl font-bold text-center leading-tight">
            Welcome<br />to our store
          </h1>
          <p className="text-white/80 text-sm text-center">
            Get your groceries in as fast as one hour
          </p>
          <button
            onClick={() => navigate("/phone")}
            aria-label="Get started with nectar"
            className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg mt-4 hover:bg-green-600 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Desktop: left image, right content */}
      <div className="hidden md:flex w-full">
        {/* Left image */}
        <div className="w-1/2 relative bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute top-8 left-8">
            <div className="flex items-center gap-2">
              <ShoppingBasket size={32} className="text-white" />
              <span className="text-white text-2xl font-bold">nectar</span>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-16">
          <div className="max-w-md w-full">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <ShoppingBasket size={40} className="text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Welcome to<br />our store
            </h1>
            <p className="text-gray-500 text-lg mb-10">
              Get your groceries delivered in as fast as one hour. Fresh produce, daily essentials, and more.
            </p>
            <button
              onClick={() => navigate("/phone")}
              aria-label="Get started with nectar"
              className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-xl hover:bg-green-600 transition-colors mb-4"
            >
              Get Started
            </button>
            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-green-500 font-medium hover:text-green-600 transition-colors"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
