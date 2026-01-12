import { Award, Users, Clock, Heart, Star, Shield } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#0F0F1E] text-[#F8F6F1]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0F0F1E] via-[#1A1A2E] to-[#0F0F1E]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1732575877312-c47d5d2d60d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHdvb2QlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
              <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">Our Story</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl mb-6 text-[#F8F6F1]">About Ellira</h1>
            <p className="text-xl text-[#C7C7CC] max-w-3xl mx-auto leading-relaxed">
              Crafting divine harmony through handcrafted mandirs for over 25 years, blending ancient traditions with contemporary design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl mb-8 text-[#F8F6F1]">Our Journey</h2>
              <div className="space-y-6 text-[#C7C7CC] leading-relaxed">
                <p>
                  Founded in 1999, Ellira began as a small workshop in the heart of India, where master craftsmen dedicated their lives to the sacred art of mandir making. What started as a passion project has evolved into India's premier destination for handcrafted pooja accessories.
                </p>
                <p>
                  For over two decades, we have been custodians of ancient woodworking traditions, passed down through generations of skilled artisans. Each piece that leaves our workshop carries the essence of devotion, precision, and spiritual significance.
                </p>
                <p>
                  Today, Ellira stands as a bridge between India's rich cultural heritage and modern aesthetic sensibilities, creating sacred spaces that resonate with contemporary lifestyles while honoring timeless traditions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1604307612848-fcb357b1360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwb29qYSUyMHJvb218ZW58MXx8fHwxNzY2MjE5MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ellira Workshop"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C9A961] text-[#0F0F1E] p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#0F0F1E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Our Mission & Vision</h2>
            <p className="text-[#C7C7CC] max-w-2xl mx-auto">
              Guided by principles of excellence, spirituality, and sustainable craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#25253C] p-8 rounded-lg border border-[#C9A961]/20">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#F8F6F1]">Our Mission</h3>
              <p className="text-[#C7C7CC] leading-relaxed">
                To preserve and elevate India's sacred art forms by creating mandirs that serve as spiritual sanctuaries in modern homes. We are committed to maintaining the highest standards of craftsmanship while making divine beauty accessible to every household.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#25253C] p-8 rounded-lg border border-[#C9A961]/20">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#F8F6F1]">Our Vision</h3>
              <p className="text-[#C7C7CC] leading-relaxed">
                To be the world's most trusted name in handcrafted mandirs, inspiring spiritual connections across generations. We envision a world where every home has a sacred space that reflects both cultural heritage and personal devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Our Craftsmanship</h2>
            <p className="text-[#C7C7CC] max-w-3xl mx-auto">
              Every piece is a testament to generations of mastery, where traditional techniques meet contemporary precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Master Artisans</h3>
              <p className="text-[#C7C7CC]">
                Our craftsmen are masters of traditional woodworking techniques, each with decades of experience in sacred architecture and intricate carvings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Quality Assurance</h3>
              <p className="text-[#C7C7CC]">
                Every mandir undergoes rigorous quality checks, ensuring structural integrity, finish perfection, and spiritual authenticity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Sustainable Practices</h3>
              <p className="text-[#C7C7CC]">
                We source wood responsibly and employ eco-friendly finishing techniques, ensuring our craft respects both tradition and the environment.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-['Playfair_Display'] text-2xl mb-4 text-[#F8F6F1]">The Ellira Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A961] text-[#0F0F1E] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-[#F8F6F1] font-medium mb-1">Design Consultation</h4>
                      <p className="text-[#C7C7CC] text-sm">Understanding your spiritual and aesthetic requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A961] text-[#0F0F1E] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-[#F8F6F1] font-medium mb-1">Material Selection</h4>
                      <p className="text-[#C7C7CC] text-sm">Choosing the finest woods and sustainable materials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A961] text-[#0F0F1E] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-[#F8F6F1] font-medium mb-1">Handcrafted Creation</h4>
                      <p className="text-[#C7C7CC] text-sm">Master artisans bring your vision to life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A961] text-[#0F0F1E] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="text-[#F8F6F1] font-medium mb-1">Quality Inspection</h4>
                      <p className="text-[#C7C7CC] text-sm">Rigorous testing before delivery to your home</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1626977990625-18e01e4cfe7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFrJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzY2MjE5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Craftsmanship Process"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0F0F1E]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A961] mb-2">25+</div>
              <div className="text-[#C7C7CC]">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A961] mb-2">10K+</div>
              <div className="text-[#C7C7CC]">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A961] mb-2">500+</div>
              <div className="text-[#C7C7CC]">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C9A961] mb-2">50+</div>
              <div className="text-[#C7C7CC]">Master Artisans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1A1A2E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl mb-6 text-[#F8F6F1]">Our Values</h2>
            <p className="text-[#C7C7CC] max-w-2xl mx-auto">
              The principles that guide every decision and every creation at Ellira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Spiritual Integrity</h3>
              <p className="text-[#C7C7CC]">
                Every piece we create is imbued with reverence and respect for sacred traditions, ensuring your mandir becomes a true spiritual sanctuary.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Community Focus</h3>
              <p className="text-[#C7C7CC]">
                We believe in building lasting relationships with our customers and supporting the communities of artisans who bring our visions to life.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#25253C] to-[#1A1A2E] p-8 rounded-lg border border-[#C9A961]/20 text-center">
              <div className="w-16 h-16 bg-[#C9A961]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl mb-4 text-[#F8F6F1]">Excellence</h3>
              <p className="text-[#C7C7CC]">
                We never compromise on quality, from the selection of premium materials to the final finishing touches that make each piece extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
