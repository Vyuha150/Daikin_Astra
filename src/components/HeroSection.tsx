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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{
        backgroundColor: 'hsl(var(--bg))'
      }}
    >
      {/* Subtle accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-light/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards] mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent-light font-body text-sm font-medium">Authorized Daikin Dealer</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4">
                <span className="block mb-2">ASTRA AIR</span>
                <span className="block mb-2">CONDITIONING</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-text-muted font-body font-medium">
                  & ENGINEERING WORKS
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards] mb-8">
              <p className="text-xl md:text-2xl text-text-muted font-body">
                Professional HVAC Solutions in Vijayawada
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-accent text-primary-foreground hover:bg-accent/90 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  onClick={() => window.open('tel:9247041999')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/8 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  onClick={() => scrollToSection('contact')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              <p className="text-text-muted font-body">
                Professional installation • 3-year warranty • Same-day service in Vijayawada
              </p>
            </div>
          </div>

          {/* Right: Media Carousel Placeholder */}
          <div className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-surface border border-outline overflow-hidden">
                <img 
                  src={heroImage}
                  alt="ASTRA Air Conditioning Services" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border border-accent/20"></div>
            </div>
          </div>
        </div>

        
        {/* Scroll Indicator */}
        <div className="text-center animate-fade-in opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
          <button
            onClick={() => scrollToSection('offers')}
            className="group flex flex-col items-center text-text-muted hover:text-accent transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 mb-2 group-hover:animate-bounce" />
            <p className="text-sm font-body">
              Discover Our Offers
            </p>
          </button>
        </div>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in delay-2000">
        <div className="relative group">
          <Button
            className="bg-whatsapp hover:bg-whatsapp/90 w-14 h-14 rounded-full shadow-xl p-0 group transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
            onClick={() => window.open('https://wa.me/919247041999', '_blank')}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;