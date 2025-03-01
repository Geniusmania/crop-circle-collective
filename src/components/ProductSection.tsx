
import { Container } from "./ui/Container";
import { CropCard } from "./CropCard";
import { Badge } from "./ui/Badge";

const products = [
  {
    id: 1,
    title: "Organic Vegetables",
    description: "Fresh, seasonal vegetables grown without synthetic pesticides or fertilizers.",
    image: "https://images.unsplash.com/photo-1557844352-761f2149b6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Vegetables",
  },
  {
    id: 2,
    title: "Heirloom Fruits",
    description: "Traditional fruit varieties preserved for their exceptional taste and unique characteristics.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Fruits",
  },
  {
    id: 3,
    title: "Ancient Grains",
    description: "Nutrient-rich grains that have remained largely unchanged over centuries of cultivation.",
    image: "https://images.unsplash.com/photo-1530364914243-7e28daa9d5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Grains",
  },
  {
    id: 4,
    title: "Culinary Herbs",
    description: "Aromatic herbs that elevate the flavor profile of any dish while providing health benefits.",
    image: "https://images.unsplash.com/photo-1524201865268-285dc0ce0532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Herbs",
  },
];

export function ProductSection() {
  return (
    <section id="products" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Our Products</Badge>
          <h2 className="mb-4">Cultivated with Care</h2>
          <p className="text-muted-foreground">
            We specialize in growing a diverse range of high-quality crops, from everyday staples to rare varieties, using sustainable farming practices.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <CropCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium underline-animation"
          >
            View All Products
          </a>
        </div>
      </Container>
    </section>
  );
}
