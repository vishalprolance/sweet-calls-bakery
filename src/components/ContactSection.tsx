import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Give us a call to discuss your perfect cake. We'll work with you to create something truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-golden mb-8">
              <Phone className="h-8 w-8 mx-auto lg:mx-0 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Call to Order</h3>
              <p className="text-3xl font-bold mb-2">(555) 123-CAKE</p>
              <p className="opacity-90">Speak directly with our bakers</p>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Planning ahead?</strong> We recommend ordering 
                custom cakes at least 48 hours in advance to ensure we can create exactly 
                what you're dreaming of.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Same day orders</strong> are welcome for our 
                signature cakes, subject to availability. Give us a call to check what's 
                fresh and ready!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-card border-0 shadow-warm">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">Store Hours</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: 7am - 7pm</p>
                  <p>Saturday: 8am - 8pm</p>
                  <p>Sunday: 9am - 6pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-warm">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>123 Baker Street</p>
                  <p>Sweet Valley, SV 12345</p>
                  <p>Downtown District</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-warm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <div className="text-sm text-muted-foreground">
                  <p>orders@sweetmoments.bakery</p>
                  <p className="text-xs mt-1">For special requests</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-warm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">Quick Order</h4>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                  size="sm"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;