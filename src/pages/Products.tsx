
import { Header } from "@/components/Header";
import { ProductSection } from "@/components/ProductSection";
import { Footer } from "@/components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
