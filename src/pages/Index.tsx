import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OffersSection from '@/components/OffersSection';
import ProductsPreview from '@/components/ProductsPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SnowflakeAnimation from '@/components/SnowflakeAnimation';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <>
      {!isLoadingComplete ? (
        <LoadingScreen onLoadingComplete={() => setIsLoadingComplete(true)} />
      ) : (
        <div className="min-h-screen bg-background relative">
          <SnowflakeAnimation />
          <Header />
          <HeroSection />
          <OffersSection />
          <ProductsPreview />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;