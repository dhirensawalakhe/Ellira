import { ArrowRight, Home, Building2, Sparkles, Crown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Wall Mount Mandirs',
    description: 'Space-saving sacred spaces for modern homes',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29qYSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTczNDcyMTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Home,
    link: '/shop?category=wall-mount',
    count: '25+ Designs'
  },
  {
    name: 'Traditional Mandirs',
    description: 'Classic temple designs with intricate carvings',
    image: 'https://images.unsplash.com/photo-1744893679733-1cf3c7837982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b29kZW4lMjBtYW5kaXJ8ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    link: '/shop?category=traditional',
    count: '40+ Designs'
  },
  {
    name: 'Designer Mandirs',
    description: 'Contemporary art meets spiritual tradition',
    image: 'https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Sparkles,
    link: '/shop?category=designer',
    count: '30+ Designs'
  },
  {
    name: 'Luxury Mandirs',
    description: 'Premium craftsmanship for grand spaces',
    image: 'https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Crown,
    link: '/shop?category=luxury',
    count: '15+ Designs'
  },
  {
    name: 'Compact Mandirs',
    description: 'Perfect for apartments and small spaces',
    image: 'https://images.unsplash.com/photo-1761415454040-518ca1d2e2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcmF5ZXIlMjBhbHRhcnxlbnwxfHx8fDE3NjYyMTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Heart,
    link: '/shop?category=compact',
    count: '20+ Designs'
  },
];

export function CategoriesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1A1A2E] via-[#0F0F1E] to-[#1A1A2E] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961] animate-fade-in-left"></div>
            <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase font-medium hover-scale animate-fade-in-up">Premium Collections</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961] animate-fade-in-right"></div>
          </div>
          <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-5xl md:text-6xl mb-6 leading-tight animate-fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
            Our <span className="text-gradient magnetic">Categories</span>
          </h2>
          <p className="text-[#C7C7CC] text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up hover-scale" style={{ animationDelay: '0.4s' }}>
            Discover our meticulously crafted collections, each representing the pinnacle of traditional craftsmanship and contemporary elegance
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={category.link} className="group">
                <div className="relative bg-gradient-to-br from-[#25253C] to-[#1A1A2E] rounded-2xl overflow-hidden border border-[#C9A961]/20 group-hover:border-[#C9A961]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,97,0.1)]">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1E]/90 via-[#0F0F1E]/50 to-transparent"></div>

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#C9A961]/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#C9A961]/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#C9A961]" />
                    </div>

                    {/* Design Count */}
                    <div className="absolute top-4 left-4 bg-[#0F0F1E]/80 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-[#C9A961] text-xs font-medium">{category.count}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-lg mb-2 group-hover:text-[#C9A961] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[#C7C7CC] text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Explore Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#C9A961] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Explore →
                      </span>
                      <div className="w-8 h-8 bg-[#C9A961]/10 rounded-full flex items-center justify-center group-hover:bg-[#C9A961]/20 transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-transparent to-transparent border border-[#C9A961]/50 text-[#C9A961] hover:border-[#C9A961] hover:bg-[#C9A961]/10 transition-all duration-500 text-sm uppercase tracking-wider font-medium hover:shadow-[0_0_30px_rgba(201,169,97,0.2)]">
            <span>Explore All Collections</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
