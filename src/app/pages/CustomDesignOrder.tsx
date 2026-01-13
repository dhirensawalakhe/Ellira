import { Palette, Ruler, Clock, Star } from 'lucide-react';

export default function CustomDesignOrder() {
  return (
    <main className="min-h-screen bg-[#0F0F1E] text-[#F8F6F1]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0F0F1E] via-[#1A1A2E] to-[#0F0F1E]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkZXNpZ24lMjB3b29kfGVufDF8fHx8MTc2NjIxOTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Custom Creation</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl mb-6 text-[#F8F6F1]">Custom Design Order</h1>
            <p className="text-xl text-[#C7C7CC] max-w-3xl mx-auto leading-relaxed">
              Bring your vision to life with our bespoke mandir designs. Every detail crafted to reflect your unique spiritual journey and aesthetic preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Our Custom Design Process</h2>
            <p className="text-[#C7C7CC] max-w-3xl mx-auto">
              From concept to creation, we guide you through every step of bringing your sacred space vision to reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Consultation</h3>
              <p className="text-[#C7C7CC]">
                Share your vision, space constraints, and spiritual requirements with our design experts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ruler className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Design & Planning</h3>
              <p className="text-[#C7C7CC]">
                Our artisans create detailed blueprints and 3D renderings tailored to your specifications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Crafting</h3>
              <p className="text-[#C7C7CC]">
                Master craftsmen bring your design to life using traditional techniques and premium materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Delivery</h3>
              <p className="text-[#C7C7CC]">
                Your custom mandir is carefully packaged and delivered, ready for installation and blessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0F0F1E]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Ready to Create Your Sacred Space?</h2>
            <p className="text-[#C7C7CC] max-w-2xl mx-auto mb-8">
              Contact our design team today to start your custom mandir journey. Every masterpiece begins with a conversation.
            </p>
            <button className="bg-[#C9A961] hover:bg-[#D4B574] text-[#0F0F1E] px-8 py-4 rounded-lg font-medium transition-colors duration-300">
              Start Your Custom Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
