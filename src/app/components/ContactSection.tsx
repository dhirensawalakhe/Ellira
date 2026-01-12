import { Phone, Mail, Clock, Send, MapPin } from "lucide-react";
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
              <div className="flex gap-4 items-center">
                <Phone className="text-[#C9A961]" />
                <span className="text-[#8E8E93]">
                  +91 70830 83355
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="text-[#C9A961]" />
                <span className="text-[#8E8E93]">
                  hello@ellira.world
                </span>
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
      </div>
    </div>
  );
}