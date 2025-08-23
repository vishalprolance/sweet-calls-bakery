import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Nikhitha",
      text: "Bangalore Iyengar Bakery created the most beautiful wedding cake for us! Not only was it stunning, but it tasted absolutely divine. Our guests are still talking about it months later.",
      rating: 5
    },
    {
      name: "Vishal",
      text: "I've been ordering birthday cakes for my family here for years. The quality is consistently amazing, and they always nail the custom designs we request.",
      rating: 5
    },
    {
      name: "Rakshith",
      text: "Last minute cake emergency and they saved the day! Called at 10am and had a gorgeous custom cake ready by 3pm. Incredible service and even better taste!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sweet Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say about their Bangalore Iyengar Bakery experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-warm border-0 shadow-warm hover:shadow-golden transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <p className="font-semibold text-primary">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied customers who trust Bangalore Iyengar Bakery for their special occasions
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;