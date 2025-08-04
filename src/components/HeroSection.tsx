import { Phone, MessageCircle, FileText, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 91, 172, 0.8), rgba(0, 140, 255, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Business Name - Highlighted */}
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white mb-4 text-shadow leading-tight">
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ASTRA AIR CONDITIONING
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-bold mt-3">
                & ENGINEERING WORKS
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
          </div>

          {/* Main Headline */}
          <div className="animate-slide-up delay-300">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
              Buy Daikin ACs and get Installation
            </h2>
            <p className="text-lg md:text-xl text-blue-100 font-medium">
              Authorized Dealer in Vijayawada
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in delay-700 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-hero group"
              onClick={() => window.open('tel:9247041999')}
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
            
            <Button 
              className="btn-whatsapp group"
              onClick={() => window.open('https://wa.me/919247041999', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              WhatsApp Us
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-xl font-semibold text-lg shadow-cta hover:shadow-hero transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>

          {/* Features Highlight */}
          <div className="animate-slide-up delay-1000 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏢", title: "Xtensive Range", desc: "Complete AC Solutions" },
              { icon: "⚡", title: "Xcellent Technology", desc: "Latest VRV Systems" },
              { icon: "💰", title: "Xtra Power Savings", desc: "Energy Efficient" },
              { icon: "🛡️", title: "Xtended Reliability", desc: "15+ Years Trust" }
            ].map((feature, index) => (
              <div key={index} className="card-glass p-4 text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="font-heading font-bold text-primary text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('offers')}
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
              <p className="text-sm mt-2">Discover Our Offers</p>
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in delay-1500">
        <Button
          className="btn-whatsapp w-14 h-14 rounded-full shadow-xl hover:shadow-2xl p-0 group"
          onClick={() => window.open('https://wa.me/919247041999', '_blank')}
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;