import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartSidebar({ isOpen, onClose, onCheckout }: CartSidebarProps) {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-[#1A1A2E] via-[#25253C] to-[#1A1A2E] z-50 shadow-2xl border-l border-[#C9A961]/20 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-[#C9A961]/30 bg-[#0F0F1E]/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#C9A961]/10 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-[#C9A961]" />
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-2xl">
                Shopping Cart
              </h2>
              <p className="text-[#8E8E93] text-sm">{cartCount} items</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-[#25253C] border border-[#C9A961]/30 rounded-lg flex items-center justify-center text-[#8E8E93] hover:text-[#C9A961] hover:border-[#C9A961]/50 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[#8E8E93] mb-4" />
              <p className="text-[#8E8E93] text-lg">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 bg-[#C9A961] text-[#0F0F1E] hover:bg-[#D4B574] transition-colors text-sm uppercase tracking-wide"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-[#0F0F1E] border border-[#C9A961]/10 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-sm mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[#C9A961] text-xs mb-3">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[#C9A961] font-medium">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-[#C9A961]/30 text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-[#F8F6F1] w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-[#C9A961]/30 text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#8E8E93] hover:text-red-500 transition-colors self-start"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#C9A961]/30 p-8 bg-gradient-to-t from-[#0F0F1E] to-[#1A1A2E]">
            {/* Order Summary */}
            <div className="bg-[#25253C] border border-[#C9A961]/20 p-6 mb-6">
              <h3 className="text-[#F8F6F1] font-['Playfair_Display'] text-lg mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[#8E8E93] text-sm">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[#8E8E93] text-sm">
                  <span>Shipping</span>
                  <span className="text-[#C9A961]">Free</span>
                </div>
                <div className="flex justify-between text-[#8E8E93] text-sm">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-['Playfair_Display'] text-[#F8F6F1] text-xl pt-4 border-t border-[#C9A961]/20">
                  <span>Total</span>
                  <span className="text-[#C9A961] font-semibold">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={onCheckout}
                className="w-full px-8 py-5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] hover:scale-105 transition-all duration-300 text-sm uppercase tracking-wider font-bold rounded-sm"
              >
                Proceed to Secure Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full px-8 py-4 border-2 border-[#C9A961]/30 text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F0F1E] hover:border-[#C9A961] transition-all duration-300 text-sm uppercase tracking-wide font-semibold rounded-sm"
              >
                Continue Shopping
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-[#C9A961]/20">
              <div className="flex items-center justify-center gap-4 text-xs text-[#8E8E93]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C9A961]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A961] text-[8px]">✓</span>
                  </div>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C9A961]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A961] text-[8px]">✓</span>
                  </div>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#C9A961]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A961] text-[8px]">✓</span>
                  </div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
