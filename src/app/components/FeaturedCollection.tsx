import { Heart, Eye, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Lotus Wall Shrine',
    price: '₹24,999',
    originalPrice: '₹29,999',
    material: 'Premium Sheesham Wood',
    dimensions: '18" x 12" x 6"',
    image: 'https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'BESTSELLER',
  },
  {
    name: 'Divine Compact',
    price: '₹19,999',
    material: 'Mango Wood & Brass',
    dimensions: '16" x 10" x 5"',
    image: 'https://images.unsplash.com/photo-1744893679733-1cf3c7837982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBtYW5kaXJ8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'NEW ARRIVAL',
  },
  {
    name: 'Heritage Wall Mount',
    price: '₹32,999',
    originalPrice: '₹39,999',
    material: 'Solid Teak Wood',
    dimensions: '20" x 14" x 7"',
    image: 'https://images.unsplash.com/photo-1761415454040-518ca1d2e2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcmF5ZXIlMjBhbHRhcnxlbnwxfHx8fDE3NjYyMTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Serenity Wall Altar',
    price: '₹27,499',
    material: 'Walnut Wood',
    dimensions: '18" x 12" x 6"',
    image: 'https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'LIMITED EDITION',
  },
];

export function FeaturedCollection() {
  return (
    <section className="py-24 bg-[#0F0F1E] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.1) 35px, rgba(201, 169, 97, 0.1) 36px)',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <div className="w-8 h-px md:w-12 bg-gradient-to-r from-transparent to-[#C9A961]"></div>
            <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Curated Selection</span>
            <div className="w-8 h-px md:w-12 bg-gradient-to-l from-transparent to-[#C9A961]"></div>
          </div>
          <h2 className="font-['Playfair_Display'] text-[#F8F6F1] mb-4 text-3xl md:text-4xl lg:text-5xl">Wall-Mounted Collection</h2>
          <p className="text-[#8E8E93] max-w-2xl mx-auto text-base md:text-lg px-4 md:px-0">
            Space-saving elegance meets divine craftsmanship. Perfect for modern apartments and compact prayer spaces.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden bg-[#25253C] mb-5 aspect-[3/4] border border-[#C9A961]/10 hover:border-[#C9A961]/30 transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-5 left-5 bg-[#C9A961] text-[#0F0F1E] px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase">
                    {product.tag}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E] via-[#0F0F1E]/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-12 h-12 bg-[#25253C] border border-[#C9A961] rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all text-[#C9A961]">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-[#C9A961] rounded-sm flex items-center justify-center hover:bg-[#D4B574] transition-all text-[#0F0F1E]">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-[#25253C] border border-[#C9A961] rounded-sm flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0F0F1E] transition-all text-[#C9A961]">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A961]/30"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A961]/30"></div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-xl mb-2">{product.name}</h3>
                <p className="text-sm text-[#8E8E93] mb-1">{product.material}</p>
                <p className="text-xs text-[#C9A961]/60 mb-4 font-['Inter']">{product.dimensions}</p>
                <div className="flex items-baseline gap-3">
                  <span className="font-['Inter'] text-[#C9A961] text-xl">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#8E8E93] line-through font-['Inter']">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="group relative px-14 py-5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] hover:shadow-[0_0_40px_rgba(201,169,97,0.4)] hover:scale-105 transition-all duration-500 overflow-hidden rounded-sm">
            <span className="relative z-10 tracking-[0.2em] uppercase text-sm font-semibold">Explore Complete Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4B574] to-[#E8C547] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
