const API_URL = import.meta.env.VITE_API_URL;
import {
  ArrowRight,
  Thermometer,
  Wind,
  Building2,
  Zap,
  Settings,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowflakeAnimation from "@/components/SnowflakeAnimation";
import LoadingScreen from "@/components/LoadingScreen";

const Products = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [outdoorUnits, setOutdoorUnits] = useState([]);
  const [indoorUnits, setIndoorUnits] = useState([]);
  const [applicationChart, setApplicationChart] = useState([]);

  useEffect(() => {
    // Fetch Outdoor Units
    fetch(`${API_URL}/api/products/outdoor-units`)
      .then((res) => res.json())
      .then((data) => setOutdoorUnits(data));

    // Fetch Indoor Units
    fetch(`${API_URL}/api/products/indoor-units`)
      .then((res) => res.json())
      .then((data) => setIndoorUnits(data));

    // Fetch Application Chart
    fetch(`${API_URL}/api/products/application-chart`)
      .then((res) => res.json())
      .then((data) => setApplicationChart(data));
  }, []);

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
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                  <Wind className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold text-primary">
                    COMPLETE PRODUCT RANGE
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Daikin VRV Systems & Indoor Units
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive range of Variable Refrigerant Volume systems and
                  indoor units for all commercial and residential applications
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
                      Advanced Variable Refrigerant Volume technology with 4D
                      Inverter control and VRT Smart Technology for maximum
                      efficiency and comfort.
                    </p>
                  </div>

                  {/* Outdoor Units Grid */}
                  <div className="space-y-8 mb-16">
                    {outdoorUnits.map((unit, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/20 hover:shadow-xl transition-all duration-500 group"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          {/* Image Section */}
                          <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 h-64 flex items-center justify-center transition-all duration-500">
                              <Building2 className="w-24 h-24 text-blue-600 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="order-1 lg:order-2 space-y-6">
                            <div>
                              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                                {unit.type}
                              </h3>
                              <p className="text-xl font-semibold text-blue-300 mb-4">
                                {unit.capacity}
                              </p>
                              <p className="text-white/80 leading-relaxed">
                                {unit.description}
                              </p>
                            </div>

                            <ul className="space-y-3">
                              {unit.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center text-white"
                                >
                                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                  <span className="font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            <Button
                              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                              onClick={() =>
                                window.open(
                                  "https://wa.me/919247041999?text=Hi! I want specifications for " +
                                    unit.type +
                                    " - " +
                                    unit.capacity,
                                  "_blank"
                                )
                              }
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
                        {
                          icon: <Settings className="w-6 h-6" />,
                          title: "4D Inverter",
                          desc: "Complete system control",
                        },
                        {
                          icon: <Thermometer className="w-6 h-6" />,
                          title: "VRT Technology",
                          desc: "Smart temperature control",
                        },
                        {
                          icon: <Wind className="w-6 h-6" />,
                          title: "Quiet Operation",
                          desc: "Night-time mode available",
                        },
                        {
                          icon: <Zap className="w-6 h-6" />,
                          title: "Auto Charging",
                          desc: "Refrigerant level detection",
                        },
                      ].map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="text-primary mb-3 flex justify-center">
                            {feature.icon}
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Chart */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-card border border-white/20">
                    <h3 className="text-xl font-heading font-bold text-white mb-6">
                      Application Guide
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-white/30">
                            <th className="text-left py-3 text-white font-semibold bg-blue-500/20 px-4 rounded-lg">
                              Capacity Range
                            </th>
                            <th className="text-left py-3 text-white font-semibold bg-green-500/20 px-4 rounded-lg">
                              Application
                            </th>
                            <th className="text-left py-3 text-white font-semibold bg-purple-500/20 px-4 rounded-lg">
                              Suitable Buildings
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {applicationChart.map((row, index) => (
                            <tr
                              key={index}
                              className="border-b border-white/20 hover:bg-white/5 transition-colors"
                            >
                              <td className="py-3 text-blue-300 font-bold text-lg">
                                {row.capacity}
                              </td>
                              <td className="py-3 text-green-300 font-semibold">
                                {row.application}
                              </td>
                              <td className="py-3 text-purple-200">
                                {row.building}
                              </td>
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
                      Complete range of indoor units for every application -
                      from ceiling cassettes to ducted units and specialized
                      clean room applications.
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
                            <div
                              key={unitIndex}
                              className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/20 hover:shadow-lg transition-all duration-300 group"
                            >
                              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                                {/* Image Section */}
                                <div className="lg:col-span-1">
                                  <div className="bg-gradient-to-r from-primary/5 to-accent/5  rounded-xl p-6 h-32 flex items-center justify-center transition-all duration-300">
                                    <Wind className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                                  </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:col-span-3 space-y-4">
                                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                      <h4 className="text-xl font-heading font-bold text-white mb-2">
                                        {unit.name}
                                      </h4>
                                      <div className="flex flex-wrap gap-4 text-sm mb-3">
                                        <span className="font-medium text-blue-300">
                                          {unit.model}
                                        </span>
                                        <span className="text-white/80">
                                          Capacity:{" "}
                                          <span className="font-medium text-white">
                                            {unit.capacity}
                                          </span>
                                        </span>
                                      </div>
                                    </div>

                                    <Button
                                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 lg:self-start"
                                      onClick={() =>
                                        (window.location.href = "/contact")
                                      }
                                    >
                                      Get Quote
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>

                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div>
                                      <h5 className="font-semibold text-white mb-2">
                                        Key Features:
                                      </h5>
                                      <ul className="space-y-1">
                                        {unit.features
                                          .slice(0, 3)
                                          .map((feature, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-center text-sm text-white/80"
                                            >
                                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                                              {feature}
                                            </li>
                                          ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <h5 className="font-semibold text-white mb-2">
                                        Applications:
                                      </h5>
                                      <div className="flex flex-wrap gap-2">
                                        {unit.applications.map((app, idx) => (
                                          <span
                                            key={idx}
                                            className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                                          >
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
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 border p-8 rounded-2xl">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Need Help Choosing the Right System?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our technical experts will help you select the perfect VRV
                    system for your requirements
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      className="btn-hero"
                      onClick={() =>
                        window.open(
                          "https://wa.me/919247041999?text=Hi! I need help choosing the right Daikin VRV system",
                          "_blank"
                        )
                      }
                    >
                      Consult Expert
                    </Button>
                    <Button variant="outline">Download Brochure</Button>
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

export default Products;
