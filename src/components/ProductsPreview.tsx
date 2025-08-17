import React from 'react';
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
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Complete Range of Daikin Air Conditioners
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            From residential split ACs to commercial VRV systems, we offer the complete Daikin product range 
            with professional installation and service support.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="space-y-8 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="card-product group relative overflow-hidden bg-gradient-to-br from-card via-card to-background border border-primary/10 hover:border-primary/30">
              {category.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-offer to-offer/80 text-offer-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  <span className="relative z-10">Popular</span>
                </div>
              )}
              
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className="professional-image-container h-48 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary-light/10">
                    <div className="text-primary group-hover:scale-110 group-hover:text-primary-light transition-all duration-500">
                      {React.cloneElement(category.icon, { className: "w-20 h-20" })}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-end">
                      <Button 
                        className="btn-professional group relative overflow-hidden"
                        onClick={() => window.location.href = '/products'}
                      >
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-light/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Models */}
        <div className="bg-gradient-primary/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 border border-primary/20 shadow-card">
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
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Image Section */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-32 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      <Thermometer className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">
                          {model.model}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          <span className="font-medium text-blue-600">{model.type}</span>
                          <div className="inline-flex items-center bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                            {model.efficiency}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-orange-600 mb-4">{model.price}</div>
                      </div>
                      
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 lg:self-start"
                        onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know more about ' + model.model, '_blank')}
                      >
                        Get Quote
                      </Button>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {model.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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