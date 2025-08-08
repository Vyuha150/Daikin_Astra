import { Phone, MessageCircle, FileText, ArrowDown, Sparkles } from 'lucide-react';
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
        backgroundImage: `linear-gradient(135deg, rgba(0, 15, 35, 0.95), rgba(0, 50, 120, 0.85), rgba(0, 100, 200, 0.75)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-indigo-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-cyan-400/10"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000 opacity-40"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-300/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500 opacity-50"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Business Name - Enhanced */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards] mb-12">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
              <span className="text-white/90 font-medium text-sm tracking-wide">Authorized Daikin Dealer</span>
              <Sparkles className="w-5 h-5 text-blue-300 animate-pulse delay-500" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black mb-6 leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl mb-4">
                ASTRA AIR
              </span>
              <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-50 bg-clip-text text-transparent drop-shadow-2xl mb-6">
                CONDITIONING
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-100/90 tracking-wider">
                & ENGINEERING WORKS
              </span>
            </h1>
            
            <div className="flex justify-center items-center gap-2 mt-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 rounded-full"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Main Headline - Enhanced */}
          <div className="animate-slide-up opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards] mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6"></div>
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                  Authorized Dealer in Vijayawada
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Enhanced */}
          <div className="animate-fade-in opacity-0 [animation-delay:1.1s] [animation-fill-mode:forwards] mb-20">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white border-0 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:9247041999')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">Call Now</span>
              </Button>
              
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-0 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://wa.me/919247041999', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">WhatsApp Us</span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <FileText className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Get Free Quote</span>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator - Enhanced */}
          <div className="animate-fade-in opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]">
            <button
              onClick={() => scrollToSection('offers')}
              className="group flex flex-col items-center text-white/70 hover:text-white transition-all duration-500 hover:translate-y-2"
            >
              <div className="relative">
                <ArrowDown className="w-8 h-8 mb-2 group-hover:animate-bounce" />
                <div className="absolute -inset-2 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-sm font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                Discover Our Offers
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in delay-2000">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          <Button
            className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 w-16 h-16 rounded-full shadow-2xl p-0 group border-2 border-white/20"
            onClick={() => window.open('https://wa.me/919247041999', '_blank')}
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;