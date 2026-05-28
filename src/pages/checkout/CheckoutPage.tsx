import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, MapPin, ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import Button from "../../components/common/Button";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartStore();
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = async () => {
    if (!address) return;
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    const success = Math.random() > 0.2;
    clearCart();
    navigate(success ? "/home/order-success" : "/home/order-failure");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:flex md:gap-8 md:items-start">
        {/* Left: Form */}
        <div className="flex-1 space-y-4 mb-6 md:mb-0">
          {/* Delivery Address */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-green-500" />
              <h2 className="font-bold text-gray-900">Delivery Address</h2>
            </div>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your full delivery address..."
              rows={3}
              aria-label="Delivery address"
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-500 resize-none transition-colors"
            />
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag size={18} className="text-green-500" />
              <h2 className="font-bold text-gray-900">Order Items ({items.length})</h2>
            </div>
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                    <p className="text-xs text-gray-400">{product.unit} × {quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 flex-shrink-0">
                    ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Place Order */}
          <div className="md:hidden bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Subtotal</span><span>${totalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-3">
              <span>Delivery</span><span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 border-t border-gray-100 pt-3 mb-4">
              <span>Total</span><span>${totalPrice().toFixed(2)}</span>
            </div>
            <Button onClick={handleOrder} disabled={isLoading || !address} fullWidth>
              {isLoading ? "Placing Order..." : "Place Order"}
            </Button>

            {!address && (
              <p className="text-xs text-gray-400 text-center mt-3">
                Please enter a delivery address to continue
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
