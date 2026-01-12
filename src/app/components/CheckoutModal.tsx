import { X, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('payment');
    } else if (step === 'payment') {
      // Simulate payment processing
      setTimeout(() => {
        setStep('success');
        setTimeout(() => {
          clearCart();
          onClose();
          setStep('details');
        }, 3000);
      }, 1500);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep('details'), 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div
          className="bg-[#1A1A2E] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#1A1A2E] border-b border-[#C9A961]/20 p-6 flex items-center justify-between z-10">
            <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-3xl">
              {step === 'details' && 'Checkout'}
              {step === 'payment' && 'Payment'}
              {step === 'success' && 'Order Confirmed'}
            </h2>
            <button
              onClick={handleClose}
              className="text-[#8E8E93] hover:text-[#C9A961] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === 'success' ? (
            <div className="p-12 text-center">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-3xl mb-4">
                Thank You for Your Order!
              </h3>
              <p className="text-[#8E8E93] text-lg mb-6">
                Your order has been successfully placed. We'll send you a confirmation email shortly.
              </p>
              <div className="bg-[#0F0F1E] border border-[#C9A961]/20 p-6 max-w-md mx-auto">
                <p className="text-[#8E8E93] text-sm mb-2">Order Total</p>
                <p className="font-['Playfair_Display'] text-[#C9A961] text-4xl">
                  ₹{cartTotal.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Form Section */}
              <div className="lg:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 'details' && (
                    <>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-xl mb-4 flex items-center gap-2">
                          <Truck className="w-5 h-5 text-[#C9A961]" />
                          Shipping Information
                        </h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[#8E8E93] text-sm mb-2">First Name *</label>
                              <input
                                type="text"
                                required
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[#8E8E93] text-sm mb-2">Last Name *</label>
                              <input
                                type="text"
                                required
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[#8E8E93] text-sm mb-2">Email *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[#8E8E93] text-sm mb-2">Phone *</label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-[#8E8E93] text-sm mb-2">Address *</label>
                            <input
                              type="text"
                              required
                              value={formData.address}
                              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                              className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label className="block text-[#8E8E93] text-sm mb-2">City *</label>
                              <input
                                type="text"
                                required
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[#8E8E93] text-sm mb-2">State *</label>
                              <input
                                type="text"
                                required
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[#8E8E93] text-sm mb-2">Pincode *</label>
                              <input
                                type="text"
                                required
                                value={formData.pincode}
                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                className="w-full px-4 py-3 bg-[#0F0F1E] border border-[#C9A961]/20 text-[#F8F6F1] focus:outline-none focus:border-[#C9A961] transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {step === 'payment' && (
                    <>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-xl mb-4 flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-[#C9A961]" />
                          Payment Method
                        </h3>
                        <div className="space-y-4">
                          <label className="flex items-center gap-3 p-4 bg-[#0F0F1E] border border-[#C9A961]/20 cursor-pointer hover:border-[#C9A961]/50 transition-colors">
                            <input
                              type="radio"
                              name="payment"
                              value="card"
                              checked={formData.paymentMethod === 'card'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="w-4 h-4 text-[#C9A961]"
                            />
                            <span className="text-[#F8F6F1]">Credit / Debit Card</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 bg-[#0F0F1E] border border-[#C9A961]/20 cursor-pointer hover:border-[#C9A961]/50 transition-colors">
                            <input
                              type="radio"
                              name="payment"
                              value="upi"
                              checked={formData.paymentMethod === 'upi'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="w-4 h-4 text-[#C9A961]"
                            />
                            <span className="text-[#F8F6F1]">UPI Payment</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 bg-[#0F0F1E] border border-[#C9A961]/20 cursor-pointer hover:border-[#C9A961]/50 transition-colors">
                            <input
                              type="radio"
                              name="payment"
                              value="cod"
                              checked={formData.paymentMethod === 'cod'}
                              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                              className="w-4 h-4 text-[#C9A961]"
                            />
                            <span className="text-[#F8F6F1]">Cash on Delivery</span>
                          </label>
                        </div>
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#C9A961] text-[#0F0F1E] hover:bg-[#D4B574] transition-all duration-300 text-sm uppercase tracking-wide font-medium"
                  >
                    {step === 'details' ? 'Continue to Payment' : 'Complete Order'}
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2 bg-[#0F0F1E] p-8 border-l border-[#C9A961]/20">
                <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-xl mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                      <div className="flex-1">
                        <p className="text-[#F8F6F1] text-sm line-clamp-2">{item.name}</p>
                        <p className="text-[#8E8E93] text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-[#C9A961]">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-4 border-t border-[#C9A961]/20">
                  <div className="flex justify-between text-[#8E8E93]">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#8E8E93]">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between font-['Playfair_Display'] text-[#F8F6F1] text-xl pt-3 border-t border-[#C9A961]/20">
                    <span>Total</span>
                    <span className="text-[#C9A961]">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
