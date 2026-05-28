import { useNavigate } from "react-router-dom";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-md text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={56} className="text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Your order has been placed successfully.<br />
          We'll deliver it in as fast as one hour.
        </p>

        <div className="bg-green-50 rounded-2xl p-4 mb-8">
          <p className="text-green-700 text-sm font-medium">
            🎉 Thank you for shopping with nectar!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/home/account")}
            className="w-full flex items-center justify-center gap-2 border border-green-500 text-green-500 py-3 rounded-2xl font-semibold hover:bg-green-50 transition-colors"
          >
            <ShoppingBag size={18} /> Track Order
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
          >
            <Home size={18} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
