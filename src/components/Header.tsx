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
    { label: 'Contact', href: '/contact', isRoute: true },
    { label: 'Admin', href: '/admin', isRoute: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-sm border-b' 
        : ''
    }`}
    style={{
      backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.55)' : 'hsl(var(--surface))',
      borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent'
    }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Only */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/9c6faec1-96e9-47a6-91de-e115fad62206.png" 
                  alt="ASTRA Star Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              item.isRoute ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 font-body font-medium transition-all duration-300 relative ${
                    isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-accent-light'
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 font-body font-medium transition-all duration-300 relative ${
                    isScrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-accent-light'
                  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0`}
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