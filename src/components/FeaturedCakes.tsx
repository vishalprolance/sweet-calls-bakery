import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import cake1 from "@/assets/cakes/cake1.jpg";
import cake2 from "@/assets/cakes/cake2.jpg";
import cake3 from "@/assets/cakes/cake3.jpg";
import cake4 from "@/assets/cakes/cake4.jpg";
import cake5 from "@/assets/cakes/cake5.jpg";
import cake6 from "@/assets/cakes/cake6.jpg";
import cake7 from "@/assets/cakes/cake7.jpg";
import cake8 from "@/assets/cakes/cake8.jpg";

const FeaturedCakes = () => {
  const cakes = [
    {
      name: "Classic Vanilla Wedding Cake",
      description: "Three-layer vanilla sponge with buttercream roses",
      imageUrl: cake1
    },
    {
      name: "Chocolate Decadence",
      description: "Rich chocolate cake with ganache and fresh berries",
      imageUrl: cake2
    },
    {
      name: "Red Velvet Romance",
      description: "Moist red velvet with cream cheese frosting",
      imageUrl: cake3
    },
    {
      name: "Lemon Berry Delight",
      description: "Light lemon cake with fresh berry compote",
      imageUrl: cake4
    },
    {
      name: "Tiramisu Tower",
      description: "Coffee-soaked layers with mascarpone cream",
      imageUrl: cake5
    },
    {
      name: "Seasonal Fruit Tart",
      description: "Buttery crust with pastry cream and seasonal fruits",
      imageUrl: cake6
    },
    {
      name: "Black Forest Classic",
      description: "Chocolate layers, whipped cream and cherries",
      imageUrl: cake7
    },
    {
      name: "Fresh Mango Mousse",
      description: "Silky mango mousse on a soft vanilla sponge",
      imageUrl: cake8
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
                <img
                  src={cake.imageUrl}
                  alt={`${cake.name} - ${cake.description}`}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    e.currentTarget.onerror = null;
                  }}
                />
                <h3 className="text-xl font-semibold text-primary mb-3">{cake.name}</h3>
                <p className="text-muted-foreground mb-2 leading-relaxed">{cake.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-golden text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105" onClick={() => (window.location.href='tel:+918722100824')}
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