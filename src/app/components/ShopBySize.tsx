import { ArrowRight } from 'lucide-react';

const sizes = [
  {
    title: 'Compact',
    subtitle: 'Wall Mounted',
    dimensions: 'Up to 18"',
    description: 'Perfect for apartments and small spaces',
    image: 'https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Medium',
    subtitle: 'Floor Standing',
    dimensions: '24" to 36"',
    description: 'Ideal for dedicated prayer rooms',
    image: 'https://images.unsplash.com/photo-1744893679733-1cf3c7837982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBtYW5kaXJ8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Large',
    subtitle: 'Temple Style',
    dimensions: '42" to 60"',
    description: 'Grand designs for spacious homes',
    image: 'https://images.unsplash.com/photo-1761415454040-518ca1d2e2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcmF5ZXIlMjBhbHRhcnxlbnwxfHx8fDE3NjYyMTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Premium',
    subtitle: 'Custom Build',
    dimensions: 'Bespoke Sizes',
    description: 'Fully customizable to your vision',
    image: 'https://images.unsplash.com/photo-1732575877312-c47d5d2d60d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ShopBySize() {
  return (
    <section className="py-24 bg-[#1A1A2E] relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-[#C9A961]/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-[#C9A961]/30 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
            <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Find Your Perfect Fit</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
          </div>
          <h2 className="font-['Playfair_Display'] text-[#F8F6F1] mb-4 text-4xl md:text-5xl">Shop by Size</h2>
          <p className="text-[#8E8E93] max-w-2xl mx-auto text-lg">
            Choose from our carefully curated size categories, each designed to fit seamlessly into your sacred space
          </p>
        </div>

        {/* Size Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sizes.map((size, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-[#25253C] to-[#1A1A2E] border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-[#C9A961]/10"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={size.image}
                  alt={size.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E]/90 via-[#0F0F1E]/40 to-transparent"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#C9A961]/0 group-hover:bg-[#C9A961]/15 transition-all duration-500"></div>

                {/* Premium Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C9A961]/20 via-transparent to-transparent"></div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-[#C9A961] mb-3 tracking-[0.2em] uppercase font-medium">{size.subtitle}</p>
                <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-2xl mb-3 group-hover:text-[#C9A961] transition-colors duration-300">{size.title}</h3>
                <p className="font-['Inter'] text-[#D4B574] mb-3 font-medium">{size.dimensions}</p>
                <p className="text-base text-[#C7C7CC] mb-6 leading-relaxed group-hover:text-[#F8F6F1] transition-colors duration-300">{size.description}</p>

                <div className="flex items-center gap-3 text-[#C9A961] group-hover:gap-5 transition-all duration-300">
                  <span className="text-sm uppercase tracking-wider font-medium">Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#C9A961]/30 group-hover:border-[#C9A961]/70 transition-colors"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A961]/20 group-hover:border-[#C9A961]/50 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
