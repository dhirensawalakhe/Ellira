import { CategoriesSection } from "../components/CategoriesSection";
import { ProductsSection } from "../components/ProductsSection";

export default function Shop() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#C9A961] mb-8 text-center">
          Shop All Products
        </h1>
        <p className="text-[#F8F6F1] text-center mb-12 max-w-2xl mx-auto">
          Discover our complete collection of handcrafted mandirs and pooja ghars,
          each piece crafted with devotion and precision.
        </p>
      </div>
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
