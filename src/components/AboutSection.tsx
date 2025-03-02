import { Container } from "./ui/Container";
import { Badge } from "./ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 relative">
          <div className="order-2 md:order-1">
            <div className="sticky top-32">
              <Badge className="mb-4">About Us</Badge>
              <h2 className="mb-6">Growing with Nature, For Nature</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for sustainable agriculture, our company has been dedicated to cultivating the finest crops while preserving the environment for future generations.
                </p>
                <p>
                  We believe that quality produce begins with healthy soil. Our farming practices focus on biodiversity, water conservation, and minimal intervention to create a balanced ecosystem that produces nutritious and flavorful crops.
                </p>
                <p>
                  From planting and nurturing to harvesting and delivering, we maintain the highest standards at every step. Our team combines traditional knowledge with modern innovation to bring you the best nature has to offer.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="glass-card rounded-lg p-4 text-center">
                  <p className="text-3xl font-serif font-medium text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <p className="text-3xl font-serif font-medium text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Organic Methods</p>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <p className="text-3xl font-serif font-medium text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Crop Varieties</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Farmer inspecting crops" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Close-up of plants" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/523650017/photo/process-of-rice-harvesting.jpg?s=612x612&w=0&k=20&c=MX-mAMMYG2PQYkmJJAveGNOSSsFuWm0TtVNKGfyFC5Q=" 
                    alt="Harvesting process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
