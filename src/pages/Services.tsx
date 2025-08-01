import { ArrowRight, Settings, Zap, CheckCircle, Wrench, BarChart, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';

const Services = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="card-glass p-6 card-hover group">
                <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know more about ' + service.title, '_blank')}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
  );
};

export default Services;