import { Phone, Mail, Clock, Send, MapPin, Building } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  isModal?: boolean;
}

export function ContactSection({
  isModal = false,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Message sent.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={`${isModal ? "bg-transparent" : "py-24 bg-[#0F0F1E]"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display'] text-[#F8F6F1] text-4xl mb-2 uppercase tracking-widest">
            Connect With Us
          </h2>
          <div className="w-20 h-px bg-[#C9A961] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 border border-[#C9A961]/20">
          <div className="lg:col-span-2 bg-[#1A1A2E] p-8 border-r border-[#C9A961]/20">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Building className="text-[#C9A961] mt-1 flex-shrink-0" />
                <div className="text-[#8E8E93]">
                  <div className="font-semibold text-[#F8F6F1] mb-2">HEAD OFFICE - WORLD OF POOJAGHAR</div>
                  <div className="text-sm">
                    Shop No 14, Ishwer Pratishta 3,<br />
                    Pujya Sri Sri Ravishankar Marg,<br />
                    near KK Wagh CBSE School,<br />
                    DGP Nagar 1, Nashik,<br />
                    Maharashtra 422009
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-[#C9A961] mt-1 flex-shrink-0" />
                <div className="text-[#8E8E93]">
                  <div className="font-semibold text-[#F8F6F1] mb-2">SHOWROOM</div>
                  <div className="text-sm">
                    Shop No. G – 2, Ground Floor,<br />
                    Pathardi Gaon Phata Road,<br />
                    Silicon Business Centre, 101,<br />
                    Indiranagar Pathardi Rd,<br />
                    Pandav Nagari, Pathardi Phata,<br />
                    Nashik, Maharashtra 422009
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-[#C9A961]" />
                <span className="text-[#8E8E93]">
                  +91 7083083355
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-[#C9A961]" />
                <span className="text-[#8E8E93]">
                  info@worldofpoojaghar.com
                </span>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-[#C9A961] mt-1 flex-shrink-0" />
                <div className="text-[#8E8E93]">
                  <div className="font-semibold text-[#F8F6F1] mb-2">Business Hours</div>
                  <div className="text-sm space-y-1">
                    <div>Wednesday - Saturday: 10:30 AM - 9:00 PM</div>
                    <div>Sunday: 10:30 AM - 9:00 PM</div>
                    <div>Monday: 10:30 AM - 12:00 PM</div>
                    <div>Tuesday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-8 bg-[#0F0F1E]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="First Name"
                  className="bg-transparent border-b border-[#C9A961]/30 p-2 text-white outline-none focus:border-[#C9A961]"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="Last Name"
                  className="bg-transparent border-b border-[#C9A961]/30 p-2 text-white outline-none focus:border-[#C9A961]"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <input
                placeholder="Email"
                type="email"
                className="w-full bg-transparent border-b border-[#C9A961]/30 p-2 text-white outline-none focus:border-[#C9A961]"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-[#C9A961]/30 p-2 text-white outline-none focus:border-[#C9A961] resize-none"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#C9A961] text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Send <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-['Playfair_Display'] text-[#F8F6F1] text-3xl mb-2 uppercase tracking-widest">
              Find Us
            </h3>
            <div className="w-20 h-px bg-[#C9A961] mx-auto"></div>
          </div>

          <div className="bg-[#1A1A2E] border border-[#C9A961]/20 rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123456789012!2d73.7890123456789!3d19.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1234567890%3A0xabcdef1234567890!2sWorld%20of%20Poojaghar!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-[#0F0F1E]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <Building className="text-[#C9A961] mt-1 flex-shrink-0" />
                  <div className="text-[#8E8E93]">
                    <div className="font-semibold text-[#F8F6F1] mb-2">Head Office</div>
                    <div className="text-sm">
                      Shop No 14, Ishwer Pratishta 3,<br />
                      Pujya Sri Sri Ravishankar Marg,<br />
                      near KK Wagh CBSE School,<br />
                      DGP Nagar 1, Nashik,<br />
                      Maharashtra 422009
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="text-[#C9A961] mt-1 flex-shrink-0" />
                  <div className="text-[#8E8E93]">
                    <div className="font-semibold text-[#F8F6F1] mb-2">Showroom</div>
                    <div className="text-sm">
                      Shop No. G – 2, Ground Floor,<br />
                      Pathardi Gaon Phata Road,<br />
                      Silicon Business Centre, 101,<br />
                      Indiranagar Pathardi Rd,<br />
                      Pandav Nagari, Pathardi Phata,<br />
                      Nashik, Maharashtra 422009
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
