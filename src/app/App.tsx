import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "./contexts/CartContext";
import { CompareProvider } from "./contexts/CompareContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { Layout } from "./components/Layout";
import { CartSidebar } from "./components/CartSidebar";
import { CheckoutModal } from "./components/CheckoutModal";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Accessories from "./pages/Accessories";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomDesignOrder from "./pages/CustomDesignOrder";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCartOpen = () => setIsCartOpen(true);

  return (
    <CompareProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
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
            <Layout onCartOpen={handleCartOpen}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/custom-design-order" element={<CustomDesignOrder />} />
              </Routes>
            </Layout>
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </CompareProvider>
  );
}
