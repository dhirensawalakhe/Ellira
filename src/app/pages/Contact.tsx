import { ContactSection } from "../components/ContactSection";

export default function Contact() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#C9A961] mb-8 text-center">
          Contact Us
        </h1>
        <p className="text-[#F8F6F1] text-center mb-12 max-w-2xl mx-auto">
          Ellira, By World of Poojaghar. Where tradition meets elegance, crafting exquisite wooden temples that bring positivity, harmony, and prosperity into your home.
        </p>
      </div>
      <ContactSection />
    </main>
  );
}
