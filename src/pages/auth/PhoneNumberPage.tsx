import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ArrowRight, ShoppingBasket, Phone } from "lucide-react";
import { useAuthStore } from "../../store/authStore";

export default function PhoneNumberPage() {
  const navigate = useNavigate();
  const setPhone = useAuthStore((s) => s.setPhone);
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    if (number.length >= 6) {
      setPhone("+880" + number);
      navigate("/otp");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Desktop Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-green-500 flex-col items-center justify-center p-12">
        <ShoppingBasket size={80} className="text-white mb-6" />
        <h1 className="text-white text-5xl font-bold tracking-wide mb-3">nectar</h1>
        <p className="text-green-100 text-lg text-center">
          Verify your number to get started
        </p>
      </div>

      {/* Right / Mobile Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 md:px-16 bg-white">
        <div className="max-w-md w-full mx-auto">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="text-gray-500 mb-8 w-fit hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center md:hidden">
              <Phone size={24} className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Enter your mobile number</h1>
          </div>

          <label className="text-xs text-gray-500 mb-1 block">Mobile Number</label>
          <div className="flex items-center border-b border-gray-300 pb-2 mb-12">
            <span className="mr-2 text-lg">🇧🇩</span>
            <span className="text-gray-700 mr-2 font-medium">+880</span>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              aria-label="Mobile number"
              className="flex-1 outline-none text-gray-900 text-sm"
              placeholder="000 000 0000"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              aria-label="Continue"
              className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
