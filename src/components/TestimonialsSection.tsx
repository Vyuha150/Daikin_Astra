import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mr. Rao",
      location: "Vijayawada",
      rating: 5,
      text: "Got my 1.5 Ton Daikin installed in a day! Excellent service and very professional team. The AC is working perfectly and cooling is amazing.",
      service: "Split AC Installation",
      image: "👨‍💼"
    },
    {
      name: "Ms. Rekha",
      location: "Guntur",
      rating: 5,
      text: "Perfect cooling and amazing support team. They explained everything clearly and the installation was clean and quick. Highly recommended!",
      service: "Inverter AC Installation",
      image: "👩‍💼"
    },
    {
      name: "Dr. Prasad",
      location: "Vijayawada",
      rating: 5,
      text: "Excellent experience with ASTRA. The VRV system for our clinic is working flawlessly. Professional service and great after-sales support.",
      service: "VRV Commercial Installation",
      image: "👨‍⚕️"
    },
    {
      name: "Mr. Kumar",
      location: "Machilipatnam",
      rating: 5,
      text: "Best AC dealer in the region. Genuine products, fair pricing, and excellent installation. Our office Cassette ACs are working perfectly.",
      service: "Cassette AC Installation",
      image: "👨‍💻"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted to-accent/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-primary fill-current" />
            <span className="font-semibold text-primary">CUSTOMER TESTIMONIALS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from satisfied customers across Vijayawada and surrounding areas
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-glass p-8 lg:p-12 text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="w-12 h-12" />
            </div>

            {/* Customer Avatar */}
            <div className="text-6xl mb-6">
              {testimonials[currentTestimonial].image}
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                <Star key={index} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 italic font-medium leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-muted-foreground mb-2">
                {testimonials[currentTestimonial].location}
              </p>
              <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-1">
                <span className="text-sm font-medium text-primary">
                  {testimonials[currentTestimonial].service}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
            { number: "100%", label: "Genuine Products" }
          ].map((stat, index) => (
            <div key={index} className="card-hover relative group">
              <div className="professional-card p-6 h-full text-center relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-lg font-semibold text-foreground">{stat.label}</p>
                  <p className="text-muted-foreground text-sm mt-2">Excellence guaranteed</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Join hundreds of satisfied customers in Vijayawada
          </p>
          <Button 
            className="btn-hero"
            onClick={() => window.open('https://wa.me/919247041999?text=Hi! I want to know more about your AC services', '_blank')}
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;