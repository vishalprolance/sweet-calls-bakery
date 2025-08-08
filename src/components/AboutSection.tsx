const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Baking with Passion
              <span className="block text-2xl font-normal text-accent mt-2">
                Since 1985
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over three decades, Sweet Moments Artisan Bakery has been creating 
                unforgettable cakes that turn ordinary moments into cherished memories. 
                Our journey began with a simple dream: to bring the warmth and joy of 
                homemade baking to our community.
              </p>
              
              <p>
                Every cake that leaves our kitchen is a testament to our commitment to 
                quality. We source the finest ingredients, from Madagascar vanilla to 
                Belgian chocolate, ensuring each bite is as special as the occasion 
                it celebrates.
              </p>
              
              <p>
                Whether it's a wedding, birthday, anniversary, or just because, we believe 
                every celebration deserves a cake that's as unique as the people enjoying it. 
                That's why we work closely with each customer to create custom designs that 
                reflect their personal style and taste.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-warm rounded-2xl p-8 shadow-warm">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Sweet Moments?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Fresh Daily</h4>
                  <p className="text-muted-foreground">All cakes are baked fresh to order using traditional methods</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Custom Designs</h4>
                  <p className="text-muted-foreground">Personalized cakes tailored to your vision and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Premium Ingredients</h4>
                  <p className="text-muted-foreground">Only the finest, locally-sourced ingredients make it into our cakes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Family Recipe</h4>
                  <p className="text-muted-foreground">Time-tested recipes passed down through generations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;