import React from "react";
import {
  Cpu,
  Thermometer,
  Wind,
  Smartphone,
  BarChart3,
  Settings,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnowflakeAnimation from "@/components/SnowflakeAnimation";
import LoadingScreen from "@/components/LoadingScreen";

const Technology = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const technologies = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "VRT Smart Control",
      description:
        "Variable Refrigerant Temperature technology that automatically adjusts based on load conditions",
      features: [
        "Automatic temperature adjustment",
        "Load-based optimization",
        "Climate sensing",
        "Occupancy detection",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "4D Inverter Technology",
      description:
        "Advanced compressor control with four-dimensional optimization for maximum efficiency",
      features: [
        "Compressor control",
        "Refrigerant management",
        "Fan optimization",
        "Inverter PCB control",
      ],
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Auto Sensing & Airflow",
      description:
        "Intelligent sensors detect occupancy and adjust airflow patterns for optimal comfort",
      features: [
        "Motion detection",
        "Floor temperature sensing",
        "360° airflow control",
        "Individual louvre control",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Remote Control & App",
      description:
        "Complete system control through mobile apps and advanced remote controllers",
      features: [
        "Wi-Fi connectivity",
        "Mobile app control",
        "Scheduling",
        "Energy monitoring",
      ],
    },
  ];

  const energyBenefits = [
    {
      metric: "Energy Savings",
      value: "Up to 30%",
      description: "Compared to conventional systems",
    },
    {
      metric: "COP Rating",
      value: "Up to 4.5",
      description: "High coefficient of performance",
    },
    {
      metric: "Load Efficiency",
      value: "50-100%",
      description: "Optimized across all load ranges",
    },
    {
      metric: "Standby Power",
      value: "< 10W",
      description: "Minimal power consumption when idle",
    },
  ];

  return (
    <>
      {!isLoadingComplete ? (
        <LoadingScreen onLoadingComplete={() => setIsLoadingComplete(true)} />
      ) : (
        <div className="min-h-screen bg-background relative">
          <SnowflakeAnimation />
          <Header />

          <section className="pt-24 pb-16 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="container mx-auto px-4 lg:px-6">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
                  <Settings className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold text-primary">
                    ADVANCED TECHNOLOGY
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Cutting-Edge HVAC Technology
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Experience the power of Daikin's revolutionary Variable
                  Refrigerant Temperature (VRT) technology and advanced inverter
                  control systems.
                </p>
              </div>

              {/* Technology Features */}
              <div className="space-y-12 mb-20">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-primary/5 to-accent/5 text-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      {/* Image Section */}
                      <div
                        className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                      >
                        <div className="bg-black/20 rounded-2xl p-12 h-80 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                          <div className="text-blue-600 group-hover:scale-110 transition-transform duration-500">
                            {React.cloneElement(tech.icon, {
                              className: "w-32 h-32",
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div
                        className={`space-y-6 ${
                          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                        }`}
                      >
                        <div>
                          <h3 className="text-3xl font-heading font-bold text-white mb-4">
                            {tech.title}
                          </h3>
                          <p className="text-lg text-white leading-relaxed">
                            {tech.description}
                          </p>
                        </div>

                        <ul className="space-y-4">
                          {tech.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-white"
                            >
                              <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                              <span className="font-medium text-lg">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive VRT Diagram */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                    How VRT Smart Control Works
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Variable Refrigerant Temperature automatically adjusts
                    system operation based on real-time conditions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    {
                      step: "1",
                      title: "Load Detection",
                      desc: "Sensors detect indoor load requirements",
                    },
                    {
                      step: "2",
                      title: "Climate Analysis",
                      desc: "System analyzes outdoor conditions",
                    },
                    {
                      step: "3",
                      title: "Auto Adjustment",
                      desc: "VRT optimizes refrigerant temperature",
                    },
                    {
                      step: "4",
                      title: "Energy Savings",
                      desc: "Delivers maximum efficiency and comfort",
                    },
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-black/20 rounded-xl p-6 shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-primary font-bold">Quick Mode</div>
                      <div className="text-sm text-muted-foreground">
                        Rapid cooling
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-bold">
                        Powerful Mode
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Maximum capacity
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-bold">Mild Mode</div>
                      <div className="text-sm text-muted-foreground">
                        Energy efficient
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-bold">Auto Mode</div>
                      <div className="text-sm text-muted-foreground">
                        Smart optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Energy Efficiency Charts */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                    Energy Efficiency Performance
                  </h2>
                  <p className="text-muted-foreground">
                    Proven energy savings and performance metrics
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {energyBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg p-6 text-center card-hover"
                    >
                      <div className="text-primary mb-3">
                        <BarChart3 className="w-8 h-8 mx-auto" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {benefit.value}
                      </div>
                      <div className="font-semibold text-foreground mb-2">
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {benefit.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compressor Innovations */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 shadow-card mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                    Compressor Innovations
                  </h2>
                  <p className="text-muted-foreground">
                    Advanced scroll compressor technology with high tensile
                    materials
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "Variable Speed Control",
                      description:
                        "Precise capacity modulation from 12% to 100% for optimal efficiency",
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "Advanced Materials",
                      description:
                        "High tensile strength materials ensure long-lasting performance",
                    },
                    {
                      icon: <Thermometer className="w-6 h-6" />,
                      title: "Enhanced COP",
                      description:
                        "Superior coefficient of performance across all operating conditions",
                    },
                  ].map((innovation, index) => (
                    <div key={index} className="text-center">
                      <div className="text-primary mb-4 flex justify-center">
                        {innovation.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {innovation.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {innovation.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remote Control & App Integration */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 lg:p-12 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                      Smart Control & Integration
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Control your entire VRV system from anywhere with advanced
                      mobile apps and intelligent remote controllers.
                    </p>

                    <ul className="space-y-4 mb-8">
                      {[
                        "Real-time system monitoring",
                        "Schedule programming",
                        "Energy consumption tracking",
                        "Maintenance alerts",
                        "Multi-zone control",
                        "Voice control integration",
                      ].map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="btn-hero"
                      onClick={() =>
                        window.open(
                          "https://wa.me/919247041999?text=Hi! I want to learn more about smart controls",
                          "_blank"
                        )
                      }
                    >
                      Learn More About Smart Controls
                    </Button>
                  </div>

                  <div className="text-center">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                      <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Daikin Mobile App
                      </h3>
                      <p className="text-muted-foreground">
                        Complete system control at your fingertips
                      </p>
                    </div>
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

export default Technology;
