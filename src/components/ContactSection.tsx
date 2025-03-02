
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./ui/Container";
import { Badge } from "./ui/Badge";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4">Get In Touch</Badge>
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions about our products or services? We'd love to hear from you. Reach out to us through any of the methods below.
          </p>
        </div>
        
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-10 bg-natural-50">
              <h3 className="text-xl md:text-2xl mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-natural-800 text-white p-6 md:p-10">
              <h3 className="text-xl md:text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <address className="not-italic text-white/70 mt-1">
                      Enchi<br />
                      Western North<br />
                      Ghana
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white/70 mt-1">
                      <a href="mailto:info@harvestfarms.com" className="hover:text-white transition-colors">
                        info@quicklinksagribusiness.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-white/70 mt-1">
                      <a href="tel:+15551234567" className="hover:text-white transition-colors">
                        +233 596-605771
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
