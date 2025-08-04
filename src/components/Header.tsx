import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Products', href: '/products', isRoute: true },
    { label: 'Technology', href: '/technology', isRoute: true },
    { label: 'Applications', href: '/applications', isRoute: true },
    { label: 'Services', href: '/services', isRoute: true },
    { label: 'Offers', href: '/offers', isRoute: true },
    { label: 'Contact', href: '/contact', isRoute: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo & Business Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden md:block">
              <h1 className={`text-sm lg:text-base font-heading font-bold leading-tight ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                ASTRA AIR CONDITIONING
              </h1>
              <p className={`text-xs font-medium ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                & ENGINEERING WORKS
              </p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="font-semibold">9247041999</span>
            </div>
            <Button 
              className="btn-whatsapp flex items-center space-x-2"
              onClick={() => window.open('https://wa.me/919247041999', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-all duration-300 hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border animate-fade-in">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block w-full text-left px-4 py-2 font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-primary mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">9247041999</span>
                </div>
                <Button 
                  className="btn-whatsapp w-full justify-center"
                  onClick={() => window.open('https://wa.me/919247041999', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;