import { Home, Flower2, Lamp, Sofa } from 'lucide-react';

export default function Accessories() {
  return (
    <main className="min-h-screen bg-[#0F0F1E] text-[#F8F6F1]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0F0F1E] via-[#1A1A2E] to-[#0F0F1E]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGhvbWUlMjBkZWNvcnxlbnwxfHx8fDE3NjYyMTkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Home Decor</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl mb-6 text-[#F8F6F1]">Home Decor Accessories</h1>
            <p className="text-xl text-[#C7C7CC] max-w-3xl mx-auto leading-relaxed">
              Elevate your living spaces with our curated collection of handcrafted home decor accessories. Each piece blends traditional craftsmanship with modern aesthetics to create harmonious environments.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Our Home Decor Collection</h2>
            <p className="text-[#C7C7CC] max-w-3xl mx-auto">
              Discover accessories that transform your home into a sanctuary of beauty and tranquility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center hover:border-[#C9A961]/40 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower2 className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Decorative Vases</h3>
              <p className="text-[#C7C7CC]">
                Handcrafted ceramic and brass vases that add elegance and character to any room.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center hover:border-[#C9A961]/40 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lamp className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Table Lamps</h3>
              <p className="text-[#C7C7CC]">
                Artisan-crafted lamps with intricate designs that provide both function and beauty.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center hover:border-[#C9A961]/40 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Wall Art</h3>
              <p className="text-[#C7C7CC]">
                Traditional motifs and contemporary designs brought to life through skilled craftsmanship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center hover:border-[#C9A961]/40 transition-colors duration-300">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sofa className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Cushions & Throws</h3>
              <p className="text-[#C7C7CC]">
                Luxurious textiles with intricate embroidery and traditional patterns for ultimate comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0F0F1E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Why Choose Our Home Decor?</h2>
            <p className="text-[#C7C7CC] max-w-2xl mx-auto">
              Each piece is more than decoration—it's a testament to craftsmanship and cultural heritage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower2 className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Handcrafted Quality</h3>
              <p className="text-[#C7C7CC]">
                Every accessory is meticulously crafted by skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Cultural Heritage</h3>
              <p className="text-[#C7C7CC]">
                Our designs draw inspiration from India's rich artistic traditions, bringing ancient motifs into modern homes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lamp className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Sustainable Materials</h3>
              <p className="text-[#C7C7CC]">
                We use eco-friendly materials and support fair trade practices to ensure our craft respects both people and planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Transform Your Home Today</h2>
            <p className="text-[#C7C7CC] max-w-2xl mx-auto mb-8">
              Browse our collection of home decor accessories and discover pieces that speak to your soul.
            </p>
            <button className="bg-[#C9A961] hover:bg-[#D4B574] text-[#0F0F1E] px-8 py-4 rounded-lg font-medium transition-colors duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
