import { HeroSection } from "../components/HeroSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { ShopBySize } from "../components/ShopBySize";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ShopBySize />
      <FeaturedCollection />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  );
}
