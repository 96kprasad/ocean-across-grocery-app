import { useNavigate } from "react-router-dom";
import { ShoppingCart, Minus, Plus, X, Trash2 } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 px-4">
        <ShoppingCart size={64} className="mb-4 text-gray-300" />
        <p className="text-xl font-semibold text-gray-700">Your cart is empty</p>
        <p className="text-sm mb-6">Add items to get started</p>
        <button
          onClick={() => navigate("/home")}
          className="bg-green-500 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-green-600 transition-colors"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white md:flex-row md:items-start md:gap-8 md:px-8 md:pt-6 max-w-7xl md:mx-auto w-full">
      {/* Items list */}
      <div className="flex-1 px-4 pt-4 md:px-0">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">My Cart</h1>
          <button
            onClick={clearCart}
            aria-label="Clear cart"
            className="flex items-center gap-1 text-red-400 text-sm hover:text-red-500 transition-colors"
          >
            <Trash2 size={16} /> Clear all
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex items-center gap-4 py-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{product.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{product.unit}, Price</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="text-gray-400 ml-2 flex-shrink-0 hover:text-red-400 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label="Decrease quantity"
                      className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:border-green-500 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="font-bold text-gray-900">${(product.price * quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout summary */}
      <div className="sticky bottom-16 md:bottom-0 md:w-80 md:sticky md:top-20 md:self-start px-4 pb-4 md:px-0 bg-white md:bg-transparent">
        <div className="hidden md:block bg-white rounded-2xl p-4 shadow-sm mb-4">
          <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Subtotal</span><span>${totalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>Delivery</span><span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 border-t border-gray-100 pt-3 mb-4">
            <span>Total</span><span>${totalPrice().toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/home/checkout")}
          className="w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-3"
        >
          <span>Go to Checkout</span>
          <span className="bg-green-600 px-3 py-1 rounded-xl text-sm">${totalPrice().toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}
