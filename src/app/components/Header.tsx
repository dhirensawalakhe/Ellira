import {
  Phone,
  ShoppingBag,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { ContactSection } from "./ContactSection";
import Ellira_logo from '../../assets/Ellira logo.png';
interface HeaderProps {
  onCartOpen: () => void;
}

export function Header({ onCartOpen }: HeaderProps) {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0F0F1E]/98 via-[#1A1A2E]/95 to-[#0F0F1E]/98 backdrop-blur-xl border-b border-[#C9A961]/30 shadow-lg shadow-[#C9A961]/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Link to="/" className="flex flex-col group">
                <div className="relative">
                  <img
                    src="/Ellira logo.png"
                    alt="Ellira"
                    className="h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A961]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-12">
              <Link
                to="/shop"
                className="relative text-[#F8F6F1] hover:text-[#C9A961] transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
              >
                Shop All
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/collections"
                className="relative text-[#F8F6F1] hover:text-[#C9A961] transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
              >
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="relative text-[#F8F6F1] hover:text-[#C9A961] transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="relative text-[#F8F6F1] hover:text-[#C9A961] transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center gap-6">
              <button
                onClick={onCartOpen}
                className="relative text-[#F8F6F1] hover:text-[#C9A961]"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A961] text-[#0F0F1E] text-[10px] rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-[#F8F6F1]"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Simple Modal without Framer Motion */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0F0F1E] border border-[#C9A961]/30">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-6 right-6 z-[110] text-[#C9A961]"
            >
              <X className="w-8 h-8" />
            </button>
            <ContactSection isModal={true} />
          </div>
        </div>
      )}
    </>
  );
}
