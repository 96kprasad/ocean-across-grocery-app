import { useNavigate } from "react-router-dom";
import { XCircle, RefreshCw, Home } from "lucide-react";

export default function OrderFailurePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-md text-center">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle size={56} className="text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Failed</h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Something went wrong while placing your order.<br />
          Please check your details and try again.
        </p>

        <div className="bg-red-50 rounded-2xl p-4 mb-8">
          <p className="text-red-600 text-sm font-medium">
            Your cart items are still saved. Try again!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/home/cart")}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
          >
            <RefreshCw size={18} /> Try Again
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-500 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Home size={18} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
