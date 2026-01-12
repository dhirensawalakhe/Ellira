import { ContactSection } from "../components/ContactSection";

export default function Contact() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#C9A961] mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-[#F8F6F1] text-center mb-12 max-w-2xl mx-auto">
          Get in touch with us for custom orders, inquiries, or to learn more about our craftsmanship.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
