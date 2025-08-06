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
            <TabsList className="grid w-full grid-cols-2 mb-16 h-auto p-2 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border-0">
              <TabsTrigger 
                value="outdoor" 
                className="text-lg py-6 px-8 rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 hover:bg-blue-50 data-[state=inactive]:text-blue-600"
              >
                <Building2 className="w-6 h-6 mr-3" />
                Outdoor Units
              </TabsTrigger>
              <TabsTrigger 
                value="indoor" 
                className="text-lg py-6 px-8 rounded-xl font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 hover:bg-blue-50 data-[state=inactive]:text-blue-600"
              >
                <Wind className="w-6 h-6 mr-3" />
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
              <div className="space-y-8 mb-16">
                {outdoorUnits.map((unit, index) => (
                  <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Image Section */}
                      <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-64 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                          <Building2 className="w-24 h-24 text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="order-1 lg:order-2 space-y-6">
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                            {unit.type}
                          </h3>
                          <p className="text-xl font-semibold text-blue-600 mb-4">{unit.capacity}</p>
                          <p className="text-gray-600 leading-relaxed">{unit.description}</p>
                        </div>
                        
                        <ul className="space-y-3">
                          {unit.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want specifications for ' + unit.type + ' - ' + unit.capacity, '_blank')}
                        >
                          View Specifications
                        </Button>
                      </div>
                    </div>
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
                    <div className="space-y-6">
                      {category.units.map((unit, unitIndex) => (
                        <div key={unitIndex} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                            {/* Image Section */}
                            <div className="lg:col-span-1">
                              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 h-32 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                                <Wind className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="lg:col-span-3 space-y-4">
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                <div className="flex-1">
                                  <h4 className="text-xl font-heading font-bold text-gray-900 mb-2">
                                    {unit.name}
                                  </h4>
                                  <div className="flex flex-wrap gap-4 text-sm mb-3">
                                    <span className="font-medium text-blue-600">{unit.model}</span>
                                    <span className="text-gray-600">Capacity: <span className="font-medium">{unit.capacity}</span></span>
                                  </div>
                                </div>
                                
                                <Button 
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 lg:self-start"
                                  onClick={() => window.location.href = '/contact'}
                                >
                                  Get Quote
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                              
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
                                  <ul className="space-y-1">
                                    {unit.features.slice(0, 3).map((feature, idx) => (
                                      <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div>
                                  <h5 className="font-semibold text-gray-800 mb-2">Applications:</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {unit.applications.map((app, idx) => (
                                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                        {app}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
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