import React from 'react';
import { ArrowRight, Settings, Zap, CheckCircle, Wrench, BarChart, Cog } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';
import LoadingScreen from '@/components/LoadingScreen';

const Services = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "VRT Smart Control",
      description: "Adjusts refrigerant temperature automatically based on indoor load, climate, and occupancy",
      features: [
        "Quick Mode for rapid cooling",
        "Powerful Mode for maximum capacity", 
        "Mild Mode for energy efficiency",
        "Auto Mode for optimal comfort"
      ],
      color: "text-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatic Refrigerant Charging",
      description: "Simplifies installation by automatically detecting the optimal refrigerant level",
      features: [
        "Automatic detection system",
        "Prevents over/under charging",
        "Ensures optimal performance",
        "Reduces installation time"
      ],
      color: "text-green-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Automatic System Check",
      description: "Comprehensive system verification for perfect installation and operation",
      features: [
        "Checks wiring connections",
        "Verifies piping integrity",
        "Tests stop valve operation",
        "Ensures correct installation"
      ],
      color: "text-purple-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Easy Maintenance Features",
      description: "Advanced maintenance capabilities without system shutdown",
      features: [
        "Individual unit shutdown capability",
        "Silver ion antibacterial treatment",
        "Digital system diagnostics",
        "7-segment display monitoring"
      ],
      color: "text-orange-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Energy-Saving Innovations",
      description: "Advanced technologies for maximum energy efficiency and cost savings",
      features: [
        "Enhanced COP during low load",
        "Advanced inverter control",
        "High tensile scroll compressors",
        "Reduced standby power consumption"
      ],
      color: "text-emerald-600"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Flexible System Design",
      description: "Versatile installation options for any commercial or residential application",
      features: [
        "Long piping lengths up to 1000m total",
        "Wide connection ratios up to 200%",
        "Simplified commissioning process",
        "VRV Configurator support"
      ],
      color: "text-indigo-600"
    }
  ];

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
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Settings className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold text-primary">OUR SERVICES</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Advanced HVAC Services & Technologies
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive air conditioning services powered by cutting-edge Daikin technology 
              for optimal comfort, efficiency, and reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-sm border border-white/20 hover:shadow-xl transition-all duration-500 group">
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-48 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(service.icon, { className: "w-20 h-20" })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`lg:col-span-2 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-yellow-300 mb-3 bg-yellow-500/20 px-3 py-1 rounded-lg inline-block">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-white">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-end">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know more about ' + service.title, '_blank')}
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Need Professional HVAC Services?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our certified technicians provide expert installation, maintenance, and support services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I need HVAC services consultation', '_blank')}
                >
                  Contact Expert
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Service
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

export default Services;