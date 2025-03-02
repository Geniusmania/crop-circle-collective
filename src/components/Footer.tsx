
import { Container } from "./ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-natural-950 text-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">Q</span>
              </span>
              <span className="font-serif text-xl font-medium">Quicklinks Agribusiness</span>
            </div>
            <p className="text-white/70 text-sm">
              Sustainable farming with a commitment to quality. From nature's soil to your table.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">Vegetables</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Fruits</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Grains</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Herbs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter to receive updates and seasonal information.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-primary text-white"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} QuickLinks Agribusiness. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
