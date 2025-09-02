import { Zap, Phone, Clock, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const OffersSection = () => {
  return (
    <section
      id="offers"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "hsl(var(--surface))" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-accent/20 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2 text-accent-light" />
            <span className="font-body font-semibold text-accent-light">
              MONSOON SPECIAL OFFER
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading text-foreground mb-4">
            Get up to ₹4,000 Off
          </h2>
          <p className="text-xl lg:text-2xl font-body text-text-muted mb-2">
            + Free Installation on All Daikin ACs!
          </p>
          <p className="text-lg font-body text-text-muted">
            Limited Time Offer - Valid Till Stock Lasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Truck className="w-8 h-8" />,
              title: "Fast Delivery",
              desc: "Same day delivery in Vijayawada",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "3-Year Warranty",
              desc: "Extended warranty on all units",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "EMI Available",
              desc: "0% interest for first 6 months",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:border-white/40"
            >
              <div className="text-white mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-white/90 font-body">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Examples */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-heading text-center mb-6 text-white">
            Popular AC Models - Special Prices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                model: "Daikin 1.5 Ton Split AC",
                originalPrice: "₹45,000",
                offerPrice: "₹41,000",
                savings: "₹4,000",
              },
              {
                model: "Daikin 2 Ton Inverter AC",
                originalPrice: "₹58,000",
                offerPrice: "₹54,500",
                savings: "₹3,500",
              },
              {
                model: "Daikin Cassette 2.5 Ton",
                originalPrice: "₹85,000",
                offerPrice: "₹81,000",
                savings: "₹4,000",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <h4 className="font-body font-semibold text-lg mb-3 text-white">
                  {product.model}
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-white/70 line-through font-body">
                    {product.originalPrice}
                  </p>
                  <p className="text-2xl font-bold text-white font-body">
                    {product.offerPrice}
                  </p>
                  <p className="text-green-400 font-body font-medium">
                    Save {product.savings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-xl font-body font-semibold mb-6 text-foreground">
            → Call now to grab the deal! Offer expires soon! ←
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-accent text-primary-foreground hover:bg-accent/90 px-8 py-4 rounded-xl font-body font-bold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => window.open("tel:9247041999")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 9247041999 Now!
            </Button>

            <Button
              className="bg-whatsapp hover:bg-whatsapp/90 px-8 py-4 rounded-xl font-body font-bold text-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
              onClick={() =>
                window.open(
                  "https://wa.me/919247041999?text=Hi! I want to know about your Monsoon AC offers",
                  "_blank"
                )
              }
            >
              Get Offer on WhatsApp
            </Button>
          </div>

          <p className="text-sm font-body text-text-muted mt-4">
            * Terms and conditions apply. Offer valid for limited period.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
