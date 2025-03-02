
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./ui/Container";
import { Badge } from "./ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Validation Error",
          description: "Please fill out all fields",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Save message to the database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          { name: formData.name, email: formData.email, message: formData.message }
        ]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save your message");
      }

      // Call the edge function to send email notification
      const { error: functionError } = await supabase.functions.invoke("send-contact-notification", {
        body: formData
      });

      if (functionError) {
        console.error("Function error:", functionError);
        // We'll still consider the submission successful even if notification fails
      }

      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        className: "bg-green-500 text-white"
      });

      // Reset the form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                      <a href="mailto:info@quicklinksagribusiness.com" className="hover:text-white transition-colors">
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
                      <a href="tel:+233596605771" className="hover:text-white transition-colors">
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
      <Toaster />
    </section>
  );
}
