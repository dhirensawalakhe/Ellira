import { Ruler, Package, Award, Phone } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Custom Dimensions',
    description: 'Tailored to fit your exact space requirements with precision',
  },
  {
    icon: Package,
    title: 'Safe Delivery',
    description: 'Expertly packed and delivered to your doorstep nationwide',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: '10-year warranty on all wooden components guaranteed',
  },
  {
    icon: Phone,
    title: 'Expert Guidance',
    description: 'Free consultation to help you choose the perfect design',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#25253C]/50 to-[#1A1A2E]/50 border border-[#C9A961]/10 group-hover:border-[#C9A961]/30 transition-all duration-500 transform group-hover:scale-105"></div>

                <div className="relative p-8">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 border-2 border-[#C9A961]/40 group-hover:border-[#C9A961] transition-all duration-700 group-hover:rotate-180" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>

                    {/* Inner Circle */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#C9A961]/30 to-[#C9A961]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-[#C9A961]/20">
                      <Icon className="w-8 h-8 text-[#C9A961] group-hover:text-[#F8F6F1] transition-colors duration-300" />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#C9A961]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-2xl mb-4 group-hover:text-[#C9A961] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-[#C7C7CC] text-base leading-relaxed group-hover:text-[#F8F6F1] transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
