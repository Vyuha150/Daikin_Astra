import { Gift, Phone, MessageCircle, Star, Percent, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Offers = () => {
  const currentOffers = [
    {
      title: "Summer Special Offer",
      discount: "Up to 25% OFF",
      description: "Get huge discounts on split ACs with free installation",
      validity: "Valid till 31st August 2024",
      features: ["Free Installation", "2 Year Extended Warranty", "Free Annual Maintenance"],
      popular: true
    },
    {
      title: "VRV System Deal",
      discount: "₹50,000 OFF",
      description: "Special pricing on commercial VRV systems",
      validity: "Limited time offer",
      features: ["Professional Installation", "5 Year Warranty", "24x7 Support"],
      popular: false
    },
    {
      title: "Bulk Purchase Discount",
      discount: "Extra 15% OFF",
      description: "For orders of 10+ units",
      validity: "Year-round offer",
      features: ["Volume Discount", "Priority Service", "Dedicated Support"],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Free Installation",
      description: "Professional installation by certified technicians"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Extended Warranty",
      description: "Up to 5 years comprehensive warranty coverage"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Annual Maintenance",
      description: "Free annual maintenance for first 2 years"
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: "Best Prices",
      description: "Guaranteed lowest prices in the market"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-offer/10 rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5 mr-2 text-offer" />
              <span className="font-semibold text-offer">SPECIAL OFFERS</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Exclusive Daikin AC Deals
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Limited time offers on premium Daikin air conditioners with free installation, 
              extended warranty, and professional service support.
            </p>
          </div>

          {/* Current Offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {currentOffers.map((offer, index) => (
              <div key={index} className="card-glass p-6 card-hover relative group">
                {offer.popular && (
                  <div className="absolute -top-3 -right-3 bg-offer text-offer-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="bg-offer/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-offer" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-offer mb-2">
                    {offer.discount}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {offer.description}
                  </p>
                  
                  <div className="bg-primary/10 rounded-lg px-3 py-1 text-xs font-medium text-primary">
                    {offer.validity}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-offer mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full btn-hero"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know about the ' + offer.title, '_blank')}
                >
                  Claim Offer
                </Button>
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
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready to Save Big on Your AC Purchase?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our experts to discuss the best offer for your requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('tel:9247041999')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now - 9247041999
                </Button>
                <Button 
                  className="btn-whatsapp"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know about current AC offers', '_blank')}
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
  );
};

export default Offers;