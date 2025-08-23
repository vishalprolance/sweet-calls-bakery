import { Phone, MapPin, Clock, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Bangalore Iyengar Bakery</h3>
            <p className="opacity-90 leading-relaxed">
              Creating sweet memories with handcrafted cakes and pastries since 1985. 
              Every cake tells a story, and we're honored to be part of yours.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <span><a href="tel:+918722100824">8722100824</a></span>
              </div>
              <div className="flex items-center justify-center md:justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>madanveera2020@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Reshon Complex, Main Road Belman, Karkala Tq., Udupi 576111</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Store Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-center md:justify-end items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Monday - Friday: 7am - 7pm</span>
              </div>
              <p>Saturday: 8am - 8pm</p>
              <p>Sunday: 9am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="opacity-75">
            © 2024 Bangalore Iyengar Bakery. All rights reserved. Made with ❤️ and lots of flour.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;