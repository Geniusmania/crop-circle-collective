import { Container } from "./ui/Container";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      
      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Badge className="mb-4 animate-fade-in">Sustainable Farming</Badge>
          <h1 className="animate-scale-in mb-6">From Nature's Soil to Your Table</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-slow">
            We grow, nurture, and deliver the finest crops with care and dedication to quality. Experience the freshness that comes from sustainable farming practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-slower">
            <a 
              href="#products" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
            >
              Browse Products
            </a>
            <a 
              href="#about" 
              className="bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-full font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-16 animate-blur-in">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Beautiful farm field" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 glass-card rounded-xl p-6 text-center">
            <p className="font-serif italic">
              "Our commitment to quality begins in the soil and ends on your plate."
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
