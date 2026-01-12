import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0F0F1E] text-[#F8F6F1] pt-20 pb-8 border-t border-[#C9A961]/20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <h2 className="font-['Playfair_Display'] text-3xl tracking-wider text-[#C9A961] mb-1">ELLIRA</h2>
              <span className="text-[9px] tracking-[0.3em] text-[#C9A961]/60 uppercase">Handcrafted Mandirs</span>
            </div>
            <p className="text-[#8E8E93] text-sm mb-6 leading-relaxed">
              Handcrafted wooden mandirs and pooja ghars, blending tradition with contemporary design for over 25 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] hover:border-[#C9A961] transition-all text-[#C9A961]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] hover:border-[#C9A961] transition-all text-[#C9A961]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#C9A961]/30 rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] hover:border-[#C9A961] transition-all text-[#C9A961]">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#F8F6F1] text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">About Us</Link></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Our Craftsmanship</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Wood Types</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#F8F6F1] text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[#8E8E93] hover:text-[#C9A961] transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#F8F6F1] text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#8E8E93] group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A961]" />
                <a href="tel:+917083083355" className="group-hover:text-[#C9A961] transition-colors">+91 70830 83355</a>
              </li>
              <li className="flex items-start gap-3 text-[#8E8E93] group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A961]" />
                <a href="mailto:hello@ellira.world" className="group-hover:text-[#C9A961] transition-colors">hello@ellira.world</a>
              </li>
              <li className="flex items-start gap-3 text-[#8E8E93]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A961]" />
                <span>www.ellira.world<br />Crafting divine harmony</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-sm text-[#C9A961] mb-4 uppercase tracking-wider font-medium">Subscribe to Newsletter</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3 bg-[#25253C] border border-[#C9A961]/30 text-[#F8F6F1] text-sm focus:outline-none focus:border-[#C9A961] focus:shadow-[0_0_10px_rgba(201,169,97,0.2)] transition-all duration-300 rounded-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] hover:shadow-[0_0_20px_rgba(201,169,97,0.3)] hover:scale-105 transition-all duration-300 text-sm font-medium rounded-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C9A961]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8E8E93]">
            <p>© 2024 Ellira by World Of Poojaghar. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#C9A961] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C9A961] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#C9A961] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
