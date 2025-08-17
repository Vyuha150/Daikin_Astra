import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-primary-foreground relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-primary rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-14 h-14 bg-primary-foreground/10 backdrop-blur-md rounded-full flex items-center justify-center border border-primary-foreground/20">
                  <img 
                    src="/lovable-uploads/9c6faec1-96e9-47a6-91de-e115fad62206.png" 
                    alt="ASTRA Star Logo" 
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  ASTRA AIR CONDITIONING
                </h3>
                <p className="text-blue-200 text-sm">& ENGINEERING WORKS</p>
              </div>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              Your trusted Daikin authorized dealer in Vijayawada with 15+ years of experience. 
              We provide complete HVAC solutions from residential split ACs to commercial VRV systems 
              with professional installation and 24/7 support.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-200" />
                <a href="tel:9247041999" className="text-blue-100 hover:text-white transition-colors">
                  9247041999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-200" />
                <a href="mailto:astra.acew@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  astra.acew@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-200 mt-0.5" />
                <address className="text-blue-100 not-italic text-sm leading-relaxed">
                  #59A-17/4, Plot no.98A, Teachers Colony<br />
                  Funtimes Club Road, 4th Line, Vijayawada-03
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'Home', href: 'hero' },
                { label: 'Products', href: 'products' },
                { label: 'Services', href: 'services' },
                { label: 'Offers', href: 'offers' },
                { label: 'Contact', href: 'contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-blue-100 hover:text-white transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services & Products */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>• Split AC Installation</li>
              <li>• Cassette AC Systems</li>
              <li>• VRV Commercial Solutions</li>
              <li>• AC Maintenance & Repair</li>
              <li>• Energy Audit Services</li>
              <li>• 24/7 Emergency Support</li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <Button 
                className="bg-whatsapp hover:bg-whatsapp/90 text-white px-4 py-2 rounded-lg font-medium text-sm w-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/919247041999', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications & Trust Badges */}
        <div className="border-t border-white/20 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { badge: "15+ Years", desc: "Experience" },
              { badge: "Authorized", desc: "Daikin Dealer" },
              { badge: "24/7", desc: "Support" },
              { badge: "500+", desc: "Happy Customers" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-lg font-bold text-white mb-1">{item.badge}</div>
                <div className="text-blue-100 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm text-center md:text-left">
              <p>&copy; 2024 ASTRA Air Conditioning & Engineering Works. All rights reserved.</p>
              <p className="mt-1">Authorized Daikin Dealer - Vijayawada, Andhra Pradesh</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-blue-100 text-sm">Service Areas:</span>
              <div className="text-blue-200 text-sm">
                Vijayawada • Guntur • Machilipatnam • Tenali
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-20 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;