import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FeaturedCakes = () => {
  const cakes = [
    {
      name: "Classic Vanilla Wedding Cake",
      description: "Three-layer vanilla sponge with buttercream roses",
      price: "Starting at $85"
    },
    {
      name: "Chocolate Decadence",
      description: "Rich chocolate cake with ganache and fresh berries",
      price: "Starting at $65"
    },
    {
      name: "Red Velvet Romance",
      description: "Moist red velvet with cream cheese frosting",
      price: "Starting at $70"
    },
    {
      name: "Lemon Berry Delight",
      description: "Light lemon cake with fresh berry compote",
      price: "Starting at $60"
    },
    {
      name: "Tiramisu Tower",
      description: "Coffee-soaked layers with mascarpone cream",
      price: "Starting at $75"
    },
    {
      name: "Seasonal Fruit Tart",
      description: "Buttery crust with pastry cream and seasonal fruits",
      price: "Starting at $45"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Signature Cakes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each cake is lovingly handcrafted using traditional techniques and premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cakes.map((cake, index) => (
            <Card key={index} className="bg-card border-0 shadow-warm hover:shadow-golden transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{cake.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{cake.description}</p>
                <p className="text-lg font-bold text-accent">{cake.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-golden text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call to Order Your Custom Cake
          </Button>
          <p className="mt-4 text-muted-foreground">
            Custom designs and dietary accommodations available
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;