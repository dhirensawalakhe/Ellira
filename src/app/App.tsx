import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "./contexts/CartContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { CheckoutModal } from "./components/CheckoutModal";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#0F0F1E] font-['Inter']">
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1A1A2E",
                color: "#F8F6F1",
                border: "1px solid rgba(201, 169, 97, 0.2)",
              },
            }}
          />
          <Header onCartOpen={() => setIsCartOpen(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </div>
      </Router>
    </CartProvider>
  );
}
