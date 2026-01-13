import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'The craftsmanship is absolutely divine. Every detail has been thoughtfully designed. Our home feels blessed.',
    product: 'Heritage Wall Mount',
  },
  {
    name: 'Rajesh Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Exceptional quality and beautiful finish. The teakwood has a richness that photographs cannot capture.',
    product: 'Lotus Wall Shrine',
  },
  {
    name: 'Anita Reddy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    text: 'From consultation to delivery, the entire experience was seamless. Truly premium service.',
    product: 'Divine Compact',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0F0F1E] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A961]"></div>
            <span className="text-[#C9A961] text-xs tracking-[0.3em] uppercase">What Our Customers Say</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A961]"></div>
          </div>
          <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-4xl md:text-5xl mb-4">Testimonials</h2>
          <p className="text-[#8E8E93] max-w-2xl mx-auto text-lg">
            Trusted by thousands of families across India
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#1A1A2E] border border-[#C9A961]/10 p-8 hover:border-[#C9A961]/30 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C9A961]/10 group-hover:text-[#C9A961]/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#F8F6F1] mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <p className="text-xs text-[#C9A961] mb-4 tracking-wider">
                {testimonial.product}
              </p>

              {/* Author */}
              <div className="border-t border-[#C9A961]/10 pt-4">
                <p className="text-[#F8F6F1]">{testimonial.name}</p>
                <p className="text-sm text-[#8E8E93]">{testimonial.location}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#C9A961]/20 group-hover:border-[#C9A961]/40 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-20">
          <p className="text-[#C7C7CC] mb-8 text-xl">Join 10,000+ satisfied customers</p>
          <button className="group relative px-14 py-5 bg-gradient-to-r from-[#C9A961] to-[#D4B574] text-[#0F0F1E] hover:shadow-[0_0_40px_rgba(201,169,97,0.4)] hover:scale-105 transition-all duration-500 overflow-hidden rounded-sm">
            <span className="relative z-10 tracking-wider uppercase text-sm font-semibold">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4B574] to-[#E8C547] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
