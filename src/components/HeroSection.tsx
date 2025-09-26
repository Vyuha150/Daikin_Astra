import {
  Phone,
  MessageCircle,
  FileText,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for the carousel (using the same image for demo)
  const heroImages = [
    { src: hero1, alt: "ASTRA Air Conditioning Installation" },
    { src: hero2, alt: "Professional HVAC Services" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{
        backgroundColor: "hsl(var(--bg))",
      }}
    >
      {/* Subtle accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-light/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-16 pb-16 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[80vh]">
            {/* Left: Text Content - Takes 7 columns on large screens */}
            <div className="lg:col-span-7 text-center lg:text-left lg:pt-8 lg:pr-8 lg:max-w-none max-w-sm mx-auto lg:mx-0">
              {/* Added proper spacing and width constraints */}
              {/* Badge */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards] mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent-light font-body text-sm font-medium">
                    Authorized Daikin Dealer
                  </span>
                </div>
              </div>

              {/* Main Headline - Single Line for ASTRA AIR CONDITIONING */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] mb-6">
                <h1 className="font-heading text-foreground mb-4">
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight mb-2">
                    ASTRA AIR CONDITIONING
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-text-muted font-body font-medium">
                    & ENGINEERING WORKS
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards] mb-8">
                <p className="text-lg md:text-xl lg:text-2xl text-text-muted font-body leading-relaxed">
                  Professional HVAC Solutions in Vijayawada
                </p>
              </div>

              {/* CTAs */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] mb-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-accent text-primary-foreground hover:bg-accent/90 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    onClick={() => window.open("tel:9247041999")}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent text-accent hover:bg-accent/8 px-8 py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    onClick={() => scrollToSection("contact")}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Button>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
                <p className="text-text-muted font-body text-center lg:text-left">
                  Professional installation • Same-day service in Vijayawada
                </p>
              </div>
            </div>

            {/* Right: Image Carousel - Takes 5 columns on large screens */}
            <div className="lg:col-span-5 lg:mt-12 animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <div className="relative max-w-lg mx-auto">
                <Carousel
                  className="relative"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[4/3] rounded-2xl bg-surface border border-outline overflow-hidden group">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Navigation buttons */}
                  <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-surface/80 border-outline hover:bg-accent/10 text-text" />
                  <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-surface/80 border-outline hover:bg-accent/10 text-text" />

                  {/* Dots indicator */}
                  <div className="flex justify-center gap-2 mt-4">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-accent w-6"
                            : "bg-outline hover:bg-accent/50"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </Carousel>
                <div className="absolute inset-0 rounded-2xl border border-accent/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center animate-fade-in opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
          <button
            onClick={() => scrollToSection("offers")}
            className="group flex flex-col items-center text-text-muted hover:text-accent transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 mb-2 group-hover:animate-bounce" />
            <p className="text-sm font-body">Discover Our Offers</p>
          </button>
        </div>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce-in delay-2000">
        <div className="relative group">
          <Button
            className="bg-whatsapp hover:bg-whatsapp/90 w-14 h-14 rounded-full shadow-xl p-0 group transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2"
            onClick={() => window.open("https://wa.me/919247041999", "_blank")}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
