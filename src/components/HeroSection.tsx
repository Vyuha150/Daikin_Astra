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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 91, 172, 0.85), rgba(0, 140, 255, 0.7)), url(${heroImage})`,
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

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Business Name - Highlighted */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white mb-6 text-shadow leading-tight tracking-tight">
              <span className="block text-gradient bg-gradient-to-r from-white via-blue-50 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                ASTRA AIR CONDITIONING
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 text-blue-50">
                & ENGINEERING WORKS
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-6 shadow-lg"></div>
          </div>

          {/* Main Headline */}
          <div className="animate-slide-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              Buy Daikin ACs and get Installation
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-50 font-medium tracking-wide">
              Authorized Dealer in Vijayawada
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards] flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="btn-hero group transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
              onClick={() => window.open('tel:9247041999')}
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
            
            <Button 
              className="btn-whatsapp group transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
              onClick={() => window.open('https://wa.me/919247041999', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              WhatsApp Us
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 transform"
              onClick={() => scrollToSection('contact')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>


          {/* Scroll Indicator */}
          <div className="animate-bounce opacity-0 [animation-delay:1.4s] [animation-fill-mode:forwards]">
            <button
              onClick={() => scrollToSection('offers')}
              className="text-white/80 hover:text-white transition-all duration-300 group"
            >
              <ArrowDown className="w-10 h-10 mx-auto group-hover:translate-y-1 transition-transform duration-300" />
              <p className="text-lg mt-3 font-medium tracking-wide">Discover Our Offers</p>
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