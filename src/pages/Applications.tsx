import React from 'react';
import { Building2, Hotel, Heart, ShoppingBag, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';
import LoadingScreen from '@/components/LoadingScreen';

const Applications = () => {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial Offices",
      description: "Create comfortable working environments with precise temperature control and energy efficiency",
      features: [
        "Multi-zone climate control",
        "Energy monitoring systems", 
        "Quiet operation for productivity",
        "Flexible installation options"
      ],
      applications: ["Corporate offices", "Co-working spaces", "Business centers", "Government buildings"],
      caseStudy: "IT Park, Vijayawada - 50HP VRV system serving 5000+ employees with 35% energy savings"
    },
    {
      icon: <Hotel className="w-12 h-12" />,
      title: "Hotels & Hospitality",
      description: "Deliver exceptional guest comfort with individual room controls and centralized management",
      features: [
        "Individual room temperature control",
        "Guest-friendly interfaces",
        "Centralized monitoring",
        "Low noise operation"
      ],
      applications: ["Hotels", "Resorts", "Restaurants", "Banquet halls"],
      caseStudy: "5-Star Hotel, Guntur - 78 rooms with individual VRV controls and energy management"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Hospitals & Clean Rooms",
      description: "Maintain critical environmental conditions with HEPA filtration and precise control",
      features: [
        "HEPA filter compatibility",
        "Precise humidity control",
        "Clean room applications",
        "Emergency backup systems"
      ],
      applications: ["Hospitals", "Clinics", "Laboratories", "Pharmaceutical facilities"],
      caseStudy: "Multi-specialty Hospital - Clean room grade VRV with HEPA filtration for OT complex"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Shopping Complexes", 
      description: "Manage large spaces efficiently with zone-wise control and high capacity systems",
      features: [
        "Large area coverage",
        "Zone-wise temperature control",
        "High static pressure units",
        "Energy efficient operation"
      ],
      applications: ["Shopping malls", "Retail stores", "Showrooms", "Supermarkets"],
      caseStudy: "Regional Mall - 60HP VRV system with 200+ indoor units covering 200,000 sq ft"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Educational Institutions",
      description: "Create optimal learning environments with reliable and efficient climate control",
      features: [
        "Classroom comfort optimization",
        "Scheduled operation",
        "Low maintenance requirements",
        "Cost-effective solutions"
      ],
      applications: ["Schools", "Colleges", "Universities", "Training centers"],
      caseStudy: "Engineering College - Campus-wide VRV installation with 40% reduction in energy costs"
    }
  ];

  const systemBenefits = [
    { title: "Energy Efficiency", description: "Up to 30% savings compared to conventional systems" },
    { title: "Flexible Design", description: "Suitable for any building layout or size" },
    { title: "Individual Control", description: "Zone-wise temperature and airflow management" },
    { title: "Quiet Operation", description: "Minimal noise for comfortable environments" },
    { title: "Easy Maintenance", description: "Centralized diagnostics and maintenance scheduling" },
    { title: "Reliable Performance", description: "Proven technology with extended warranty options" }
  ];

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative">
        <SnowflakeAnimation />
        <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Building2 className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold text-primary">INDUSTRY APPLICATIONS</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Daikin VRV for Every Industry
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From commercial offices to specialized clean rooms, discover how Daikin VRV systems 
              deliver optimal climate solutions across diverse industries and applications.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="space-y-12 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-sm border border-white/20 hover:shadow-xl transition-all duration-500 group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 h-80 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-500">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(industry.icon, { className: "w-32 h-32" })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        {industry.title}
                      </h2>
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        {industry.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-yellow-300 mb-3 bg-yellow-500/20 px-3 py-1 rounded-lg inline-block">Key Features:</h3>
                        <ul className="space-y-2">
                          {industry.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-white">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-blue-300 mb-3 bg-blue-500/20 px-3 py-1 rounded-lg inline-block">Applications:</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {industry.applications.map((app, idx) => (
                            <span key={idx} className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30">
                              {app}
                            </span>
                          ))}
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
                          <h4 className="font-medium text-orange-300 mb-2 text-sm">💡 Case Study:</h4>
                          <p className="text-xs text-white/80">{industry.caseStudy}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know about Daikin VRV for ' + industry.title, '_blank')}
                    >
                      Get Solution Quote
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Benefits */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Why Choose Daikin VRV Systems?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proven benefits across all industry applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-400/30 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center hover:from-blue-300/40 hover:to-blue-500/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  <h3 className="font-semibold text-white mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-sm text-blue-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry-Specific Solutions */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                Customized Solutions for Your Industry
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our technical experts design VRV systems tailored to your specific industry requirements, 
                ensuring optimal performance and energy efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Site Survey", desc: "Detailed assessment of your facility requirements" },
                { title: "Custom Design", desc: "Tailored VRV system design for your application" },
                { title: "Professional Installation", desc: "Expert installation and commissioning" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="btn-hero"
                onClick={() => window.open('https://wa.me/919247041999?text=Hi! I need a customized VRV solution for my industry', '_blank')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Applications;