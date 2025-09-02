import {
  Gift,
  Phone,
  MessageCircle,
  Star,
  Percent,
  Trophy,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowflakeAnimation from "@/components/SnowflakeAnimation";
import LoadingScreen from "@/components/LoadingScreen";

const Offers = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/offers`)
      .then((res) => res.json())
      .then((data) => setCurrentOffers(data));
    fetch(`${API_URL}/api/offers/benefits`)
      .then((res) => res.json())
      .then((data) => setBenefits(data));
  }, [API_URL]);

  // Icon mapping for benefits
  const benefitIconMap = {
    "Free Installation": <Gift className="w-6 h-6" />,
    "Extended Warranty": <Star className="w-6 h-6" />,
    "Annual Maintenance": <Trophy className="w-6 h-6" />,
    "Best Prices": <Percent className="w-6 h-6" />,
  };

  return (
    <>
      {!isLoadingComplete ? (
        <LoadingScreen onLoadingComplete={() => setIsLoadingComplete(true)} />
      ) : (
        <div className="min-h-screen bg-background relative">
          <SnowflakeAnimation />
          <Header />
          <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 lg:px-6">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-offer/10 rounded-full px-6 py-2 mb-6">
                  <Gift className="w-5 h-5 mr-2 text-offer" />
                  <span className="font-semibold text-offer">
                    SPECIAL OFFERS
                  </span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Exclusive Daikin AC Deals
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Limited time offers on premium Daikin air conditioners with
                  free installation, extended warranty, and professional service
                  support.
                </p>
              </div>
              {/* Current Offers */}
              <div className="space-y-8 mb-16">
                {currentOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-sm border border-white/20 hover:shadow-xl transition-all duration-500 group relative"
                  >
                    {offer.popular && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        Most Popular
                      </div>
                    )}
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      {/* Image Section */}
                      <div
                        className={`${index % 2 === 1 ? "lg:col-start-3" : ""}`}
                      >
                        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 h-48 flex items-center justify-center group-hover:from-blue-300/40 group-hover:to-blue-500/30 transition-all duration-500 border border-blue-400/30">
                          <Gift className="w-20 h-20 text-blue-300 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      {/* Content Section */}
                      <div
                        className={`lg:col-span-2 space-y-6 ${
                          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                        }`}
                      >
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-white mb-3">
                            {offer.title}
                          </h3>
                          <div className="text-4xl font-bold text-orange-400 mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                            {offer.discount}
                          </div>
                          <p className="text-blue-100 leading-relaxed text-lg mb-4">
                            {offer.description}
                          </p>
                          <div className="bg-blue-500/30 rounded-lg px-4 py-2 inline-block text-sm font-medium text-blue-200 border border-blue-400/30">
                            {offer.validity}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-blue-300 mb-3 bg-blue-500/20 px-3 py-1 rounded-lg inline-block">
                              Offer Includes:
                            </h4>
                            <ul className="space-y-2">
                              {offer.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-white"
                                >
                                  <Star className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                                  <span className="font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-end">
                            <Button
                              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                              onClick={() =>
                                window.open(
                                  "https://wa.me/919247041999?text=Hi! I want to know about the " +
                                    offer.title,
                                  "_blank"
                                )
                              }
                            >
                              Claim Offer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-8 text-center">
                  Why Choose Our Offers?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <div className="text-primary">
                          {benefitIconMap[benefit.title]}
                        </div>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Ready to Save Big on Your AC Purchase?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our experts to discuss the best offer for your
                    requirements
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      className="btn-hero"
                      onClick={() => window.open("tel:9247041999")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now - 9247041999
                    </Button>
                    <Button
                      className="btn-whatsapp"
                      onClick={() =>
                        window.open(
                          "https://wa.me/919247041999?text=Hi! I want to know about current AC offers",
                          "_blank"
                        )
                      }
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Offers;
