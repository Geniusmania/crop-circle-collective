
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/Container";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">Q</span>
              </span>
              <span className="font-serif text-xl font-medium">Quicklinks Agribusiness</span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium underline-animation"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden -m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <Container>
            <div className="flex items-center justify-between py-4">
              <a href="#" className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-lg">Q</span>
                </span>
                <span className="font-serif text-xl font-medium">Quicklinks Agribusiness</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-6 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block font-medium text-lg py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
