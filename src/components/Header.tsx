import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/20' 
        : 'bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Business Name */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-primary rounded-full blur-sm opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background/20 to-background/5 backdrop-blur-md border border-white/10">
                <img 
                  src="/lovable-uploads/9c6faec1-96e9-47a6-91de-e115fad62206.png" 
                  alt="ASTRA Star Logo" 
                  className="w-12 h-12 object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className={`text-lg font-heading font-bold leading-tight transition-all duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
              }`}>
                ASTRA AIR CONDITIONING
              </h1>
              <p className={`text-sm font-medium transition-all duration-300 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/90 drop-shadow-md'
              }`}>
                & ENGINEERING WORKS
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 font-medium transition-all duration-300 hover:text-primary relative rounded-lg hover:bg-white/10 backdrop-blur-sm ${
                    isScrolled ? 'text-foreground' : 'text-white/90'
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-8 hover:after:left-1/2 hover:after:-translate-x-1/2`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 font-medium transition-all duration-300 hover:text-primary relative rounded-lg hover:bg-white/10 backdrop-blur-sm ${
                    isScrolled ? 'text-foreground' : 'text-white/90'
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-8 hover:after:left-1/2 hover:after:-translate-x-1/2`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 transition-transform duration-200 group-hover:rotate-90 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 transition-transform duration-200 group-hover:scale-110 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 animate-fade-in rounded-b-2xl shadow-2xl">
            <nav className="py-6 space-y-1">
              {navItems.map((item) => (
                item.isRoute ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block w-full text-left px-6 py-4 font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-xl mx-2 hover:translate-x-2"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-4 font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-xl mx-2 hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;