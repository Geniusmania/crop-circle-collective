
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
