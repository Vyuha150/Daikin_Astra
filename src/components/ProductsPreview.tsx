import { ArrowRight, Thermometer, Zap, Wind, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsPreview = () => {
  const productCategories = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Split ACs",
      description: "1.0 to 2.2 HP range for homes and offices",
      features: ["Inverter Technology", "Energy Efficient", "Quiet Operation"],
      popular: true
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Cassette ACs", 
      description: "360° airflow for commercial spaces",
      features: ["Round Flow Type", "Corner Fit Design", "Multi Flow Options"],
      popular: false
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "VRV Systems",
      description: "6 HP to 60 HP for large commercial buildings",
      features: ["Variable Refrigerant Volume", "Long Piping", "Energy Saving"],
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Commercial Units",
      description: "High capacity ducted and concealed units",
      features: ["High Static Pressure", "Flexible Installation", "Quiet Operation"],
      popular: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Thermometer className="w-5 h-5 mr-2 text-primary" />
            <span className="font-semibold text-primary">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Range of Daikin Air Conditioners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From residential split ACs to commercial VRV systems, we offer the complete Daikin product range 
            with professional installation and service support.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <div key={index} className="card-glass p-6 card-hover relative group">
              {category.popular && (
                <div className="absolute -top-3 -right-3 bg-offer text-offer-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {category.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.location.href = '/products'}
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Models */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Popular Daikin Models
            </h3>
            <p className="text-muted-foreground">
              Best-selling air conditioners with proven performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                model: "FTKM Series",
                type: "1.5 Ton Split AC",
                efficiency: "5 Star",
                price: "Starting ₹41,000",
                features: ["Inverter Technology", "Copper Coil", "Wi-Fi Ready"]
              },
              {
                model: "FXFQ Series", 
                type: "2 Ton Cassette AC",
                efficiency: "5 Star",
                price: "Starting ₹65,000",
                features: ["360° Airflow", "Motion Sensor", "Compact Design"]
              },
              {
                model: "RXYQ Series",
                type: "VRV Outdoor Unit",
                efficiency: "High COP",
                price: "Starting ₹2,50,000",
                features: ["Variable Speed", "R-32 Refrigerant", "Quiet Operation"]
              }
            ].map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                <div className="mb-4">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    {model.model}
                  </h4>
                  <p className="text-primary font-medium">{model.type}</p>
                  <div className="inline-flex items-center bg-success/10 text-success rounded-full px-3 py-1 text-sm font-medium mt-2">
                    {model.efficiency}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border pt-4">
                  <p className="text-xl font-bold text-primary mb-3">{model.price}</p>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know more about ' + model.model, '_blank')}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Highlight */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              World's Leading Air Conditioning Technology
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the power of Daikin's Variable Refrigerant Temperature (VRT) technology, 
              delivering superior comfort and energy efficiency for every application.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                "4D Inverter Control",
                "VRT Smart Technology", 
                "Automatic System Check",
                "Long Piping Design"
              ].map((tech, index) => (
                <div key={index} className="bg-primary/10 rounded-lg p-4">
                  <p className="font-medium text-primary">{tech}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero"
                onClick={() => scrollToSection('contact')}
              >
                Explore All Products
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want technical details about Daikin ACs', '_blank')}
              >
                Technical Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;