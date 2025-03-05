
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
