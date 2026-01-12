import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F1E] pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1657938169455-19011c99cf46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrd29vZCUyMHRlbXBsZSUyMGhvbWV8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Handcrafted Teakwood Mandir"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1E]/95 via-[#0F0F1E]/70 to-[#0F0F1E]/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F1E]/90 via-transparent to-[#0F0F1E]/60"></div>
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 w-px h-64 bg-gradient-to-b from-[#C9A961] to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-px h-64 bg-gradient-to-b from-[#C9A961] to-transparent opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
            <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Handcrafted Excellence Since 1995</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
          </div>

          <h1 className="font-['Playfair_Display'] text-[#F8F6F1] mb-6 leading-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl mb-2">Divine Spaces,</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-[#C9A961]">Crafted with Devotion</span>
          </h1>

          <p className="text-lg md:text-xl text-[#C7C7CC] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the perfect blend of traditional craftsmanship and contemporary design. 
            Each mandir is meticulously handcrafted from premium teakwood and walnut by master artisans.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,97,0.4)] hover:scale-105 rounded-sm">
              <span className="relative z-10 tracking-wider uppercase text-sm font-semibold">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4B574] to-[#E8C547] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button className="px-12 py-5 border-2 border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all duration-500 tracking-wider uppercase text-sm font-semibold hover:shadow-[0_0_30px_rgba(201,169,97,0.3)] hover:scale-105 rounded-sm">
              Custom Orders
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-b border-[#C9A961]/20 py-8">
            <div>
              <div className="text-3xl font-['Playfair_Display'] text-[#C9A961] mb-1">500+</div>
              <div className="text-xs text-[#8E8E93] uppercase tracking-wider">Designs</div>
            </div>
            <div>
              <div className="text-3xl font-['Playfair_Display'] text-[#C9A961] mb-1">10K+</div>
              <div className="text-xs text-[#8E8E93] uppercase tracking-wider">Happy Homes</div>
            </div>
            <div>
              <div className="text-3xl font-['Playfair_Display'] text-[#C9A961] mb-1">100%</div>
              <div className="text-xs text-[#8E8E93] uppercase tracking-wider">Handcrafted</div>
            </div>
            <div>
              <div className="text-3xl font-['Playfair_Display'] text-[#C9A961] mb-1">10 Yr</div>
              <div className="text-xs text-[#8E8E93] uppercase tracking-wider">Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-[10px] text-[#C9A961] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#C9A961]" />
      </div>
    </section>
  );
}