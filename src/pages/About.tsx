
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
