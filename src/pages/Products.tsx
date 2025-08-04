import { ArrowRight, Thermometer, Wind, Building2, Zap, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';
import LoadingScreen from '@/components/LoadingScreen';

const Products = () => {
  const outdoorUnits = [
    {
      type: "Single Outdoor Unit",
      capacity: "Up to 20 HP",
      model: "RXYQ",
      description: "Compact single unit design for small to medium applications",
      features: ["4D Inverter Control", "VRT Smart Technology", "Quiet Operation"]
    },
    {
      type: "Double Unit Combination", 
      capacity: "22 to 48 HP",
      model: "RXYQ",
      description: "Dual unit setup for larger commercial spaces",
      features: ["Enhanced Capacity", "Redundancy", "Flexible Installation"]
    },
    {
      type: "Triple Unit Combination",
      capacity: "50 to 60 HP", 
      model: "RXYQ",
      description: "Maximum capacity for large commercial buildings",
      features: ["Highest Capacity", "Maximum Flexibility", "Enterprise Grade"]
    }
  ];

  const indoorUnits = [
    {
      category: "Ceiling Cassette",
      units: [
        {
          name: "Round Flow Type",
          model: "FXFQ",
          capacity: "0.8 to 4.5 HP",
          features: ["360° airflow", "Individual louvre control", "Motion sensors", "Stylish flat panel"],
          applications: ["Office", "Hotel", "Retail"]
        },
        {
          name: "Corner Type", 
          model: "FXZQ",
          capacity: "1.6 to 2.2 HP",
          features: ["Compact corner-fit design", "4-way airflow", "Space efficient"],
          applications: ["Small Office", "Clinic"]
        },
        {
          name: "Double Flow",
          model: "FXCQ", 
          capacity: "1.0 to 2.2 HP",
          features: ["Two-way blow", "Compact square design", "Quiet operation"],
          applications: ["Conference Room", "Reception"]
        },
        {
          name: "Multi Flow Type",
          model: "FXMQ-MF",
          capacity: "2.2 to 6.0 HP",
          features: ["Horizontal installation", "Duct connection for multi-zone cooling", "Slim and quiet"],
          applications: ["Commercial", "Multi-zone"]
        }
      ]
    },
    {
      category: "Wall Mounted",
      units: [
        {
          name: "Wall Mounted Type",
          model: "FXAQ",
          capacity: "0.8 to 2.2 HP", 
          features: ["Stylish compact design", "Auto swing", "Easy installation"],
          applications: ["Office", "Hotel Room", "Clinic"]
        }
      ]
    },
    {
      category: "Floor Standing",
      units: [
        {
          name: "Floor Standing Concealed",
          model: "FXNQ",
          capacity: "1.1 to 4.5 HP",
          features: ["Mounted at floor level", "Hidden installation", "Easy maintenance"],
          applications: ["Office", "Showroom"]
        },
        {
          name: "Floor Standing Cabinet",
          model: "FXLQ", 
          capacity: "1.1 to 4.5 HP",
          features: ["Slim cabinet design", "Front discharge", "Floor-mounted convenience"],
          applications: ["Large Office", "Hall"]
        }
      ]
    },
    {
      category: "Ceiling Suspended",
      units: [
        {
          name: "Ceiling Suspended Type",
          model: "FXHQ",
          capacity: "1.1 to 4.5 HP",
          features: ["No ductwork required", "Wide airflow", "Ideal for large rooms and open halls"],
          applications: ["Large Office", "Hall", "Showroom"]
        }
      ]
    },
    {
      category: "Ducted Units",
      units: [
        {
          name: "Low Static Pressure",
          model: "FXSQ",
          capacity: "0.8 to 4.5 HP",
          features: ["Slim profile (200mm height)", "Up to 150 Pa", "Hidden installation"],
          applications: ["Office", "Hotel"]
        },
        {
          name: "Mid Static Pressure", 
          model: "FXMQ-MF",
          capacity: "2.2 to 6.0 HP",
          features: ["Up to 150 Pa", "Longer duct runs", "Ultra-slim design"],
          applications: ["Commercial", "Retail"]
        },
        {
          name: "High Static Pressure",
          model: "FXMQ-P",
          capacity: "5.6 to 16.0 HP", 
          features: ["Up to 250 Pa", "Large airflow capacity", "Commercial ducted systems"],
          applications: ["Mall", "Factory", "Hospital"]
        },
        {
          name: "Duct Connection Slim Type",
          model: "FXDQ",
          capacity: "0.8 to 2.2 HP",
          features: ["Slim design for false ceilings", "Quiet operation", "Ideal for hotels and offices"],
          applications: ["Hotel", "Office", "Clinic"]
        }
      ]
    },
    {
      category: "Specialized Units",
      units: [
        {
          name: "Clean Room Cassette Type",
          model: "FXMQ_MF5",
          capacity: "Up to 8 HP",
          features: ["HEPA filter-compatible", "Clean airflow for labs, hospitals"],
          applications: ["Hospital", "Laboratory", "Clean Room"]
        },
        {
          name: "Multi Cube Ceiling Concealed",
          model: "FXMQ_P7",
          capacity: "Up to 20 HP",
          features: ["Large area coverage", "High flexibility", "Modular installation"],
          applications: ["Large Commercial", "Mall", "Factory"]
        },
        {
          name: "Spot Cooling Indoor Units",
          model: "Special Application",
          capacity: "Variable",
          features: ["Targeted cooling", "Equipment room applications"],
          applications: ["Data Center", "Equipment Room", "Server Room"]
        },
        {
          name: "Air Handling Unit (AHU)",
          model: "VRV Integration",
          capacity: "Variable",
          features: ["Connects with VRV system", "Customized applications"],
          applications: ["Large Building", "Hospital", "Mall"]
        },
        {
          name: "Fresh Air Processing Units",
          model: "FXMQ-MFAV1",
          capacity: "Variable",
          features: ["Integrates with VRV", "Pre-conditions fresh air"],
          applications: ["Commercial", "Hospital", "Office Complex"]
        }
      ]
    }
  ];

  const applicationChart = [
    { capacity: "6-10 HP", application: "Small Building", building: "Clinic, Small Office" },
    { capacity: "12-20 HP", application: "Medium Building", building: "Restaurant, Boutique" },
    { capacity: "22-36 HP", application: "Large Building", building: "Shopping Mall, Hotel" },
    { capacity: "40-60 HP", application: "Enterprise", building: "Office Complex, Hospital" }
  ];

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative">
        <SnowflakeAnimation />
        <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Wind className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold text-primary">COMPLETE PRODUCT RANGE</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Daikin VRV Systems & Indoor Units
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of Variable Refrigerant Volume systems and indoor units 
              for all commercial and residential applications
            </p>
          </div>

          <Tabs defaultValue="outdoor" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="outdoor" className="text-lg py-3">
                <Building2 className="w-5 h-5 mr-2" />
                Outdoor Units
              </TabsTrigger>
              <TabsTrigger value="indoor" className="text-lg py-3">
                <Wind className="w-5 h-5 mr-2" />
                Indoor Units
              </TabsTrigger>
            </TabsList>

            <TabsContent value="outdoor">
              {/* VRV X System Intro */}
              <div className="mb-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  VRV X Series Outdoor Units
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Advanced Variable Refrigerant Volume technology with 4D Inverter control 
                  and VRT Smart Technology for maximum efficiency and comfort.
                </p>
              </div>

              {/* Outdoor Units Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {outdoorUnits.map((unit, index) => (
                  <div key={index} className="card-glass p-6 card-hover">
                    <div className="text-primary mb-4">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {unit.type}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{unit.capacity}</p>
                    <p className="text-sm text-muted-foreground mb-4">{unit.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {unit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want specifications for ' + unit.type + ' - ' + unit.capacity, '_blank')}
                    >
                      View Specifications
                    </Button>
                  </div>
                ))}
              </div>

              {/* Features Breakdown */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
                  Advanced Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: <Settings className="w-6 h-6" />, title: "4D Inverter", desc: "Complete system control" },
                    { icon: <Thermometer className="w-6 h-6" />, title: "VRT Technology", desc: "Smart temperature control" },
                    { icon: <Wind className="w-6 h-6" />, title: "Quiet Operation", desc: "Night-time mode available" },
                    { icon: <Zap className="w-6 h-6" />, title: "Auto Charging", desc: "Refrigerant level detection" }
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="text-primary mb-3 flex justify-center">{feature.icon}</div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Chart */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Application Guide
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-foreground font-semibold">Capacity Range</th>
                        <th className="text-left py-3 text-foreground font-semibold">Application</th>
                        <th className="text-left py-3 text-foreground font-semibold">Suitable Buildings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applicationChart.map((row, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-3 text-primary font-medium">{row.capacity}</td>
                          <td className="py-3 text-foreground">{row.application}</td>
                          <td className="py-3 text-muted-foreground">{row.building}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="indoor">
              <div className="mb-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  Indoor Units - 17 Types, 78 Models
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Complete range of indoor units for every application - from ceiling cassettes 
                  to ducted units and specialized clean room applications.
                </p>
              </div>

              <div className="space-y-12">
                {indoorUnits.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.units.map((unit, unitIndex) => (
                        <div key={unitIndex} className="card-glass p-6 card-hover">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                                {unit.name}
                              </h4>
                              <p className="text-primary font-medium text-sm">{unit.model}</p>
                            </div>
                            <div className="text-primary">
                              <Wind className="w-6 h-6" />
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-4">
                            Capacity: <span className="font-medium">{unit.capacity}</span>
                          </p>
                          
                          <ul className="space-y-2 mb-4">
                            {unit.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="border-t border-border pt-4">
                            <p className="text-sm text-muted-foreground mb-3">Suitable for:</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {unit.applications.map((app, idx) => (
                                <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                                  {app}
                                </span>
                              ))}
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                              onClick={() => window.location.href = '/contact'}
                            >
                              Get Quote
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Need Help Choosing the Right System?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our technical experts will help you select the perfect VRV system for your requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open('https://wa.me/919247041999?text=Hi! I need help choosing the right Daikin VRV system', '_blank')}
                >
                  Consult Expert
                </Button>
                <Button variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Products;